import { useState, useEffect } from 'react';
import './projects.css';
import { useTranslation } from 'react-i18next';
import { LuGithub, LuGlobe } from "react-icons/lu";


interface Project {
    name: string;
    description: string;
    technologies: string[];
    github: string;
    deploy: string;
    image: string;
}

const Projects = () => {
    const { t } = useTranslation();

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/src/data/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Erro ao carregar projetos:', error));
    }, []);

    return (
        <section className="projects">
            <h2>{t("portfolio.titulo")}🚀</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <img src={project.image} alt={project.name} className="project-image" />
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-technologies">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                        <div className="project-actions">
                            {project.github && project.github !== "" ? (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <LuGithub />
                                </a>
                            ) : null}

                            {project.deploy && project.deploy !== "" ? (
                                <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <LuGlobe />
                                </a>
                            ) : null}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
