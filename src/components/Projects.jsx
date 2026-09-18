import { useState } from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { profile, projects } from "../data";

const filters = ["Todos", "Inteligência artificial", "Desenvolvimento web"];

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const visible = projects.filter(
    (project) => filter === "Todos" || project.category === filter,
  );
  return (
    <section
      id="projetos"
      className="section projects-section"
      tabIndex={-1}
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>02 /</span> PROJETOS
            </p>
            <h2 id="projects-heading">
              Ideias que viram <em>código.</em>
            </h2>
          </div>
          <p>
            Inteligência artificial e desenvolvimento web.
            <br />
            Uma seleção do que venho construindo.
          </p>
        </div>
        <div className="filters" role="group" aria-label="Filtrar projetos">
          {filters.map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === "Todos" && <span>04</span>}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          {visible.length}{" "}
          {visible.length === 1 ? "projeto exibido" : "projetos exibidos"}
        </p>
        <div className="project-grid">
          {visible.map((project) => (
            <article className="project-card" key={project.id}>
              <div className={`project-image image-${project.id}`}>
                <span className="project-number">
                  {project.number} / PROJETO
                </span>
                <img
                  src={project.image}
                  alt={`Ilustração do projeto ${project.title}`}
                  width="800"
                  height="500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="project-content">
                <div className="project-title">
                  <h3>{project.title}</h3>
                  <FiArrowUpRight aria-hidden="true" />
                </div>
                <p>{project.description}</p>
                <ul className="tags" aria-label="Tecnologias e áreas">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-bottom">
                  <span>Demo pública não disponível</span>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Conversar sobre ${project.title} no LinkedIn (nova aba)`}
                  >
                    Conversar sobre <FiArrowRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a
          className="text-link github-more"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore meu GitHub <FiArrowUpRight />
          <span className="sr-only"> (nova aba)</span>
        </a>
      </div>
    </section>
  );
}
