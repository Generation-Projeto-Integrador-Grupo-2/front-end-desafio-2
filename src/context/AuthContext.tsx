import { createContext, type ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom"

import { login } from "../service/Service"
import type UsuarioLogin from "../models/UsuarioLogin"
import { ToastAlerta } from "../utils/ToastAlert"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
    const navigate = useNavigate()

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        email: "",
        senha: "",
        foto: "",
        token: "",
        tipo: null
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            const response = await login('/usuarios/logar', usuarioLogin, setUsuario)

            if (response.token) {
                localStorage.setItem('token', response.token)
                ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso")
                navigate('/home')
            }
        } catch (error: any) {
            console.error('Login error:', error)
            ToastAlerta(error.response?.data?.message || "Erro ao autenticar!", "erro")
        } finally {
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            email: "",
            senha: "",
            foto: "",
            token: "",
            tipo: null
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
