import type Corrida from "./Corrida";
import type Motorista from "./Motorista";

export interface Usuario {
  id?: number;
  nome: string;
  usuario: string; // Este campo será utilizado como e-mail (login)
  senha: string;
  foto: string;
  tipo: 'PASSAGEIRO' | 'MOTORISTA' | null;
  motorista?: Motorista;
  corrida?: Corrida[];
}

