import { useTranslation } from "react-i18next";
import Medias from "../medias";
import "./footer.css";

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container container">
                <p className="footer-title">
                    &lt;<span className="dot-footer">DEV Maria</span>/&gt;
                </p>
                <Medias />

                <span className="footer-copy">&#169;{currentYear} {t("footer")}</span>
            </div>
        </footer>
    );
};

export default Footer;
