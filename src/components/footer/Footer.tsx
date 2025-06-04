import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-black text-[#f3f4f6]">
                <div className="container flex flex-col items-start py-4 px-4">
                    <div className="flex gap-4 items-start flex-wrap">

                        {/*Texto e ícones*/}
                        <div className="flex flex-col mt-4">
                            <p className='text-md mb-1'>Conheça nossas redes sociais</p>
                            <div className="flex gap-3 mt-1">
                                <a href="https://github.com/Generation-Projeto-Integrador-Grupo-2/desafio1_front_end" target="_blank"
                                    className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center hover:bg-[#84cc16] transition"
                                >
                                    <GithubLogoIcon size={27} weight='regular' />
                                </a>
                                <a href="https://github.com/Generation-Projeto-Integrador-Grupo-2/desafio1_front_end" target="_blank"
                                    className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center hover:bg-[#84cc16] transition"
                                >
                                    <InstagramLogoIcon size={27} weight='regular' />
                                </a>
                                <a href="https://github.com/Generation-Projeto-Integrador-Grupo-2/desafio1_front_end" target="_blank"
                                    className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center hover:bg-[#84cc16] transition"
                                >
                                    <LinkedinLogoIcon size={27} weight='regular' />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Linha branca horizontal */}
                    <div className="w-full h-0.5 bg-white mt-3 rounded-full" />

                    {/* rebu copyright abaixo da linha */}
                    <div className="w-full flex justify-center mt-4 text-white">
                        <p className='text-center text-sm font-normal'>
                            rebU © {data}. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Footer
