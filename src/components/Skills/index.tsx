import { useState } from 'react';
import { useTranslation } from "react-i18next";
import {
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoPhp,
    BiLogoReact,
    BiLogoTypescript,
    BiLogoVisualStudio,
} from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiCanva, SiInsomnia } from "react-icons/si";
import './skills.css';
import { LuGithub } from 'react-icons/lu';

const skillsData = {
    frontend: [
        { name: "JavaScript", icon: <BiLogoJavascript /> },
        { name: "React", icon: <BiLogoReact /> },
        { name: "CSS", icon: <BiLogoCss3 /> },
        { name: "HTML", icon: <BiLogoHtml5 /> },
        { name: "TypeScript", icon: <BiLogoTypescript /> },
        { name: "Next.js", icon: <BiLogoReact /> },
        { name: "Tailwind CSS", icon: <BiLogoCss3 /> },
    ],
    backend: [
        { name: "PHP", icon: <BiLogoPhp /> },
        { name: "Node.js", icon: <BiLogoTypescript /> },
        { name: "Express.js", icon: <BiLogoJavascript /> },
        { name: "MySQL", icon: <GrMysql /> },
        { name: "MongoDB", icon: <GrMysql /> },
        { name: "Fastify", icon: <BiLogoJavascript /> },
    ],
    tools: [
        { name: "Github", icon: <LuGithub /> },
        { name: "Figma", icon: <BiLogoVisualStudio /> },
        { name: "Canva", icon: <SiCanva /> },
        { name: "Visual Studio Code", icon: <BiLogoVisualStudio /> },
        { name: "Insomnia", icon: <SiInsomnia /> },
    ],
};


const Skills = () => {
    const { t } = useTranslation();

    const [activeTab, setActiveTab] = useState("frontend");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <section className="skills">
            <h2>{t("habilidades.titulo")} 💪</h2>
            <div className="tabs">
                <button className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`} onClick={() => handleTabClick("frontend")}>
                    Front-end
                </button>
                <button className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`} onClick={() => handleTabClick("backend")}>
                    Back-end
                </button>
                <button className={`tab-button ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => handleTabClick("tools")}>
                    {t("habilidades.btnFerr")}
                </button>
            </div>
            <div className="skills-container">
                {skillsData[activeTab as keyof typeof skillsData].map((skill, index) => (
                    <div key={index} className="skill-item" data-aos="fade-up">
                        <h3 className="skill-name">{skill.name}</h3>
                        <div className="skill-icon">{skill.icon}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
