import React, { useEffect } from "react";
import "./styles.css";

interface StartupScreenProps {
    onFinish: () => void;
}

const StartupScreen: React.FC<StartupScreenProps> = ({ onFinish }) => {
    useEffect(() => {
        const timeout = setTimeout(onFinish, 3000);
        return () => clearTimeout(timeout);
    }, [onFinish]);

    return (
        <div className="window">
            <div className="logo">
                <img src="./public/microsoft.png" alt="" />
            </div>
            <div className="boxer">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="startupFooter">
                <span className="copyright">
                    Copyright &copy; Microsoft Corporation
                </span>
                Microsoft
            </div>
        </div>
    );
};

export default StartupScreen;
