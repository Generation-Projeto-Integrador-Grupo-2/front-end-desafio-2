import { Link } from "react-router-dom"
import TestimonialsCarousel from "../../components/testimonials/TestimonialsCarousel"
import { ArrowsLeftRightIcon, CarIcon, ShieldCheckIcon } from "@phosphor-icons/react"

function Home() {
    return (
        <>
            <section
                id="home"
                className="h-screen bg-[#f3f4f6] text-black flex items-center"
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        {/* Bloco de texto */}
                        <div className="flex flex-col max-w-xl">
                            <h1 className='text-4xl md:text-6xl leading-tight mb-6'>
                                Junte-se ao <span className="text-lime-600 font-bold">rebU98</span>!
                            </h1>
                            <p className='text-lg text-gray-700 mb-6'>
                                Economize tempo, reduza seus gastos com transporte e ainda contribua com o meio ambiente.
                                Com o rebU, você compartilha caronas com segurança, praticidade e pessoas da sua comunidade.
                                Cadastre-se agora e faça parte da nova mobilidade urbana!
                            </p>
                            <Link to="/corridas">
                                <button className="mt-2 px-6 py-4 bg-lime-600 text-white font-semibold rounded-xl shadow-md hover:bg-lime-700 transition">
                                    Encontre sua próxima carona
                                </button>
                            </Link>
                        </div>

                        {/* Imagem */}
                        <div className="md:ml-8">
                            <img
                                src="https://ik.imagekit.io/6tjnbersb/imagemhome1.jpg?updatedAt=1749055987373"
                                alt="Imagem rebU"
                                className="w-[550px] h-auto rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
                    <div className="flex flex-col gap-8 w-full md:w-1/4">
                        <div>
                            <h3 className="text-3xl font-bold text-lime-600">10k+</h3>
                            <p className="text-gray-600">Motoristas cadastrados</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-lime-600">100k+</h3>
                            <p className="text-gray-600">Usuários ativos no app</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {/* 1 */}
                        <div className="flex flex-col items-start gap-2">
                            <CarIcon size={32} color="#84cc16" weight="duotone" />
                            <h4 className="text-lg font-semibold">Viaje junto e ajude o planeta</h4>
                            <p className="text-sm text-gray-600">
                                Menos carros, mais conexão. Seja parte da mobilidade sustentável com o rebU!
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <ArrowsLeftRightIcon size={32} color="#84cc16" weight="duotone" />
                            <h4 className="text-lg font-semibold">Mesmos caminhos, novas conexões.</h4>
                            <p className="text-sm text-gray-600">
                                Com o rebU, compartilhar trajetos é fácil, econômico e transforma seu caminho em novas amizades.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <ShieldCheckIcon size={32} color="#84cc16" weight="duotone" />
                            <h4 className="text-lg font-semibold">Sua carona, sua segurança.</h4>
                            <p className="text-sm text-gray-600">
                                Com o rebU, cada trajeto é pensado para você viajar com tranquilidade e confiança.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <TestimonialsCarousel />
        </>
    )
}

export default Home

