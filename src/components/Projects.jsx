import React,{useEffect} from 'react'
import Gist from '../assets/projects/gist.png'
import Chatbot from '../assets/projects/chatbot.png'
import Upscale from '../assets/projects/upscale.png'
import Ide from '../assets/projects/ide.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const projectsList = [
    {
      id: 1,
      src: Chatbot,
      title: "Agente de IA Cognitiva",
      desc: "Assistente inteligente utilizando GPT-4 e Engenharia de Prompt para automação de tarefas complexas.",
      demo: "https://www.linkedin.com/in/viniciusilva-dev"
    },
    {
      id: 2,
      src: Gist,
      title: "Gist.AI Summarizer",
      desc: "Ferramenta de IA que processa grandes volumes de texto e gera resumos executivos com precisão.",
      demo: "https://www.linkedin.com/in/viniciusilva-dev"
    },
    {
      id: 3,
      src: Upscale,
      title: "Upscale Vision AI",
      desc: "Aplicação focada em tratamento de imagem e visão computacional integrada com APIs de Deep Learning.",
      demo: "https://www.linkedin.com/in/viniciusilva-dev"
    },
    {
      id: 4,
      src: Ide,
      title: "Editor de Código Cloud",
      desc: "Ambiente de desenvolvimento web otimizado para execução de scripts rápidos e testes de algoritmos.",
      demo: "https://www.linkedin.com/in/viniciusilva-dev"
    }
  ]

  return (
    <div name="projects" className='h-auto bg-gradient-to-b from-gray-800 to-black w-full text-white py-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-16 w-full flex flex-col justify-center items-center mx-auto'>
          <h3 className='text-4xl pb-2 font-bold inline border-b-4 border-indigo-500 text-center text-white'>Projetos Estratégicos</h3>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
          {
            projectsList.map(({ id, src, title, desc, demo }) => (
              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-indigo-900/40 rounded-lg overflow-hidden bg-zinc-900/50 flex flex-col justify-between'>
                <div>
                  <img src={src} alt={title} className='rounded-t-md duration-200 hover:scale-105 w-full h-48 object-cover' />
                  <div className='p-4'>
                    <h4 className='text-xl font-bold mb-2 text-indigo-400'>{title}</h4>
                    <p className='text-sm text-gray-400 h-20 overflow-hidden leading-relaxed'>{desc}</p>
                  </div>
                </div>
                <div className='flex items-center justify-center p-4 border-t border-zinc-800 mt-auto'>
                  <a target='_blank' rel="noreferrer" href={demo} className='w-full px-6 py-3 duration-200 hover:scale-105 bg-indigo-600 rounded-md text-center font-bold text-base text-white'>
                    Visualizar Demo
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
