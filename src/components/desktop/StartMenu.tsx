import React from 'react';
import './StartMenu.css';

interface MenuItem {
    icon: string;
    label: string;
    link?: string;
}

interface StartMenuProps {
    openProgram: (program: string) => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ openProgram }) => {
    const leftMenuItems: MenuItem[] = [
        { icon: 'https://icons.iconarchive.com/icons/benjigarner/softdimension/128/MSN-exporer-icon.png', label: 'MSN' },
        { icon: 'https://icons.iconarchive.com/icons/ncrow/mega-pack-2/128/Windows-Media-Player-10-icon.png', label: 'Windows Media Player' },
        { icon: 'https://icons.iconarchive.com/icons/hopstarter/3d-cartoon-vol3/128/Windows-Messenger-icon.png', label: 'Windows Messenger' },
        { icon: 'https://icons.iconarchive.com/icons/tpdkdesign.net/refresh-cl/256/System-Calc-icon.png', label: 'Calculator' },
    ];

    const rightMenuItems: MenuItem[] = [
        { icon: 'https://icons.iconarchive.com/icons/wwalczyszyn/iwindows/128/Folders-Documents-Folder-icon.png', label: 'My Documents' },
        { icon: 'https://icons.iconarchive.com/icons/awicons/vista-artistic/128/folder-my-music-icon.png', label: 'My Music' },
        { icon: 'https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/128/Computer-icon.png', label: 'My Computer' },
        {
            icon: 'https://icons.iconarchive.com/icons/pictogrammers/material/128/github-icon.png', label: 'GitHub', link: 'https://github.com/MariaClaraAmorim'
        },
        {
            icon: 'https://icons.iconarchive.com/icons/martz90/circle/128/linkedin-icon.png', label: 'LinkedIn', link: 'https://www.linkedin.com/in/mariaclara-amorim'
        },
        { icon: 'https://icons.iconarchive.com/icons/tatice/cristal-intense/128/FAQ-icon.png', label: 'Help' },
    ];

    return (
        <div className="start-menu">
            <div className="start-menu-header">
                <img src="./public/Photo.png" alt="Profile" className="profile-pic" />
                <span className="user-name">Maria Clara</span>
            </div>
            <div className="start-menu-content">
                <div className="left-column">
                    {leftMenuItems.map((item, index) => (
                        <div className="menu-item" key={index} onClick={() => openProgram(item.label)}>
                            <img src={item.icon} alt={item.label} />
                            {item.label}
                        </div>
                    ))}
                </div>
                <div className="right-column">
                    {rightMenuItems.map((item, index) => (
                        <div className="menu-item" key={index} onClick={() => openProgram(item.label)}>
                            {item.link ? (
                                <a href={item.link} className="link" target="_blank" rel="noopener noreferrer">
                                    <img src={item.icon} alt={item.label} />
                                    {item.label}
                                </a>
                            ) : (
                                <>
                                    <img src={item.icon} alt={item.label} />
                                    {item.label}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StartMenu;
