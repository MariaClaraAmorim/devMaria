import styles from "./About.module.css";

import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoVisualStudio,
} from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiCanva } from "react-icons/si";

import { motion } from "framer-motion";
import { t } from "i18next";
import { useState } from "react";
import "./skills.css";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Skills() {
  const [toggleState, setToggleState] = useState<number>(0);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <>
      <section>
        <div className={styles.skills}>
          <h3>{t("habilidades.titulo")}</h3>
          <div className="qualification__container">
            <div className="qualification__tabs">
              <div
                className={
                  toggleState === 1
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button qualification__active button--flex"
                }
                onClick={() => toggleTab(1)}
              >
                Frontend
              </div>
              <div
                className={
                  toggleState === 1
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button qualification__active button--flex"
                }
                onClick={() => toggleTab(2)}
              >
                Backend
              </div>

              <div
                className={
                  toggleState === 2
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button qualification__active button--flex"
                }
                onClick={() => toggleTab(3)}
              >
                {t("habilidades.btnFerr")}
              </div>
            </div>

            <div className="qualification__sections">
              <div
                className={
                  toggleState === 1
                    ? "qualification__content qualification__content-active"
                    : "qualification__content "
                }
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      <motion.div
                        className={styles.icons_container}
                        variants={container}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.div variants={item} className={styles.box_icon}>
                          <span className={styles.icon_description}>React</span>
                          <BiLogoReact className={styles.react} />
                        </motion.div>

                        <motion.div variants={item} className={styles.box_icon}>
                          <span className={styles.icon_description}>
                            Typescript
                          </span>
                          <BiLogoTypescript className={styles.typescript} />
                        </motion.div>

                        <motion.div variants={item} className={styles.box_icon}>
                          <span className={styles.icon_description}>
                            Javascript
                          </span>
                          <BiLogoJavascript className={styles.javascript} />
                        </motion.div>

                        <motion.div variants={item} className={styles.box_icon}>
                          <span className={styles.icon_description}>CSS</span>
                          <BiLogoCss3 className={styles.css} />
                        </motion.div>

                        <motion.div variants={item} className={styles.box_icon}>
                          <span className={styles.icon_description}>HTML</span>
                          <BiLogoHtml5 className={styles.html} />
                        </motion.div>
                      </motion.div>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 2
                    ? "qualification__content qualification__content-active"
                    : "qualification__content "
                }
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      <motion.div
                        className={styles.icons_container}
                        variants={container}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.div variants={item} className={styles.box_icon}>
                          <span className={styles.icon_description}>MySQL</span>
                          <GrMysql className={styles.mysql} />
                        </motion.div>

                        <motion.div variants={item} className={styles.box_icon}>
                          <span className={styles.icon_description}>PHP</span>
                          <BiLogoPhp className={styles.mysql} />
                        </motion.div>
                      </motion.div>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 3
                    ? "qualification__content qualification__content-active"
                    : "qualification__content "
                }
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      <motion.div
                        className={styles.icons_container}
                        variants={container}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.div variants={item} className={styles.box_icon}>
                          <span className={styles.icon_description}>Git</span>
                          <FaGitAlt className={styles.git} />
                        </motion.div>

                        <motion.div variants={item} className={styles.box_icon}>
                          <span className={styles.icon_description}>Canva</span>
                          <SiCanva className={styles.canva} />
                        </motion.div>

                        <motion.div variants={item} className={styles.box_icon}>
                          <span className={styles.icon_description}>
                            VScode
                          </span>
                          <BiLogoVisualStudio className={styles.vscode} />
                        </motion.div>
                      </motion.div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
