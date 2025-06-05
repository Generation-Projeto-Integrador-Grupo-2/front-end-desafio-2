import axios from "axios";
import type { CalculoTempoCorrida } from "../models/CalculoTempoCorrida";
import type { CorridaRequest } from '../models/CorridaRequest';
import type Corrida from "../models/Corrida";
import type UsuarioLogin from "../models/UsuarioLogin";

export const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

export const login = async (
    url: string,
    dados: UsuarioLogin,
    setDados: Function
): Promise<UsuarioLogin> => {
    try {
        const resposta = await api.post<UsuarioLogin>(url, dados);
        setDados(resposta.data);
        return resposta.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
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

export async function buscarTempoCorrida(id: number, header: object): Promise<CalculoTempoCorrida> {
    const response = await api.get<CalculoTempoCorrida>(`/corridas/tempo/${id}`, header);
    return response.data;
}

export const cadastrarCorrida = async (
    dados: CorridaRequest,
    setDados: (corrida: Corrida) => void,
    header: object
): Promise<Corrida> => {
    const resposta = await api.post<Corrida>('/corridas/cadastrar', dados, header);
    setDados(resposta.data);
    return resposta.data;
}

export const aceitarCorrida = async (
    id: number,
    header: Object
): Promise<Corrida> => {
    const resposta = await api.put<Corrida>(`/corridas/aceitar/${id}`, null, header);
    return resposta.data;
}

export const listarCorridas = async (header: Object): Promise<Corrida[]> => {
    const resposta = await api.get<Corrida[]>('/corridas', header);
    return resposta.data;
};

