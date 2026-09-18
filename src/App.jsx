import {
  FiArrowDown,
  FiArrowUpRight,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiCpu,
  FiLayers,
} from "react-icons/fi";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { profile, skills } from "./data";
import portrait from "./assets/profile.webp";

function ExternalLink({ href, children, className = "", label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {children}
      <span className="sr-only"> (nova aba)</span>
    </a>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <section
          id="inicio"
          className="hero container"
          tabIndex={-1}
          aria-labelledby="hero-heading"
        >
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> ENGENHARIA DE SOFTWARE & IA
            </p>
            <h1 id="hero-heading">
              Código com propósito.
              <br />
              <em>Inteligência</em>
              <br />
              para ir além.
            </h1>
            <p className="hero-description">
              Olá, sou <strong>Vinícius Silva.</strong> Engenheiro de Software
              com foco em inteligência artificial e automação. Transformo
              desafios complexos em soluções que fazem sentido.
            </p>
            <div className="hero-actions">
              <a href="#projetos" className="button button-primary">
                Conheça meus projetos <FiArrowUpRight />
              </a>
              <a href="#contato" className="button button-ghost">
                Vamos conversar <FiArrowRight />
              </a>
            </div>
            <div className="hero-socials">
              <span>ENCONTRE-ME EM</span>
              <ExternalLink
                href={profile.github}
                label="GitHub de Vinícius Silva (nova aba)"
              >
                <FiGithub /> GitHub <FiArrowUpRight />
              </ExternalLink>
              <ExternalLink
                href={profile.linkedin}
                label="LinkedIn de Vinícius Silva (nova aba)"
              >
                <FiLinkedin /> LinkedIn <FiArrowUpRight />
              </ExternalLink>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src={portrait}
                alt="Vinícius Silva"
                width="720"
                height="796"
                fetchPriority="high"
              />
              <div className="portrait-caption">
                <span>VINÍCIUS SILVA</span>
                <small>Software Engineer</small>
              </div>
              <span className="portrait-cross cross-top">+</span>
              <span className="portrait-cross cross-bottom">+</span>
            </div>
            <div className="code-badge">
              <FiCode />
              <div>
                <span>Entre lógica e criatividade.</span>
                <small>Construindo o próximo passo_</small>
              </div>
            </div>
            <span className="visual-note">PENSAR. CONSTRUIR. EVOLUIR.</span>
          </div>
          <div className="hero-bottom">
            <a href="#sobre">
              <FiArrowDown /> Explore o portfólio
            </a>
            <span>SOFTWARE · INTELIGÊNCIA ARTIFICIAL · AUTOMAÇÃO</span>
          </div>
        </section>
        <div className="expertise-strip" aria-label="Áreas de atuação">
          <div className="container">
            <span>
              <FiCode /> Engenharia de software
            </span>
            <i>✳</i>
            <span>
              <FiCpu /> Inteligência artificial
            </span>
            <i>✳</i>
            <span>
              <FiLayers /> Automação de processos
            </span>
          </div>
        </div>
        <section
          id="sobre"
          className="section about-section container"
          tabIndex={-1}
          aria-labelledby="about-heading"
        >
          <div className="about-copy">
            <p className="eyebrow">
              <span>01 /</span> SOBRE MIM
            </p>
            <h2 id="about-heading">
              Tecnologia é o meio.
              <br />
              <em>A solução é o foco.</em>
            </h2>
            <p>
              Sou Vinícius, engenheiro de software que conecta desenvolvimento
              fullstack, inteligência artificial e automação.
            </p>
            <p>
              Meu trabalho vai da construção de sistemas com C# e SQL Server à
              arquitetura de automações com Python e modelos de linguagem. Gosto
              de transformar complexidade em aplicações úteis, bem estruturadas
              e escaláveis.
            </p>
            <ExternalLink href={profile.linkedin} className="text-link">
              Conheça minha trajetória <FiArrowUpRight />
            </ExternalLink>
          </div>
          <div className="timeline">
            <p className="timeline-label">EXPERIÊNCIA PROFISSIONAL</p>
            <article className="timeline-item">
              <div className="timeline-meta">
                <span>2024 — PRESENTE</span>
                <span className="current-label">Atual</span>
              </div>
              <h3>Estrategista de IA & Automação</h3>
              <span className="role-level">Sênior</span>
              <p>
                Liderança técnica em arquitetura de automação com Python e
                sistemas multiagentes. Foco em infraestruturas autônomas e
                escaláveis.
              </p>
              <div className="timeline-tags">
                Python <span>/</span> LLMs <span>/</span> Automação
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-meta">
                <span>2023 — 2025</span>
              </div>
              <h3>Engenheiro de Software Fullstack</h3>
              <p>
                Desenvolvimento de sistemas críticos com C# e SQL Server,
                soluções de backend e otimização de fluxos de dados.
              </p>
              <div className="timeline-tags">
                C# <span>/</span> SQL Server <span>/</span> Backend
              </div>
            </article>
          </div>
        </section>
        <Projects />
        <section
          id="habilidades"
          className="section container"
          tabIndex={-1}
          aria-labelledby="skills-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span>03 /</span> HABILIDADES
              </p>
              <h2 id="skills-heading">
                As ferramentas.
                <br />
                <em>As possibilidades.</em>
              </h2>
            </div>
            <p>
              Tecnologias que se complementam
              <br />
              para construir de ponta a ponta.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = [FiCpu, FiCode, FiLayers][index];
              return (
                <article className="skill-card" key={skill.number}>
                  <div className="skill-top">
                    <Icon />
                    <span>{skill.number}</span>
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <ul className="tags">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>
        <section
          id="contato"
          className="contact-section container"
          tabIndex={-1}
          aria-labelledby="contact-heading"
        >
          <div className="contact-panel">
            <div>
              <p className="eyebrow">
                <span>04 /</span> VAMOS CONVERSAR
              </p>
              <h2 id="contact-heading">
                Uma boa ideia começa
                <br />
                com uma <em>conversa.</em>
              </h2>
              <p>
                Tem um projeto em mente ou quer trocar ideias sobre tecnologia?
                <br />
                Entre em contato comigo pelo LinkedIn.
              </p>
              <div className="contact-actions">
                <ExternalLink
                  href={profile.linkedin}
                  className="button button-primary"
                >
                  <FiLinkedin /> Falar com Vinícius <FiArrowUpRight />
                </ExternalLink>
                <ExternalLink href={profile.github} className="text-link">
                  <FiGithub /> Meu GitHub <FiArrowUpRight />
                </ExternalLink>
              </div>
              <p className="contact-note">
                Precisa do meu currículo? Solicite pelo LinkedIn.
              </p>
            </div>
            <div className="contact-art" aria-hidden="true">
              <FiArrowUpRight />
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a href="#inicio" className="brand" aria-label="Voltar ao início">
          vs<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Vinícius Silva. Feito com intenção.</p>
        <a href="#inicio">
          De volta ao topo <FiArrowUpRight />
        </a>
      </footer>
    </>
  );
}
