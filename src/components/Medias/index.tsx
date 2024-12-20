import { motion } from "framer-motion";
import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import './medias.css';

const Medias = () => {
    return (
        <>
            <div className="social-media">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 3,
                        delay: 1.2,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    <NavLink
                        to="https://api.whatsapp.com/send?phone=77999313620"
                        className="whatsapp-link"
                    >
                        <FaWhatsapp />
                    </NavLink>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 3,
                        delay: 1.5,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    <NavLink
                        to="https://www.instagram.com/mariaclara.amorim_/"
                        className="instagram-link"
                    >
                        <FaInstagram />
                    </NavLink>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        delay: 1.7,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    <NavLink
                        to="https://www.linkedin.com/in/mariaclara-amorim"
                        className="linkedin-link"
                    >
                        <FaLinkedinIn />
                    </NavLink>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 3,
                        delay: 1.9,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    <NavLink
                        to="https://github.com/MariaClaraAmorim"
                        className="github-link"
                    >
                        <FaGithub />
                    </NavLink>
                </motion.div>
            </div>
        </>
    );
}

export default Medias;
