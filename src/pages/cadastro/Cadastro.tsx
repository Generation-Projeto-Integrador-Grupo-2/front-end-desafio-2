import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import './Cadastro.css'
import { RotatingLines } from 'react-loader-spinner'
import { ToastAlerta } from '../../utils/ToastAlerta'
import { cadastrarUsuario } from '../../service/Service'
import type { Usuario } from '../../models/Usuario'

function Cadastro() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    tipo: 'PASSAGEIRO'
  })

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setUsuario(prev => ({ ...prev, [name]: value }))
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function validarEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg('')

    if (usuario.senha !== confirmaSenha) {
      setErrorMsg('As senhas não coincidem.')
      return
    }

    if (usuario.senha.length < 8) {
      setErrorMsg('A senha deve conter pelo menos 8 caracteres.')
      return
    }

    if (!usuario.nome.trim() || !usuario.usuario.trim()) {
      setErrorMsg('Nome e e-mail são obrigatórios.')
      return
    }

    if (!validarEmail(usuario.usuario)) {
      setErrorMsg('Por favor, insira um e-mail válido.')
      return
    }

    setIsLoading(true)

    try {
      const { id, corrida, motorista, ...dadosUsuario } = usuario

      await cadastrarUsuario('/usuarios/cadastrar', dadosUsuario, () => {})
      ToastAlerta('Usuário cadastrado com sucesso!')
      navigate('/login')
    } catch (error: any) {
      ToastAlerta('Erro ao cadastrar usuário')
      if (error.response) {
        setErrorMsg(`Erro: ${error.response.status} - ${error.response.data?.message || error.response.statusText}`)
      } else if (error.request) {
        ToastAlerta('Erro: servidor não respondeu. Tente novamente mais tarde.')
      } else {
        setErrorMsg(`Erro: ${error.message}`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  function cancelarCadastro() {
    navigate('/login')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-[#F3F4F6]">
      <div className="fundoCadastro hidden lg:block"></div>
      <form
        className="flex items-start justify-start flex-col w-2/3 gap-3 bg-[#FFFFFF] p-8 rounded-xl shadow-md ml-16"
        onSubmit={cadastrarNovoUsuario}
        noValidate
      >
        <h2 className="text-[#374151] text-5xl mb-6">Cadastrar</h2>

        {errorMsg && (
          <div
            role="alert"
            className="bg-yellow-100 text-yellow-800 border border-yellow-400 p-3 rounded mb-4 w-full text-center"
          >
            {errorMsg}
          </div>
        )}

        <div className="flex flex-col w-full">
          <label htmlFor="nome" className="text-[#374151]">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            autoComplete="name"
            className="border-2 border-[#6B7280] rounded p-2 bg-[#F3F4F6] text-[#374151]"
            value={usuario.nome}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="usuario" className="text-[#374151]">Usuario</label>
          <input
            type="email"
            id="usuario"
            name="usuario"
            placeholder="E-mail"
            autoComplete="email"
            className="border-2 border-[#6B7280] rounded p-2 bg-[#F3F4F6] text-[#374151]"
            value={usuario.usuario}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="foto" className="text-[#374151]">Foto</label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="URL da foto"
            className="border-2 border-[#6B7280] rounded p-2 bg-[#F3F4F6] text-[#374151]"
            value={usuario.foto}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="tipo" className="text-[#374151]">Tipo de Usuário</label>
          <select
            id="tipo"
            name="tipo"
            className="border-2 border-[#6B7280] rounded p-2 bg-[#F3F4F6] text-[#374151]"
            value={usuario.tipo || ''}
            onChange={atualizarEstado}
            required
          >
            <option value="">Selecione...</option>
            <option value="PASSAGEIRO">Passageiro</option>
            <option value="MOTORISTA">Motorista</option>
          </select>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha" className="text-[#374151]">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            autoComplete="new-password"
            className="border-2 border-[#6B7280] rounded p-2 bg-[#F3F4F6] text-[#374151]"
            value={usuario.senha}
            onChange={atualizarEstado}
            required
            minLength={8}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha" className="text-[#374151]">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            autoComplete="new-password"
            className="border-2 border-[#6B7280] rounded p-2 bg-[#F3F4F6] text-[#374151]"
            value={confirmaSenha}
            onChange={handleConfirmarSenha}
            required
          />
        </div>

        <div className="flex justify-around w-full gap-8 mt-6">
          <button
            type="button"
            className="rounded text-white bg-red-500 hover:bg-red-700 w-1/2 py-2"
            onClick={cancelarCadastro}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded text-white bg-[#84CC16] hover:bg-[#65a30d] w-1/2 py-2 flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
                ariaLabel="Carregando"
              />
            ) : (
              'Cadastrar'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro
