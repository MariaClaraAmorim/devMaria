import React, { useEffect, useState } from 'react';
import './Taskbar.css';

interface TaskbarProps {
    toggleMenu: () => void;
    openPrograms: string[];
    minimizedPrograms: string[];
    maximizeProgram: (program: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ toggleMenu, openPrograms, maximizeProgram }) => {
    const [clock, setClock] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setClock(`${hours}:${minutes}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="windowsXP">
            <div className='taskbar'>
                <button className="start-button" onClick={toggleMenu}>
                    <img src="https://icons.iconarchive.com/icons/tatice/cristal-intense/128/Windows-icon.png" alt="Iniciar" className="icon-image" />
                    Iniciar
                </button>
                <div className="taskbar-icons">
                    {openPrograms.map((program, index) => (
                        <div
                            key={index}
                            className="taskbar-icon"
                            onClick={() => maximizeProgram(program)}
                        >
                            <img src={getProgramIcon(program)} alt={program} title={program} className="icon-image" />
                        </div>
                    ))}
                </div>
                <div className="system-tray">
                    <div className="icon" id="volume"></div>
                    <div className="icon" id="media"></div>
                    <div className="icon" id="seguranca"></div>
                    <div className="clock">{clock}</div>
                </div>
            </div>
        </div>
    );
};

const getProgramIcon = (program: string) => {
    const icons: { [key: string]: string } = {
        'Computer': 'https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/128/Computer-icon.png',
        'Recycle Bin': 'https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-75-Trash-icon.png',
        'Internet Explorer': 'https://icons.iconarchive.com/icons/photoshopedia/xedia/128/Internet-Explorer-icon.png',
    };
    return icons[program] || 'https://via.placeholder.com/24';
};

export default Taskbar;
