import ABOUT_PROFILE from "../../../public/Photo.png";
import './about.css';
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="about">
            <div className="container-img-skills">
                <img src={ABOUT_PROFILE} className="about-img" alt="Profile" />
            </div>

            <div className="about-content">
                <h2>{t("content.tittle")} 👋</h2>
                <p>{t("content.sobre")}</p>

                <div className="code-item">
                    <div data-aos="zoomIn">
                        <span className="comment"></span>
                        <span className="purple">.infos {"\u007B"}</span>
                        <div>
                            <p className="blue">
                                {t("nome")}: <span className="orange">{t("infos.nome")};</span>
                            </p>
                        </div>
                        <div>
                            <p className="blue">
                                {t("idade")}: <span className="orange">{t("infos.idade")};</span>
                            </p>
                        </div>
                        <div>
                            <p className="blue">
                                {t("cidade")}: <span className="orange">{t("infos.natural")};</span>
                            </p>
                        </div>
                        <span className="purple">{"\u007D"}</span>
                    </div>

                    <div data-aos="zoomIn">
                        <span className="comment"></span>
                        <span className="purple">.formação {"\u007B"}</span>
                        <div>
                            <p className="blue">
                                {t("medio")}: <span className="orange">{t("formacao.medio")};</span>
                            </p>
                        </div>
                        <div>
                            <p className="blue">
                                {t("local")}: <span className="orange">{t("formacao.localMedio")};</span>
                            </p>
                        </div>
                        <div>
                            <p className="blue">
                                {t("superior")}: <span className="orange">{t("formacao.superior")};</span>
                            </p>
                        </div>
                        <div>
                            <p className="blue">
                                {t("local")}: <span className="orange">{t("formacao.localSuperior")};</span>
                            </p>
                        </div>
                        <span className="purple">{"\u007D"}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
