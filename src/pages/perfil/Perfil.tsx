import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"



function Perfil() {

    const navigate = useNavigate();

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            alert("Você precisa estar logado")
            navigate("/")
        }
    }, [usuario.token])

    return (
        <section className="h-screen w-full bg-gradient-to-r from-[#84cc16] to-green-300 flex items-center justify-center px-4">
            <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-3xl w-full text-left">
                <div className="flex items-center gap-8 mb-6">
                    <img
                        src={usuario.foto}
                        alt="Foto de Perfil"
                        className="w-32 h-32 rounded-full border-4 border-green-200 object-cover"
                    />
                    <div>
                        <h1 className="text-4xl font-bold text-[#374151] mb-1">{usuario.nome}</h1>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-[#374151] font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={usuario.email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84cc16]"
                            readOnly
                        />
                    </div>
                    <div>
                        <p>Tipo de Usuário:</p>
                        <p>{usuario.tipo}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Perfil
