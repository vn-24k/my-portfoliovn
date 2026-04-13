import React, { useEffect } from 'react'
import NextJS from '../assets/experience/next.jpg'
import node from '../assets/experience/node.png'
import Supabase from '../assets/experience/supabase.png'
import Docker from '../assets/experience/docker.png'
import react from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'
import python from '../assets/experience/python.png'
import AWS from '../assets/experience/aws.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const techs = [
        {
            id: 1,
            scr: python,
            title: 'Python (IA & Automação)',
            style: 'shadow-yellow-500'
        },
        {
            id: 2,
            scr: AWS,
            title: 'AWS / Cloud',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            scr: Docker,
            title: 'Docker',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            scr: NextJS,
            title: 'NextJS',
            style: 'shadow-white'
        },
        {
            id: 5,
            scr: node,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        {
            id: 6,
            scr: react,
            title: 'ReactJS',
            style: 'shadow-cyan-400'
        },
        {
            id: 7,
            scr: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-sky-400'
        },
        {
            id: 8,
            scr: Supabase,
            title: 'Supabase / SQL',
            style: 'shadow-emerald-500'
        }
    ]

    return (
        <div name="skills" className='bg-gradient-to-b from-black to-gray-800 text-white w-full h-auto py-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                <div className='pb-8 w-full flex flex-col justify-center items-center mx-auto'>
                    <h3 className='text-4xl pb-2 font-bold inline border-b-4 border-indigo-500 text-center'>Habilidades Técnicas</h3>
                    <p className='py-6 text-gray-400'>As ferramentas que utilizo para construir sistemas inteligentes e escaláveis.</p>
                </div>

                <div className='w-full grid grid-cols-2 text-center sm:grid-cols-4 gap-8 px-8 sm:px-0'>
                    {
                        techs.map(({ id, scr, title, style }) => (
                            <div 
                                data-aos="zoom-in" 
                                data-aos-duration="500" 
                                key={id} 
                                className={`flex flex-col justify-between items-center shadow-md hover:scale-105 duration-500 py-4 rounded-lg bg-zinc-900/50 ${style}`}
                            >
                                <img src={scr} alt={title} className='w-16 mx-auto' />
                                <p className='mt-4 font-medium'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience
