import styles from "./AboutUs.module.css";
import MyImage from "./AboutUsImages/EliteImg.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const AboutUs = ({ Scroll }) => {
  return (
    <>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUsTitleContainer}>
          <span className={styles.aboutUsTitle}>o firmie</span>
          <span className={styles.aboutUsSubtitle}>888 Technical Security</span>
          <div
            className={styles.aboutUsImageContainer}
            style={{ backgroundImage: `url(${MyImage})` }}
          ></div>
        </div>
        <div className={styles.aboutUsDescriptionContainer}>
          <span className={styles.aboutUsDescriptionText}>
            wcześniej Agencja Ochrony Mienia 888 to wiedza i doświadczenie
            budowane nieprzerwanie od 1996 roku. <br></br>
            888 Technical Security to &nbsp; wykwalifikowany zespół, kompleksowa
            oferta usług i rozwiązania dopasowywane do indywidualnych potrzeb
            każdego klienta.
            <br></br>
            Firma oferuje wsparcie działu technicznego, całodobowe Centrum
            Monitorowania Alarmów oraz Licencjonowane Grupy Interwencyjne.
            Usługi w zakresie monitoringu SSWiN, CCTV, konwojowania wartości
            pieniężnych, wideo analityki i wielu innych. Kompleksowe usługi
            obejmują także prace porządkowe, sprzątanie po remoncie oraz
            utrzymanie zieleni. <br></br> 888 Technical Security dba o
            bezpieczeństwo i zapewnia wsparcie techniczne m.in. bankom,
            instytucjom użytku publicznego, obiektom handlowym, przemysłowym
            oraz domom prywatnym.
          </span>
          <div className={styles.btnReadMoreContainer}>
            <div className={styles.btnReadmore} onClick={Scroll}>
              Zobacz opinie
              <span className={styles.iconReadmore}>
                <MdKeyboardDoubleArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
