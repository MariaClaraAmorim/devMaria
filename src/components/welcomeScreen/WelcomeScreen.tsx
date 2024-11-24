import React, { useEffect } from "react";
import "./styles.css";

interface WelcomeScreenProps {
    onFinish: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onFinish }) => {
    const [canPlaySound, setCanPlaySound] = React.useState(true);

    useEffect(() => {
        if (canPlaySound) {
            const timeout = setTimeout(onFinish, 3000);
            const startupSound = new Audio('/sons/windows-xp-startup.ogg');
            startupSound.play().catch((err) => console.warn("Erro ao tentar reproduzir som:", err));
            return () => {
                clearTimeout(timeout);
                startupSound.pause();
            };
        }
    }, [canPlaySound, onFinish]);

    return (
        <div className="background">
            <div className="sub">
                <h2 className="title">WELCOME</h2>
            </div>
        </div>
    );
};

export default WelcomeScreen;
