export type V6View = 'praca' | 'conversa' | 'usuario' | 'mestre';

export type NavigateV6 = (view: V6View) => void;

export interface UnoMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

