import type Motorista from "./Motorista";
import type Usuario from "./Usuario";

export default interface Corrida {
    id: number;
    origem: string;
    destino: string;
    preco: number;
    horario: string;
    velocidadeMedia: number;
    distancia: number;
    usuario?: Usuario;
    motorista?: Motorista;
}