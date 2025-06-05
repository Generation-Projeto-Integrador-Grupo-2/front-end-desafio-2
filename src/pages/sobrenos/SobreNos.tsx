import { LinkedinLogoIcon } from "@phosphor-icons/react"


function SobreNos() {
    return (
        <div className="bg-[#f3f4f6] text-[#374151] flex items-center justify-center min-h-screen">
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
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 gap-y-10">
                            <div className="flex flex-col items-center text-center space-y-2">
                                <img src="https://i.imgur.com/qd9Plf4.jpeg" alt="Foto de Maria de Fátima" className="w-24 h-24 object-cover rounded-full shadow-md" />
                                <p className="font-medium text-gray-800">Maria de Fátima</p>
                                <p className="font-medium text-gray-800">Product Owner</p>
                                <a href="https://www.linkedin.com/in/fatimaoliveira428/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077B5] transition-colors">
                                    <LinkedinLogoIcon size={32} weight="bold" />
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-2">
                                <img src="https://i.imgur.com/n4VJr0r.jpeg" alt="Foto de Luana Cardoso" className="w-24 h-24 object-cover rounded-full shadow-md" />
                                <p className="font-medium text-gray-800">Luana Cardoso</p>
                                <p className="font-medium text-gray-800">Tester</p>
                                <a href="https://www.linkedin.com/in/luanacardosodasilva7/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077B5] transition-colors">
                                    <LinkedinLogoIcon size={32} weight="bold" />
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-2">
                                <img src="https://i.imgur.com/815hFsM.jpeg" alt="Foto de Guilherme Lima" className="w-24 h-24 object-cover rounded-full shadow-md" />
                                <p className="font-medium text-gray-800">Guilherme Lima</p>
                                <p className="font-medium text-gray-800">Developer</p>
                                <a href="https://www.linkedin.com/in/guilherme-lima-sousa-oliveira" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077B5] transition-colors">
                                    <LinkedinLogoIcon size={32} weight="bold" />
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-2">
                                <img src="https://i.imgur.com/NO5osOz.jpeg" alt="Foto de Leonardo de Paula" className="w-24 h-24 object-cover rounded-full shadow-md" />
                                <p className="font-medium text-gray-800">Leonardo de Paula</p>
                                <p className="font-medium text-gray-800">Developer</p>
                                <a href="https://www.linkedin.com/in/leonardo-fernandes-pf/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077B5] transition-colors">
                                    <LinkedinLogoIcon size={32} weight="bold" />
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-2">
                                <img src="https://i.imgur.com/RCiix3H.jpeg" alt="Foto de Caio Nascimento" className="w-24 h-24 object-cover rounded-full shadow-md" />
                                <p className="font-medium text-gray-800">Caio Nascimento</p>
                                <p className="font-medium text-gray-800">Developer</p>
                                <a href="https://www.linkedin.com/in/caio-s-nascimento/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077B5] transition-colors">
                                    <LinkedinLogoIcon size={32} weight="bold" />
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-2">
                                <img src="https://i.imgur.com/rpj3bzi.png" alt="Foto de Laura Nery" className="w-24 h-24 object-cover rounded-full shadow-md" />
                                <p className="font-medium text-gray-800">Laura Nery</p>
                                <p className="font-medium text-gray-800">Developer</p>
                                <a href="https://www.linkedin.com/in/laura-nery-lon1999/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077B5] transition-colors">
                                    <LinkedinLogoIcon size={32} weight="bold" />
                                </a>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>

    )

}

export default SobreNos