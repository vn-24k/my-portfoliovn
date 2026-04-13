import React, { useEffect } from 'react'
import Dp from "../assets/dp.jpeg"
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import '../App.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Home = () => {
    useEffect(()=> {
        AOS.init({duration: 1000})
    })
    return (
        <div name="home" className='h-auto w-full bg-black'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center
                            justify-center  px-4 md:flex-row text-white'>
                <div className='flex flex-col justify-center items-center w-full '>
                    
                        <img src={Dp} alt="Vinícius Silva" data-aos="fade-in" data-aos-duration="500" className='mt-20 rounded-full cursor-pointer shadow-[0px_0px_20px_1px_rgba(79,70,229,0.6)] w-1/3 md:w-1/3 lg:w-1/5 my-5 hover:scale-105 duration-300 sm:ease-in' />
                    
                            <h2 data-aos="fade-in" data-aos-duration="1000" className='text-4xl sm:text-7xl mb-4 font-bold text-white tracking-tight text-center'>Vinícius Silva</h2>
                            <h3 data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='animate-text bg-gradient-to-r from-indigo-500 via-slate-400 to-cyan-400 bg-clip-text text-transparent text-2xl font-black text-center'>Engenheiro de Software | Especialista em IA & Automação</h3>
                            
                            <p data-aos="fade-in" data-aos-delay="400" data-aos-duration="2000" className='text-gray-400 py-4 max-w-md w-full text-center'>
                                Transformando problemas complexos em sistemas inteligentes com Python e LLMs. Focado em escalabilidade e eficiência real.
                            </p>

                    <div className='flex flex-row justify-center items-center gap-2 w-full'>
                        <Link to="projects" smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='group rounded bg-gradient-to-r from-indigo-600 to-blue-700 w-1/3 h-10 flex items-center justify-center cursor-pointer mt-5 mb-28 font-semibold' >Projetos

                            <span className='px-2 group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowRightAlt size={25} />
                            </span>
                        </Link>
                        
                        <a target='_blank' rel="noreferrer"  href="mailto:SEU_EMAIL_AQUI@gmail.com" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='group hover:scale-105 rounded w-auto h-10 p-3 flex items-center bg-zinc-800 border border-zinc-700 justify-center cursor-pointer mt-5 mb-28' >
                            <span className='pr-2'>
                                <HiOutlineMail size={25} />
                            </span>
                            E-mail
                        </a>

                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/vn-24k" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='group hover:scale-105 rounded w-auto h-10 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28 text-gray-400 hover:text-indigo-500 duration-300' >
                            <span >
                                <BsLinkedin size={25}></BsLinkedin>
                            </span>
                        </a>

                        <a target='_blank' rel="noreferrer" href="https://www.github.com/vn-24k" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='group hover:scale-105 rounded w-auto h-10 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28 text-gray-400 hover:text-white duration-300' >
                            <span >
                                <BsGithub size={25}></BsGithub>
                            </span>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
