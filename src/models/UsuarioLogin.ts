import type { TipoUsuario } from "./TipoUsuario";

export default interface UsuarioLogin {
    id: number;
    nome: string;
    email: string;
    senha: string;
    foto: string;
    token: string;
    tipo?: TipoUsuario;
}