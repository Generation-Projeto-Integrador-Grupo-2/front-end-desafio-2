import type Corrida from "./Corrida";
import type Usuario from "./Usuario";

export default interface Motorista {
    id?: number;
    cnh: string;
    modeloCarro: string;
    placa: string;
    usuario?: Usuario;
    corridas?: Corrida[];
}