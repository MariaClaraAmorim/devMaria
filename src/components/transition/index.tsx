import { motion } from "framer-motion"
import { ReactNode, useEffect } from "react";
import "./Transition.css";

interface TransitionProps {
    children: ReactNode;
    onAnimationComplete: () => void;
}

const Transition = ({ children, onAnimationComplete }: TransitionProps) => {
    useEffect(() => {
        const removeOverflowHidden = () => {
            document.body.style.overflow = "visible";
        };

        document.body.style.overflow = "hidden";

        return () => {
            removeOverflowHidden();
        };
    }, []);

    return (
        <>
            <motion.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                onAnimationComplete={onAnimationComplete}
            />

            {children}

            <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default Transition;
















