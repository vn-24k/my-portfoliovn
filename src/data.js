import chatbot from "./assets/projects/chatbot.webp";
import gist from "./assets/projects/gist.webp";
import upscale from "./assets/projects/upscale.webp";
import ide from "./assets/projects/ide.webp";

// Atualize aqui os links públicos. Não use URLs de exemplo ou dados de terceiros.
export const profile = {
  name: "Vinícius Silva",
  github: "https://github.com/vn-24k",
  linkedin: "https://www.linkedin.com/in/viniciusilva-dev",
};

export const projects = [
  {
    id: "agente-ia",
    number: "01",
    title: "Agente de IA Cognitiva",
    category: "Inteligência artificial",
    image: chatbot,
    tags: ["GPT-4", "Engenharia de prompt", "Automação"],
    description:
      "Assistente inteligente com GPT-4 e engenharia de prompt, voltado à automação de tarefas complexas.",
  },
  {
    id: "gist-ai",
    number: "02",
    title: "Gist.AI Summarizer",
    category: "Inteligência artificial",
    image: gist,
    tags: ["IA generativa", "Processamento de texto"],
    description:
      "Uma ferramenta para transformar grandes volumes de texto em resumos executivos mais fáceis de explorar.",
  },
  {
    id: "upscale",
    number: "03",
    title: "Upscale Vision AI",
    category: "Inteligência artificial",
    image: upscale,
    tags: ["Visão computacional", "Deep learning", "APIs"],
    description:
      "Tratamento de imagens e visão computacional com integração a APIs de deep learning.",
  },
  {
    id: "cloud-editor",
    number: "04",
    title: "Editor de Código Cloud",
    category: "Desenvolvimento web",
    image: ide,
    tags: ["Web", "Editor de código", "Algoritmos"],
    description:
      "Ambiente de desenvolvimento web para execução de scripts rápidos e testes de algoritmos.",
  },
];

export const skills = [
  {
    number: "01",
    title: "Inteligência & automação",
    description:
      "Software que transforma tarefas complexas em processos mais simples.",
    items: ["Python", "LLMs", "Engenharia de prompt", "Sistemas multiagentes"],
  },
  {
    number: "02",
    title: "Desenvolvimento fullstack",
    description:
      "Da interface ao backend, com atenção à experiência e à estrutura.",
    items: ["React", "Next.js", "Node.js", "C#", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Infraestrutura & dados",
    description: "Uma base sólida para aplicações conectadas e escaláveis.",
    items: ["AWS", "Docker", "SQL Server", "Supabase"],
  },
];
