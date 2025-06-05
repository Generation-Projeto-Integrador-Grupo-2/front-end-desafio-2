import { Link } from "react-router-dom"
import TestimonialsCarousel from "../../components/testimonials/TestimonialsCarousel"

function Home() {
    return (
        <>
            {/* Seção principal da Home */}

            <section
                id="home"
                className="h-screen bg-[#f3f4f6] text-black flex items-center justify-evenly"
            >
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-4">

                        {/* Bloco de texto */}
                        <div className="flex flex-col max-w-xl">
                            <h1 className='text-4xl md:text-6xl leading-tight mb-4'>
                                Junte-se ao <span className="text-lime-600 font-bold">rebU</span>!
                            </h1>
                            <p className='text-lg text-gray-700'>
                                Economize tempo, reduza seus gastos com transporte e ainda contribua com o meio ambiente.
                                Com o rebU, você compartilha caronas com segurança, praticidade e pessoas da sua comunidade.
                                Cadastre-se agora e faça parte da nova mobilidade urbana!
                            </p>
                            <Link to="/cadastro">
                                <button className="mt-6 px-6 py-4 bg-lime-600 text-white font-semibold rounded-xl shadow-md hover:bg-lime-700 transition">
                                    Encontre sua próxima carona
                                </button>
                            </Link>
                        </div>

                        {/* Imagem */}
                        <div className="mb-4">
                            <img
                                src="https://ik.imagekit.io/6tjnbersb/imagemhome1.jpg?updatedAt=1749055987373"
                                alt="Imagem rebU"
                                className="w-[650px] h-auto rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialsCarousel />
        </>
    )
}

export default Home

