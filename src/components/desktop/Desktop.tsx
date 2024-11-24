import React, { useEffect, useState } from 'react';
import './Desktop.css';
import StartMenu from './StartMenu';
import Taskbar from './Taskbar';
import Modal from './Modal';
import InternetExplorerInterface from '../internet';

const Desktop: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openPrograms, setOpenPrograms] = useState<string[]>([]);
    const [minimizedPrograms, setMinimizedPrograms] = useState<string[]>([]);
    const [errorOccurred, setErrorOccurred] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const openProgram = (program: string) => {
        if (program === 'Não click') {
            setErrorOccurred(true);
        } else {
            const programLink = getProgramLink(program);
            if (programLink) {
                window.open(programLink, '_blank');
            } else {
                if (!openPrograms.includes(program)) {
                    setOpenPrograms((prev) => [...prev, program]);
                    setMinimizedPrograms((prev) => prev.filter((p) => p !== program));
                }
            }
            setMenuOpen(false);
        }
    };

    const closeProgram = (program: string) => {
        setOpenPrograms((prev) => prev.filter((p) => p !== program));
    };

    const minimizeProgram = (program: string) => {
        setMinimizedPrograms((prev) => [...prev, program]);
    };

    const maximizeProgram = (program: string) => {
        setMinimizedPrograms((prev) => prev.filter((p) => p !== program));
    };

    useEffect(() => {
        if (errorOccurred) {
            const timer = setTimeout(() => {
                window.location.reload();
            }, 6000);

            return () => clearTimeout(timer);
        }
    }, [errorOccurred]);

    return (
        <div className="desktop">
            <div className="desktop-icons">
                {['Computer', 'Recycle Bin', 'Internet Explorer', 'Não click'].map((program, index) => (
                    <div
                        className="shortcut"
                        key={index}
                        onClick={() => openProgram(program)}
                    >
                        <img src={getProgramIcon(program)} alt={program} />
                        <span>{program}</span>
                    </div>
                ))}

                {errorOccurred && (
                    <div className="blueScreen">
                        <div className="emoji">:(</div>
                        <div className="errorMessage">
                            Your computer has encountered a problem and needs to restart. We are collecting some error information, and the restart will happen automatically shortly.
                        </div>
                        <div className="technicalInfo">
                            If you'd like to know more, you can search online later for this error: INACCESSIBLE_BOOT_DEVICE
                        </div>
                    </div>
                )}
            </div>

            <Taskbar
                toggleMenu={toggleMenu}
                openPrograms={openPrograms.filter(program => program !== 'Computer' && program !== 'Recycle Bin')}  // Exclui Computer e Recycle Bin da taskbar
                minimizedPrograms={minimizedPrograms}
                maximizeProgram={maximizeProgram}
            />


            {menuOpen && <StartMenu openProgram={openProgram} />}

            {openPrograms.map((program) => (
                (program !== 'Computer' && program !== 'Recycle Bin') && (
                    <Modal
                        key={program}
                        program={program}
                        closeProgram={() => closeProgram(program)}
                        minimizeProgram={() => minimizeProgram(program)}
                        isMinimized={minimizedPrograms.includes(program)}
                    >
                        {program === 'Internet Explorer' ? (
                            <InternetExplorerInterface />
                        ) : (
                            <div>Conteúdo do programa: {program}</div>
                        )}
                    </Modal>
                )
            ))}

        </div>
    );
};

const getProgramLink = (program: string) => {
    const links: { [key: string]: string } = {
        'GitHub': 'https://github.com/MariaClaraAmorim',
        'LinkedIn': 'https://www.linkedin.com/in/mariaclara-amorim',
    };
    return links[program] || null;
};

const getProgramIcon = (program: string) => {
    const icons: { [key: string]: string } = {
        Computer: 'https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/128/Computer-icon.png',
        'Recycle Bin': 'https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-75-Trash-icon.png',
        'Internet Explorer': 'https://icons.iconarchive.com/icons/photoshopedia/xedia/128/Internet-Explorer-icon.png',
        "Não click": 'https://via.placeholder.com/24',
    };
    return icons[program] || 'https://via.placeholder.com/24';
};

export default Desktop;
