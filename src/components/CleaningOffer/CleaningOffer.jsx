import styles from "./CleaningOffer.module.css";
import React, { useState, useEffect } from "react";
import CleaningOfferImg from "./CleaningOfferImg.webp";
import Loader from "../Loader/Loader";

const CleaningOffer = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = CleaningOfferImg;
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
    backgroundImage: imageLoaded ? `url(${CleaningOfferImg})` : "none",
  };
  return (
    <div className={styles.cleaningOfferContainer}>
      <div className={styles.cleaningOffer}>
        <div className={styles.cleaningOfferImg} style={backgroundImageStyle}>
          {loading && <Loader />}
        </div>
        <div className={styles.cleaningOfferArticle}>
          <span className={styles.cleaningOfferTitle}>
            <span className={styles.decorationTitle}></span> USŁUGI PORZĄDKOWE
          </span>
          <div className={styles.cleaningOfferDescription}>
            Czystość to wizytówka Twojej firmy! Nasza firma oferuje
            profesjonalne usługi sprzątania oraz pielęgnacji zieleni, które
            spełnią Twoje najwyższe oczekiwania. Dzięki nam Twoje biuro zawsze
            będzie czyste i przyjemne, a Twoi pracownicy oraz klienci poczują
            się komfortowo.
            <div className={styles.cleaningDivUl}>
              <ul>
                <li>
                  {" "}
                  <p> Sprzątanie biur i lokali</p>
                </li>
                <li>
                  <p>Utrzymanie czystości w zakładach produkcyjnych</p>{" "}
                </li>
                <li>
                  {" "}
                  <p>Obsługa wspólnot mieszkaniowych</p>{" "}
                </li>
                <li>
                  {" "}
                  <p>Sprzątanie po remoncie</p>
                </li>
                <li>
                  <p>DDD Dezynfekcja Dezynsekcja Deratyzacja</p>{" "}
                </li>
              </ul>
              <ul>
                <li>
                  <p>Utrzymanie zieleni</p>{" "}
                </li>
                <li>
                  {" "}
                  <p>Pielęgnacja ogrodów</p>
                </li>
                <li>
                  <p>Koszenie trawy</p>{" "}
                </li>
                <li>
                  {" "}
                  <p>Przycinanie żywopłotu</p>{" "}
                </li>
                <li>
                  <p>Zagospodarowanie przestrzenne</p>{" "}
                </li>
              </ul>
            </div>
            <br />
            <div>
              <span
                className={styles.gardenOfferTitle}
                style={{ marginTop: "3%" }}
              >
                Dlaczego warto nam zaufać?
              </span>
              <ul>
                <li>
                  <p>Przestaniesz martwić się standardami czystości</p>
                </li>
                <li>
                  <p>
                    Stworzymy higieniczne i przyjazne otoczenie dla pracowników
                    oraz klientów.
                  </p>{" "}
                </li>
                <li>
                  <p>
                    {" "}
                    Wykorzystujemy sprzęt i środki czystości najwyższej jakości,
                    aby zapewnić doskonałe efekty
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Dostosujemy nasze usługi do Twoich potrzeb i harmonogramu.
                    Wiemy jak ważna jest stabilizacja, dlatego zapewniamy
                    ciągłość oferowanych usług
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningOffer;
