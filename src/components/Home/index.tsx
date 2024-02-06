import styles from "./Home.module.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import GIF from "../../../public/assets/maria.gif";
import { t } from "i18next";
import Transition from "../transition/Transition";
import Medias from "../Medias";

const HomeComponent = () => {
  return (
    <>
      <Transition onAnimationComplete={() => {}}>
        <section className={styles.home}>
          <div className={styles.home_content}>
            <h1 className={styles.animate_h1}>Maria Clara</h1>

            <div className={styles.transparent_text}>
              <h3 className={styles.animation_text}>
                {t("content.FrontEnd")}{" "}
              </h3>
            </div>

           <Medias />

            <div className={styles.btn_box}>
              <a
                href="./cv/Curriculo-MariaClaraVieiradeAmorim.pdf"
                download
                className={styles.btn}
              >
                {t("button.baixar")}

                <IoCloudDownloadOutline />
              </a>
            </div>
          </div>

          <div className={styles.home_img}>
            <img src={GIF} alt="home_img" />
          </div>
        </section>
      </Transition>
    </>
  );
};

export default HomeComponent;
