import axios from "axios";
import type { CalculoTempoCorrida } from "../models/CalculoTempoCorrida";
import type Corrida from "../models/Corrida";

const api = axios.create({
    baseURL: "http://localhost:8080"
});

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}

export const buscarTempoCorrida = async (id: number, header: Object): Promise<CalculoTempoCorrida> => {
    const resposta = await api.get(`/corridas/tempo/${id}`, header);
    return resposta.data;
}

export const cadastrarCorrida = async (
    dados: Corrida,
    setDados: Function,
    header: Object
): Promise<Corrida> => {
    const resposta = await api.post<Corrida>('/corridas', dados, header);
    setDados(resposta.data);
    return resposta.data;
}

export const aceitarCorrida = async (
    id: number,
    header: Object
): Promise<Corrida> => {
    const resposta = await api.put<Corrida>(`/corridas/aceitar/${id}`, null, header);
    return resposta.data;
};

