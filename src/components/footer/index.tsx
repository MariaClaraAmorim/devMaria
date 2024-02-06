import "./footer.css";
import Medias from "../Medias";
import { t } from "i18next";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          &lt; <span className="dot__footer">DEV Maria</span>/&gt;
        </h1>
        <Medias />

        <span className="footer__copy">&#169;2024 {t("footer")}</span>
      </div>
    </footer>
  );
};

export default Footer;
