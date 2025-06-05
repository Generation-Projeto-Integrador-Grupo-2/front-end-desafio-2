import { toast } from 'react-toastify';

export function ToastAlerta(mensagem: string, tipo: string = 'info') {
  switch (tipo) {
    case 'sucesso':
      toast.success(mensagem);
      break;
    case 'erro':
      toast.error(mensagem);
      break;
    case 'aviso':
      toast.warn(mensagem);
      break;
    default:
      toast.info(mensagem);
  }
}
