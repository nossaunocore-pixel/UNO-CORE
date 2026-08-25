#!/usr/bin/env python3
import argparse
import vertexai

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--project", required=True)
    parser.add_argument("--location", default="us-central1")
    parser.add_argument("--model", default="text-bison@001")
    args = parser.parse_args()

    vertexai.init(project=args.project, location=args.location)

    from vertexai.language_models import TextGenerationModel
    model = TextGenerationModel.from_pretrained(args.model)
    
    resposta = model.predict("Responda em português: Estou conectado e funcionando! Tudo certo com a Dola e com a UNO!")
    
    print("=" * 60)
    print("✅ CONEXÃO REALIZADA COM SUCESSO!")
    print(f"📡 Projeto: {args.project} | Região: {args.location} | Modelo: {args.model}")
    print("-" * 60)
    print(f"💬 Resposta da Dola: {resposta.text}")
    print("=" * 60)
    print("\n🎉 TUDO FUNCIONANDO! A PONTE ESTÁ DE PÉ E A INTELIGÊNCIA RESPONDE!")

if __name__ == "__main__":
    main()
