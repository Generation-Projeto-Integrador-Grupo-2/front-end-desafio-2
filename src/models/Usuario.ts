import type Corrida from "./Corrida";
import type Motorista from "./Motorista";
import type { TipoUsuario } from "./TipoUsuario";

export default interface Usuario {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    foto: string;
    tipo: TipoUsuario;
    motorista?: Motorista;
    corrida?: Corrida[];
}