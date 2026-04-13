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
        <div name="about" className='w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8 w-full flex flex-col justify-center items-center mx-auto'>

                    <h3 data-aos="fade-up" data-aos-duration="1000" className='text-4xl pb-2 mb-10 font-bold inline border-b-4 border-indigo-500'>Experiência</h3>

                    <ol data-aos="fade-up" data-aos-duration="1000" className="relative border-s border-indigo-600 dark:border-indigo-600 w-full mx-auto flex flex-col justify-center items-center">
                        
                        <li className="mb-10 ms-6 px-5 lg:w-3/5 ">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-900 rounded-full -start-3 ring-8 ring-black">
                                <svg className="w-2.5 h-2.5 text-indigo-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex pl-10 items-center mb-1 text-lg font-semibold text-white">
                                Software Engineer & IA Specialist &nbsp;&nbsp;&nbsp;
                                <span className="bg-indigo-900 text-indigo-300 text-sm font-medium px-2.5 py-0.5 rounded ms-3">
                                    Atual
                                </span>
                            </h3>
                            <time className="block pl-10 mb-2 text-sm font-normal leading-none text-gray-500">
                                Janeiro 2024 - Presente
                            </time>
                            <p className="mb-4 pl-10 text-base font-normal text-gray-400">
                                Desenvolvimento de sistemas autônomos e integração de LLMs (Claude/OpenAI). Foco em arquitetura de software escalável, automação de processos críticos e otimização de fluxos de dados com Python.
                            </p>
                        </li>

                        <li className="mb-10 ms-6 px-5 lg:w-3/5">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-800 rounded-full -start-3 ring-8 ring-black">
                                <svg className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="mb-1 pl-10 text-lg font-semibold text-white">
                                Desenvolvedor Python Freelancer
                            </h3>
                            <time className="block pl-10 mb-2 text-sm font-normal leading-none text-gray-500">
                                Junho 2022 - Dezembro 2023
                            </time>
                            <p className="text-base pl-10 font-normal text-gray-400">
                                Implementação de scripts de automação, web scraping avançado e criação de APIs REST. Entrega de soluções personalizadas para otimização de performance digital e análise de dados.
                            </p>
                        </li>

                    </ol>
                </div>

                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-r from-indigo-600 to-blue-700 lg:w-1/5 md:w-1/5 w-2/4 h-12 text-center cursor-pointer mt-10 gap-2 font-bold'>
                    <AiOutlineCloudDownload size={20} />
                    <a href="./Curriculo-Vinicius-Silva.pdf" download>Baixar CV</a>
                </div>
            </div>
        </div>
    )
}

export default About
