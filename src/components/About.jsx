import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white py-16'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8 w-full flex flex-col justify-center items-center mx-auto'>

                    {/* Título da Seção */}
                    <h3 data-aos="fade-up" className='text-4xl pb-2 mb-10 font-bold inline border-b-4 border-gray-500 text-center'>Sobre Mim & Experiência</h3>
                    
                    {/* Timeline de Experiência Atualizada */}
                    <ol data-aos="fade-up" data-aos-delay="200" className="relative border-s border-blue-700 dark:border-blue-700 w-full mx-auto flex flex-col justify-center items-center">
                        
                        {/* Posição Freelance/Consultoria */}
                        <li className="mb-10 ms-6 px-5 lg:w-3/5 ">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-black dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex pl-10 items-center mb-1 text-lg font-semibold text-white uppercase tracking-wider">
                                Estrategista de IA & Automação [Freelance]
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                                    Atual
                                </span>
                            </h3>
                            <time className="block pl-10 mb-2 text-sm font-normal leading-none text-indigo-400 font-bold">
                                Janeiro 2024 - Presente
                            </time>
                            <p className="mb-4 pl-10 text-base font-normal text-gray-400">
                                Especialista em transformar processos manuais em fluxos automatizados com IA e ferramentas LowCode. Foco total em ROI e escalabilidade operacional.
                            </p>
                        </li>

                        {/* Posição Anterior */}
                        <li className="mb-10 ms-6 px-5 lg:w-3/5">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-800 rounded-full -start-3 ring-8 ring-black">
                                <svg className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="mb-1 pl-10 text-lg font-semibold text-white uppercase tracking-wider">
                                Desenvolvedor de Sistemas / Analista
                            </h3>
                            <time className="block pl-10 mb-2 text-sm font-normal leading-none text-gray-500 font-bold">
                                Junho 2023 - Dezembro 2023
                            </time>
                            <p className="text-base pl-10 font-normal text-gray-400">
                                Atuação no desenvolvimento e manutenção de sistemas robustos, garantindo a integridade de bancos de dados relacionais.
                            </p>
                        </li>

                    </ol>
                </div>

                {/* Botão Baixar CV Atualizado */}
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-r from-blue-600 to-cyan-600 lg:w-1/4 md:w-1/3 w-3/4 h-12 text-center cursor-pointer mt-10 gap-2 font-bold'>
                    <AiOutlineCloudDownload size={25} />
                    {/* Caminho relativo correto do seu currículo na pasta public */}
                    <a href="/Curriculo-Vinicius-Silva.pdf" download>BAIXAR CV COMPLETO</a>
                </div>

                {/* Rodapé Limpo (Removido codewithbrit) */}
                <div className='pb-8 w-full flex flex-col justify-center items-center mx-auto text-gray-500 text-sm mt-10'>
                    <p>© {new Date().getFullYear()} Vinícius Silva. Todos os direitos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default About
