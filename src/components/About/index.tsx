import { t } from "i18next";
import styles from "./About.module.css";
import ABOUT_PROFILE from "../../../public/assets/profile/Eu.png";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container_img_skills}>
        <img src={ABOUT_PROFILE} className={styles.about_img} />
      </div>

      <div>
        <h2>{t("content.tittle")} 👋</h2>

        <p>{t("content.sobre")}</p>

        <div className={styles.codeItem}>
          <div data-aos="zoomIn">
            <span className={styles.comment}></span>
            <span className={styles.purple}>.infos {"\u007B"}</span>
            <div>
              <p className={styles.blue}>
                {" "}
                Nome:
                <span className={styles.orange}>Maria Clara;</span>
              </p>
            </div>
            <div>
              <p className={styles.blue}>
                Idade:
                <span className={styles.orange}>21 anos;</span>
              </p>
            </div>
            <div>
              <p className={styles.blue}>
                Natural:
                <span className={styles.orange}>Barreiras, Bahia;</span>
              </p>
            </div>
            <span className={styles.purple}>{"\u007D"}</span>
          </div>

          <div data-aos="zoomIn">
            <span className={styles.comment}></span>
            <span className={styles.purple}>.formação {"\u007B"}</span>
            <div>
              <p className={styles.blue}>
                Médio:
                <span className={styles.orange}>Técnico em Informática;</span>
              </p>
            </div>
            <div>
              <p className={styles.blue}>
                Local:
                <span className={styles.orange}>IFBA;</span>
              </p>
            </div>{" "}
            <div>
              <p className={styles.blue}>
                Superior:
                <span className={styles.orange}>Cursando Fisioterapia</span>
              </p>
            </div>
            <div>
              <p className={styles.blue}>
                Local:
                <span className={styles.orange}>Uniplan;</span>
              </p>
            </div>
            <span className={styles.purple}>{"\u007D"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
