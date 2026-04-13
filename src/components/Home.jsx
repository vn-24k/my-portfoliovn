import React, { useEffect } from 'react'
import Dp from "../assets/dp.jpeg" // Certifique-se de que sua foto está como dp.jpeg nesta pasta
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import '../App.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Home = () => {
    useEffect(()=> {
        AOS.init({duration: 1000})
    })
    return (
        <div name="home" className='h-auto w-full bg-gradient-to-b from-black via-black to-gray-800 py-10'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center
                            justify-center px-4 text-white'>
                <div className='flex flex-col justify-center items-center w-full'>
                    
                    {/* Imagem de Perfil com Sombra Violeta */}
                    <img src={Dp} alt="Vinícius Silva" data-aos="fade-in" data-aos-duration="500" className='mt-20 rounded-full shadow-[0px_0px_20px_1px_rgba(109,40,217,0.7)] w-1/3 md:w-1/3 lg:w-1/5 my-5 hover:scale-105 duration-300' />
                    
                    {/* Nome em Destaque */}
                    <h2 data-aos="fade-in" data-aos-duration="1000" className='text-4xl sm:text-7xl mb-4 font-bold text-white tracking-tight text-center'>Vinícius Silva</h2>
                    
                    {/* Título Estratégico em Gradiente */}
                    <h3 data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black text-center'>Engenheiro de Software | Especialista em IA & Automação</h3>
                    
                    {/* Botão de Projetos Centralizado */}
                    <div className='flex justify-center items-center w-full mt-10 mb-28'>
                        <Link to="projects" smooth duration={500} data-aos="fade-up" data-aos-delay="500" className='group rounded bg-gradient-to-r from-blue-600 to-cyan-600 px-8 h-12 flex items-center justify-center cursor-pointer font-bold text-lg' >Ver Projetos
                            <span className='px-2 group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowRightAlt size={25} />
                            </span>
                        </Link>
                    </div>

                    {/* Ícones Sociais Atualizados */}
                    <div className='flex gap-6 mb-10'>
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/viniciusilva-dev" className='text-gray-400 hover:text-indigo-500 duration-300'>
                            <BsLinkedin size={30} />
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://www.github.com/vn-24k" className='text-gray-400 hover:text-white duration-300'>
                            <BsGithub size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
