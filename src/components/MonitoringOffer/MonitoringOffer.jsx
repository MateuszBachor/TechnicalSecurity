import styles from "./MonitoringOffer.module.css";
import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import MonitoringOfferImg from "./MonitoringOfferImg.webp";

const MonitoringOffer = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = MonitoringOfferImg;
    if (img.complete) {
      setImageLoaded(true);
      setLoading(false);
    } else {
      img.onload = () => {
        setImageLoaded(true);
        setLoading(false);
      };
      img.onerror = () => {
        setLoading(false);
      };
    }
  }, []);
  const backgroundImageStyle = {
    backgroundImage: imageLoaded ? `url(${MonitoringOfferImg})` : "none",
  };
  return (
    <div className={styles.monitoringOfferContainer}>
      <div className={styles.monitoringOffer}>
        <div className={styles.monitoringOfferImg} style={backgroundImageStyle}>
          {loading && <Loader />}
        </div>
        <div className={styles.monitoringOfferArticle}>
          <span className={styles.monitoringOfferTitle}>
            <span className={styles.decorationTitle}></span>MONITORING 24/7
          </span>
          <div className={styles.monitoringOfferDescription}>
            Usługa monitoringu polega na ciągłym nadzorze sygnałów przesyłanych
            przez systemy zabezpieczeń technicznych do stacji monitorowania
            alarmów. Ta stacja jest obsługiwana przez wykwalifikowanych
            operatorów 24/7. Monitoring stanowi skuteczną i stosunkowo
            ekonomiczną metodę ochrony mienia.
            <br />
            <br />
            <b>Jak działa monitoring?</b>
            <br /> Oferujemy całodobowy nadzór nad sygnałami z zabezpieczeń
            technicznych i jesteśmy gotowi na natychmiastową reakcję w przypadku
            sygnałów alarmowych. Jeśli zachodzi potrzeba, informujemy wskazane
            osoby, służby oraz wysyłamy nasz patrol interwencyjny na miejsce
            zdarzenia.
            <br />
            <br />
            Nieprzerwany nadzór elektroniczny nad obiektem pozwala również na
            szybkie wykrycie nieprawidłowości w działaniu systemu alarmowego.
            <br />
            <br />
            Sygnały monitorowane przez Stację Monitorowania zależą od rodzaju
            zainstalowanego systemu alarmowego w obiekcie. Zaawansowane systemy
            generują powiadomienia o różnych rodzajach incydentów, m.in:
            <ul>
              <li>Alarm włamaniowy</li>
              <li>Alarm napadowy</li>
              <li>Sabotaż systemu</li>
              <li>Alarm pożarowy lub gazowy</li>
              <li>Usterki w systemie</li>
              <li>Awaria zasilania</li>
            </ul>
            <b>
              Masz już system bezpieczeństwa? Zintegrujemy go dla Ciebie zgodnie
              z najnowszymi rozwiązaniami i potrzebami obiektu.
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringOffer;
