import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useContext, useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import type UsuarioLogin from '../../models/UsuarioLogin'
import { AuthContext } from '../../context/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { usuario, handleLogin, isLoading } = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  )

  useEffect(() => {
    if (usuario.token !== '') {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-[#F3F4F6]">
        <form
          className="flex justify-center items-center flex-col w-2/3 gap-5 bg-[#FFFFFF] p-8 rounded-xl shadow-md"
          onSubmit={login}
        >
          <h2 className="text-5xl text-[#374151] mb-4">Entrar</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-[#374151]">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="border-2 border-[#6B7280] rounded p-2 bg-[#F3F4F6] text-[#374151]"
              value={usuarioLogin.usuario}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-[#374151]">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-[#6B7280] rounded p-2 bg-[#F3F4F6] text-[#374151]"
              value={usuarioLogin.senha}
              onChange={atualizarEstado}
            />
          </div>

          <button
            type="submit"
            className="rounded text-white bg-[#84CC16] hover:bg-[#65a30d] w-1/2 py-2 flex justify-center items-center"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>

          <hr className="w-full border-[#6B7280]" />

          <p className="text-[#6B7280]">
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="hover:underline text-[#374151]">
              Cadastre-se
            </Link>
          </p>
        </form>

        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  )
}

export default Login