import About from "../About";
import Contact from "../Contact";
import HomeComponent from "../Home";
import Portfolio from "../Portfolio";
import Skills from "../Skills";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa6";

import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

import FlagBR from "../../../public/assets/brazil.png";
import FlagENG from "../../../public/assets/eng.png";

import styles from "./Navbar.module.css";

import "../../lib/i18n";

import "./Nav.css";
import Footer from "../footer";

export default function LayoutHome() {
  const [lightMode, setLightMode] = useState<boolean>(false);

  const { setMainColor } = useTheme();

  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const handleToggleLightMode = () => {
    setLightMode(!lightMode);
  };

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light_mode");
      setMainColor("#dc2626");
    } else {
      document.body.classList.remove("light_mode");
      setMainColor("#0ef");
      setTimeout(() => {
        document.body.style.transition = "background-color 1.5s, color 1.5s";
      }, 1500);
    }
  }, [lightMode]);

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <NavLink to={"/"} className={styles.logo}>
            &lt; <span className={styles.logo_span}>DEV Maria</span>/&gt;
          </NavLink>

          <div>
            <ul className="navList grid">
              <li className="navItem">
                <div className={styles.icons_container} id="container">
                  <label>
                    <input
                      type="checkbox"
                      className={styles.darkLightMode}
                      onClick={() => {
                        handleToggleLightMode();
                      }}
                    />

                    <FaMoon className={styles.moon_icon} />
                    <FaSun className={styles.sun_icon} />
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      className={styles.darkLightMode}
                      onClick={() => {
                        handleChangeLanguage();
                      }}
                    />

                    <img src={FlagENG} className={styles.sun_icon} alt="Flag" />
                    <img src={FlagBR} className={styles.moon_icon} alt="Flag" />
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <HomeComponent />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
