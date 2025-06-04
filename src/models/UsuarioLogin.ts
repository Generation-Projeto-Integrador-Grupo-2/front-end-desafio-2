export default interface UsuarioLogin {
  id: number;
  nome: string;
  usuario: string;
  email?: string;
  senha: string;
  foto: string;
  token: string;
  tipo: string | null;
}
