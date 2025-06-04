import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"



function SobreNos() {

    const navigate = useNavigate();

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            alert("Você precisa estar logado")
            navigate("/")
        }
    }, [usuario.token])

    return (

        <div className="bg-gradient-to-r from-[#84cc16] to-green-300 text-[#374151] flex items-center justify-center min-h-screen">
            <main className="max-w-5xl mx-auto px-6 py-10">
                <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-3xl w-full text-left">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-[#374151] mb-4">Sobre nós da
                            <strong className="text-[#84cc16]"> rebU98</strong></h2>
                        <p className="text-[#6b7280] text-lg leading-relaxed">
                            o rebU98 é um aplicativo inovador que conecta motoristas e passageiros
                            de forma prática, rápida e segura. Pensado para facilitar deslocamentos diários ou oferecer uma carona a quem precisa,
                            nossa plataforma responsiva garante uma experiência intuitiva e eficiente em qualquer dispositivo.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-[#374151] mb-6">Equipe De Desenvolvimento</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                            <div>
                                <img src="https://media.canva.com/v2/image-resize/format:JPG/height:200/quality:75/uri:ifs%3A%2F%2FM%2F45de190b-d326-4b63-8ace-a6266fd1dde7/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAAIAv_jZ52xiphiElTg6tO2_ZmnEyvbpu1GlixX0CvoL&exp=1749088812&osig=AAAAAAAAAAAAAAAAAAAAAM4WL6KLdA7zbRvSRpEYYQjNNzS0xcV5wOklQeNoOjdR&signer=media-rpc&x-canva-quality=thumbnail" alt="Foto de Maria de Fatima" />
                                Maria de Fátima
                            </div>
                            <div>
                                <img src="https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2F2bdafb13-56b3-467d-bf7a-3005899ebeac/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAAxHON-RyzMsDZ5K_bHt-L-7zagA8IADv7E4KBIv1eec&exp=1749088711&osig=AAAAAAAAAAAAAAAAAAAAACB5xFEfKYVVNrSGNHEBYYFk8x6aLYx0gYyoy891k74V&signer=media-rpc&x-canva-quality=thumbnail" alt="Foto de Luana Cardoso" />
                                Luana Cardoso
                            </div>
                            <div>
                                <img src="https://media.canva.com/v2/image-resize/format:JPG/height:200/quality:75/uri:ifs%3A%2F%2FM%2Fd0579745-8e21-4f6f-9a02-75659ac4e4df/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAJXAklG_rZFES_gvJTNYPGSGJq4Efu4zwwqwpN1VIxIL&exp=1749087552&osig=AAAAAAAAAAAAAAAAAAAAAAGNFPysedd1s-yR-sFAVPZ_eowUe4KHmbfdnd4VAQHc&signer=media-rpc&x-canva-quality=thumbnail" alt="Foto de Guilherme Lima" />
                                Guilherme Lima
                            </div>
                            <div>
                                <img src="https://media.canva.com/v2/image-resize/format:JPG/height:200/quality:75/uri:ifs%3A%2F%2FM%2Fca3a00de-2c46-49da-a91f-a92cef2814af/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAJo5UCCnVtA6K914ODv2SdSFwSroPlapYfEgIBEMmfB-&exp=1749089144&osig=AAAAAAAAAAAAAAAAAAAAAC8qCLJb0TRYgH013p5Td_w0dS8wi-vDNOrAAze0m0XJ&signer=media-rpc&x-canva-quality=thumbnail" alt="Foto de Leonardo de Paula" />
                                Leonardo de Paula
                            </div>
                            <div>
                                <img src="https://media.canva.com/v2/image-resize/format:JPG/height:200/quality:75/uri:ifs%3A%2F%2FM%2F759e94ed-91c8-4544-a86c-bcd202460233/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAANgVrVlD8gvXd9GtGE508DjOK8iX00709BIy0rArD8sq&exp=1749087590&osig=AAAAAAAAAAAAAAAAAAAAAK46g2gVnasPTtUoBV1IMDlunBdTFNMeyRujSL-KLOa7&signer=media-rpc&x-canva-quality=thumbnail" alt="Foto de Caio Nascimento" />
                                Caio Nascimento
                            </div>
                            <div>
                                <img src="https://media.canva.com/v2/image-resize/format:JPG/height:200/quality:75/uri:ifs%3A%2F%2FM%2Fdb6e6435-9051-47d2-81db-ddcf8a668400/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAD38gKCrHymNdTzjF5KmbnjlOi2D5RLrn1nJB2S8Tq-i&exp=1749086510&osig=AAAAAAAAAAAAAAAAAAAAADU6wnAEg8yDeYhMAzbwpqGRePkoSpMQ0v84oXV3tbH4&signer=media-rpc&x-canva-quality=thumbnail" alt="Foto de Laura Nery" />
                                Laura Nery
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>

    )

}

export default SobreNos