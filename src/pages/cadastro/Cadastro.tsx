import './Cadastro.css';

function Cadastro() {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    console.log("Formulário enviado");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-[#F3F4F6]">
      
      <div className="fundoCadastro hidden lg:block"></div>

      <form 
        onSubmit={handleSubmit}
        className='flex justify-center items-center flex-col w-2/3 gap-4 bg-[#FFFFFF] p-8 rounded-lg shadow-lg'
      >
        <h2 className='text-[#374151] text-5xl'>Cadastrar</h2>

        <div className="flex flex-col w-full">
          <label htmlFor="nome" className="text-[#6B7280]">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="border-2 border-[#374151] rounded p-2 bg-[#FFFFFF] text-[#374151]"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="usuario" className="text-[#6B7280]">Usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuário"
            className="border-2 border-[#374151] rounded p-2 bg-[#FFFFFF] text-[#374151]"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="foto" className="text-[#6B7280]">Foto (URL)</label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="URL da foto"
            className="border-2 border-[#374151] rounded p-2 bg-[#FFFFFF] text-[#374151]"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha" className="text-[#6B7280]">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-[#374151] rounded p-2 bg-[#FFFFFF] text-[#374151]"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha" className="text-[#6B7280]">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            className="border-2 border-[#374151] rounded p-2 bg-[#FFFFFF] text-[#374151]"
          />
        </div>

        <div className="flex justify-around w-full gap-8">
          <button 
            type='reset'
            className='rounded text-white bg-[#6B7280] hover:bg-[#374151] w-1/2 py-2 transition-colors'
          >
            Cancelar
          </button>
          
          <button 
            type='submit'
            className='rounded text-white bg-[#84CC16] hover:bg-[#6B7280] w-1/2 py-2 flex justify-center transition-colors'
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
