import './Login.css';

function Login() {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    console.log("Form enviado");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-[#F3F4F6]">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col w-1/2 gap-4 bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-[#374151] text-5xl">Entrar</h2>

        <div className="flex flex-col w-full">
          <label htmlFor="usuario" className="text-[#6B7280]">
            Usuário
          </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuário"
            className="border-2 border-[#374151] rounded p-2 bg-[#FFFFFF] text-[#374151]"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha" className="text-[#6B7280]">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-[#374151] rounded p-2 bg-[#FFFFFF] text-[#374151]"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-[#84CC16] flex justify-center hover:bg-[#6B7280] text-white w-1/2 py-2 transition-colors"
        >
          <span>Entrar</span>
        </button>

        <hr className="border-[#374151] w-full" />

        <p className="text-[#374151]">
          Ainda não tem uma conta?{' '}
          <a href="/cadastro" className="text-[#84CC16] hover:underline">
            Cadastre-se
          </a>
        </p>
      </form>

      <div className="fundoLogin hidden lg:block"></div>
    </div>
  );
}

export default Login;
