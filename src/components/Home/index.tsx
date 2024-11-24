import { IoCloudDownloadOutline } from 'react-icons/io5';
import GIF from '../../../public/maria.gif';
import { useTranslation } from 'react-i18next';
import Transition from '../transition/Transition';
import './Home.css';
import Medias from '../medias';

const HomeComponent = () => {
    const { t } = useTranslation();

    return (
        <Transition onAnimationComplete={() => { }}>
            <section className="home">
                <div className="home-content">
                    <h1 className="animate-h1">Maria Clara</h1>

                    <div className="transparent-text">
                        <h3 className="animation-text">
                            {t("content.FrontEnd")}{" "}
                        </h3>
                    </div>

                    <Medias />

                    <div className="btn-box">
                        <a
                            href="./cv/Curriculo-MariaClaraVieiradeAmorim.pdf"
                            download
                            className="btn"
                        >
                            {t("button.baixar")}
                            <IoCloudDownloadOutline />
                        </a>
                    </div>
                </div>

                <div className="home-img">
                    <img src={GIF} alt="home-img" />
                </div>
            </section>
        </Transition>
    );
};

export default HomeComponent;
