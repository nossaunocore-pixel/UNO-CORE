#!/usr/bin/env python3
"""
scripts/update_dola.py
Exemplo: conecta ao Vertex AI / Generative models (Gemini / Text-Bison) e gera texto a partir de um prompt.
Feito para rodar no GitHub Actions com Workload Identity Federation (OIDC) configurado via google-github-actions/auth.
Comportamento:
- Usa Application Default Credentials (ADC) — funcionará automaticamente no GitHub Actions após a ação 'google-github-actions/auth'.
- Prompt padrão: "Olá Dola, resuma a missão do projeto UNO-CORE em 2 frases."
- Parâmetros: --project, --location, --model, --prompt, --max-tokens
"""
import os
import sys
import argparse
# Tente usar o SDK moderno do Vertex AI
try:
    from google.cloud import aiplatform
    HAS_AIP = True
except Exception:
    HAS_AIP = False
def get_env_or_adc_project() -> str:
    """
    Retorna PROJECT_ID a partir da variável de ambiente PROJECT_ID ou das ADCs.
    """
    project = os.environ.get("PROJECT_ID")
    if project:
        return project
    try:
        import google.auth
        _, project = google.auth.default()
        if project:
            return project
    except Exception:
        pass
    return ""
def generate_with_aiplatform(project: str, location: str, model_id: str, prompt: str, max_tokens: int = 512):
    """
    Usa google.cloud.aiplatform.TextGenerationModel quando disponível para fazer a chamada de geração.
    """
    # Inicializa a biblioteca (ADC será usada para credenciais)
    aiplatform.init(project=project, location=location)
    # Carrega o modelo pré-treinado (o nome do modelo depende da disponibilidade)
    try:
        model = aiplatform.TextGenerationModel.from_pretrained(model_id)
    except Exception as e:
        raise RuntimeError(f"Falha ao carregar modelo '{model_id}' via TextGenerationModel: {e}")
    # Gera texto
    response = model.predict(
        prompt,
        max_output_tokens=max_tokens,
        temperature=0.2,
    )
    return response
def main(argv):
    parser = argparse.ArgumentParser(description="Exemplo: chama Generative AI / Vertex AI para atualizar Dola.")
    parser.add_argument("--prompt", "-p", default=None, help="Prompt a enviar ao modelo (ou usa env PROMPT)")
    parser.add_argument("--project", "-P", default=None, help="PROJECT_ID (ou usa env PROJECT_ID)")
    parser.add_argument("--location", "-l", default=os.environ.get("LOCATION", "us-central1"), help="Região/Location do Vertex AI (ex: us-central1)")
    parser.add_argument("--model", "-m", default=os.environ.get("MODEL_ID", "text-bison@001"), help="ID do modelo (ex: text-bison@001)")
    parser.add_argument("--max-tokens", "-t", type=int, default=512, help="Máximo de tokens de saída")
    args = parser.parse_args(argv)
    prompt = args.prompt or os.environ.get("PROMPT") or "Olá Dola, resuma a missão do projeto UNO-CORE em 2 frases."
    project = args.project or get_env_or_adc_project()
    location = args.location
    model_id = args.model
    if not project:
        print("Erro: PROJECT_ID não foi informado via --project nem via env PROJECT_ID, e ADC não forneceu projeto.", file=sys.stderr)
        sys.exit(2)
    print(f"Project: {project}, location: {location}, model: {model_id}")
    print("Prompt:", prompt)
    if HAS_AIP:
        try:
            result = generate_with_aiplatform(project=project, location=location, model_id=model_id, prompt=prompt, max_tokens=args.max_tokens)
            # Dependendo da versão do SDK, o resultado pode ter atributos diferentes
            try:
                text = getattr(result, "text", None) or getattr(result, "content", None)
                if text:
                    print("=== Generated text ===")
                    print(text)
                else:
                    print("=== Generated response (raw) ===")
                    print(result)
            except Exception:
                print(result)
        except Exception as e:
            print(f"Erro ao gerar via aiplatform: {e}", file=sys.stderr)
            sys.exit(1)
    else:
        print("google.cloud.aiplatform não disponível. Instale google-cloud-aiplatform no runner.", file=sys.stderr)
        sys.exit(3)
if __name__ == "__main__":
    main(sys.argv[1:])
