import React, { useState, useEffect } from "react";
import styles from "./AboutUsGallery.module.css";
import Loader from "../Loader/Loader";
import bannerImg from "./AboutUsImages/AboutUsImgNr5.webp";
import bannerImgMobile from "./AboutUsImages/AboutUsBannerImgMobile.webp";

const AboutUsDescriptionCard = () => {
  const [isShow, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = bannerImg;

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
  const smallScreen = window.innerWidth < 768;

  const backgroundImageStyle = {
    backgroundImage: smallScreen
      ? imageLoaded
        ? `url(${bannerImgMobile})`
        : "none"
      : imageLoaded
      ? `url(${bannerImg})`
      : "none",
  };
  return (
    <div
      className={styles.AboutUsDescriptionContainer}
      style={backgroundImageStyle}
    >
      <div
        className={`${styles.AboutUsDescriptionCard} ${
          isShow ? styles.active : ""
        }`}
        data-label="888 Technical Security"
      >
        <div className={styles.AboutUsDescriptionCardContainer}>
          <span className={styles.AboutUsDescriptionCardHeader}>
            Ponad 27 lat na rynku
          </span>
          <p className={styles.AboutUsDescriptionCardBody}>
            Historia firmy 888 Technical Security rozpoczęła się w 1996 roku,
            kiedy to założyciele, postanowili połączyć swoje doświadczenie z
            dziedziny służb mundurowych oraz pasję do zapewniania bezpieczeństwa
            społeczności lokalnej. Rozpoczęli od niewielkiego biura w swoim
            rodzinnym mieście, oferując podstawowe usługi ochroniarskie.
            <br />
            <br /> W miarę jak firma rosła, poszerzała swoją ofertę, dodając
            nowe usługi, takie jak monitorowanie alarmów, ochrona obiektów
            przemysłowych, usługi techniczne i usługi porządkowe. To sprawiło,
            że obecnie jesteśmy w stanie kompleksowo obsługiwać klientów z
            różnych sektorów, w tym przedsiębiorstwa, instytucje publiczne i
            osoby prywatne.
            <br />
            <br /> W 27-letniej historii firma nieustannie inwestowała w rozwój
            swojego personelu i technologii. Nasze zespoły przechodzą regularne
            szkolenia w zakresie technik ochrony, pierwszej pomocy i zarządzania
            kryzysowego, co pozwala nam sprostać różnorodnym wyzwaniom związanym
            z zapewnieniem bezpieczeństwa.
            <br />
            <br /> W ciągu tych 27 lat z sukcesem rozszerzyliśmy swoją
            działalność na inne regiony województwa dolnośląskiego. Dzięki
            swojej misji zapewniania bezpieczeństwa jesteśmy gotowi sprostać
            wszelkim wyzwaniom, które przyniesie przyszłość.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDescriptionCard;
