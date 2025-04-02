import styles from "./SecurityOffer.module.css";
import React, { useState, useEffect } from "react";
import { BsCheck2 } from "react-icons/bs";
import PatrolImg from "./securityOfferImg.webp";
import Loader from "../Loader/Loader";

const SecurityOffer = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = PatrolImg;

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
    backgroundImage: imageLoaded ? `url(${PatrolImg})` : "none",
  };

  return (
    <div className={styles.securityOfferContainer}>
      <div className={styles.securityOffer}>
        <div className={styles.securityOfferImg} style={backgroundImageStyle}>
          {loading && <Loader />}
        </div>
        <div className={styles.securityOfferArticle}>
          <span className={styles.securityOfferTitle}>
            <span className={styles.decorationTitle}></span>OCHRONA
          </span>
          <div className={styles.securityOfferDescription}>
            <ul>
              <li>
                <BsCheck2 /> <p>Licencjonowane Patrole Interwencyjne</p>
              </li>
              <li>
                <BsCheck2 />
                <p>Natychmiastowa reakcja</p>
              </li>
              <li>
                <BsCheck2 />
                <p>Podjazdy kontrolne</p>
              </li>
              <li>
                <BsCheck2 />
                <p>Ochrona stacjonarna</p>
              </li>
            </ul>
            <b>
              Licencjonowane Patrole Interwencyjne na terenie Strzelina, Sobótki
              i Środy Śląskiej
              <br />
            </b>{" "}
            zawsze w gotowości do podjęcia interwencji. Odgrywają kluczową rolę
            w zapewnieniu natychmiastowej reakcji na sytuacje alarmowe i
            zagrożenia. Dlatego nasze zespoły patrolu interwencyjnego są
            odpowiednio przeszkolone i gotowe do podejmowania interwencji w
            każdych okolicznościach.
            <br />
            <br />
            <b>Ochrona Fizyczna</b> <br />
            to zapewnienie bezpieczeństwa firmie i jej pracownikom. Pracownicy
            ochrony fizycznie zabezpieczają obiekt, zapobiegają
            nieautoryzowanemu dotępowi, prowadzą ewidencję ruchu oraz patrolują
            terenu obiektu w celu monitorowania sytuacji i wykrywania
            potencjalnych zagrożeń.
            <br />
            <br />
            <b>Konwojowanie Wartości Pieniężnych</b> <br /> Usługa konwojowania
            wartości pieniężnych to kompleksowe podejście do transportu i
            zabezpieczania cennych przedmiotów, w szczególności gotówki.
            <br />
            <br />
            <br />
            Usługi ochrony świadczymy zgodnie z obowiązującymi przepisami
            prawnymi i wymogami, a pracownicy ochrony działają w ramach
            obowiązujących regulacji.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityOffer;
