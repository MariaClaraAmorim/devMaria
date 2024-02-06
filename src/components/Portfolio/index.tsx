import "./Portfolio.css";
import { t } from "i18next";
import { CiGlobe } from "react-icons/ci";
import projectsCommercial from "../../data/projectsCommercial";
import projectsPersonal from "../../data/projectsPersonal";
import Transition from "../transition/Transition";
import { LuGithub } from "react-icons/lu";

const Portfolio = () => {
  return (
    <Transition onAnimationComplete={() => {}}>
      <section className="portfolio">
        <div className="header_container">
          <h2> {t("portfolio.titulo")}</h2>
          <h3>{t("portfolio.descricao1")}</h3>
        </div>

        <div className="projectsContainer">
          {projectsCommercial.map((project) => {
            return (
              <div key={project.id} className="projectsContent">
                <img src={project.img} alt={project.title} />
                <div className="title">
                  <h2>{project.title}</h2>
                  <span>{project.description}</span>
                  <div className="tagsIcon">
                    {project.tags.map((tag) => {
                      return (
                        <img
                          key={tag.name}
                          className=""
                          src={tag.icon}
                          alt={tag.name}
                        />
                      );
                    })}
                  </div>
                  <div className="btnIcons">
                    {/*  <button>
                      <a href={`${project.github}`}>Código</a>
                    </button> */}
                    <button className="btn">
                      <a href={`${project.web}`}>
                        <LuGithub />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="header_container">
          <h2> {t("portfolio.titulo2")}</h2>
          <h3>{t("portfolio.descricao2")}</h3>
        </div>

        <div className="projectsContainer">
          {projectsPersonal.map((project) => {
            return (
              <div key={project.id} className="projectsContent">
                <img src={project.img} alt={project.title} />
                <div className="title">
                  <h2>{project.title}</h2>
                  <span>{project.description}</span>
                  <div className="tagsIcon">
                    {project.tags.map((tag) => {
                      return (
                        <img
                          key={tag.name}
                          className=""
                          src={tag.icon}
                          alt={tag.name}
                        />
                      );
                    })}
                  </div>
                  <div className="btnIcons">
                    <button className="btn">
                      <a href={`${project.github}`}>
                        <LuGithub />
                      </a>
                    </button>
                    <button className="btn">
                      <a href={`${project.web}`}>
                        <CiGlobe />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Transition>
  );
};

export default Portfolio;
