import styles from "./AboutUsGallery.module.css";
import mapImg from "./../MapComponent/dolnyslask.webp";

const AboutUsFeatures = () => {
  return (
    <div className={styles.aboutUsFeatures}>
      <div className={styles.aboutUsSloganContainer}>
        <div className={styles.aboutUsSloganContent}>
          Twoje bezpieczeństwo i komfort są dla nas najważniejsze!
        </div>
      </div>
      <div className={styles.aboutUsFeaturesContainer}>
        <img className={styles.aboutUsFeaturesImage} src={mapImg} alt="" />
        <ul>
          <li>
            <b>PROFESJONALNY ZESPÓŁ EKSPERTÓW</b> <br />
            Nasza drużyna to doświadczeni specjaliści, którzy przeszli
            rygorystyczne szkolenia i są gotowi zadbać o Twoje bezpieczeństwo
            24/7
          </li>
          <li>
            <b>WIELOLETNIE DOŚWIADCZENIE</b> <br />
            Jesteśmy na rynku od 1996 roku, zdobywając cenne doświadczenie
          </li>
          <li>
            <b>NOWOCZESNA TECHNOLOGIA</b> <br />
            Stawiamy na innowacje, testujemy i wdrażamy nowinki ze świata
            technologii.
          </li>
          <li>
            <b>INDYWIDUALNE PODEJŚCIE</b>
            <br /> Rozumiemy unikalne potrzeby i oczekiwania. Dlatego
            rozwiązania i usługi dostosowujemy do konkretnych wymagań.
          </li>
          <li>
            <b>CAŁODOBOWA OBSŁUGA</b>
            <br /> Nasza drużyna działa 24/7, dlatego możesz czuć się
            bezpiecznie o każdej porze dnia i nocy.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsFeatures;
