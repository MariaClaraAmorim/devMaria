import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import FlagBR from "../../../public/brasil.png";
import FlagENG from "../../../public/ingles.png";

import '../../lib/i18n';
import './Header.css';

const Header: React.FC = () => {
    const [lightMode, setLightMode] = useState<boolean>(false);
    const { setMainColor } = useTheme();
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
        i18n.changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    const handleToggleLightMode = () => {
        setLightMode(!lightMode);
    };

    useEffect(() => {
        if (lightMode) {
            document.body.classList.add('light-mode');
            setMainColor('#dc2626');
        } else {
            document.body.classList.remove('light-mode');
            setMainColor('#0ef');
            setTimeout(() => {
                document.body.style.transition = 'background-color 1.5s, color 1.5s';
            }, 1500);
        }
    }, [lightMode, setMainColor]);

    return (
        <header className="header">
            <nav className="nav-container">
                <p className="logo-dev">
                    &lt;<span className="logo-span">DEV Maria</span>/&gt;
                </p>
                <div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <div className="icons-container">
                                <button onClick={handleToggleLightMode} className="icon-button">
                                    {lightMode ? <FaSun className="sun-icon animated-icon" /> : <FaMoon className="moon-icon animated-icon" />}
                                </button>
                                <button onClick={handleChangeLanguage} className="icon-button">
                                    <img
                                        src={currentLanguage === 'en' ? FlagENG : FlagBR}
                                        className="flag-icon animated-icon"
                                        alt={`Flag ${currentLanguage === 'en' ? 'ENG' : 'BR'}`}
                                    />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;