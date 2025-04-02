import styles from "./ServiceOffer.module.css";
import React, { useState, useEffect } from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import Loader from "../Loader/Loader";
import ServiceOfferImg from "./ServiceOfferImg.webp";
import installationCamImg from "./mobileTower.webp";

const ServiceOffer = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageLoaded2, setImageLoaded2] = useState(false);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = ServiceOfferImg;
    const img2 = new Image();
    img2.src = installationCamImg;
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
    img2.onload = () => {
      setImageLoaded2(true);
      setLoading2(false);
    };
  }, []);
  const backgroundImageStyle = {
    backgroundImage: imageLoaded ? `url(${ServiceOfferImg})` : "none",
  };
  const backgroundImageStyle2 = {
    backgroundImage: imageLoaded2 ? `url(${installationCamImg})` : "none",
    marginTop: "8%",
  };
  return (
    <div className={styles.serviceOfferContainer}>
      <div className={styles.serviceOffer}>
        <div className={styles.serviceOfferImg} style={backgroundImageStyle}>
          {loading && <Loader />}
        </div>
        <div className={styles.serviceOfferArticle}>
          <span className={styles.serviceOfferTitle}>
            <span className={styles.decorationTitle}></span> USŁUGI TECHNICZNE
          </span>
          <div className={styles.serviceOfferDescription}>
            Rodzaj systemu alarmowego, który jest najlepszy dla konkretnego
            obiektu, zależy od jego charakterystyki, potencjalnych zagrożeń i
            potrzeb właściciela lub użytkownika. Dlatego przeprowadzamy
            bezpłatną ocenę obiektu i na podstawie potencjalnych zagrożeń oraz
            wymagań przygotowujemy projekt oraz wycenę. <br />
            <br />
            Montaż realizują doświadczeni specjaliści, którzy są
            wykwalifikowanymi pracownikami w dziedzinie zabezpieczeń
            technicznych.
            <br />
            <br />
            <ul>
              <li>
                <b>SSWiN</b> - System Sygnalizacji Włamania i Napadu to system
                bezpieczeństwa, który służy do wykrywania prób włamania lub
                napadu na obiekt m.in. domy, firmy czy instytucje. Głównym celem
                SSWiN jest ostrzeganie o nieautoryzowanym dostępie lub próbie
                wtargnięcia do chronionego obszaru. Systemy SSWiN mogą obejmować
                różne czujniki, takie jak czujniki ruchu, czujniki drzwi i
                okien, kamery monitoringu z wideo analityką obrazu, kamery z
                funkcją podczerwieni (IR), które dzięki diodom podczerwieni są
                zdolne do nagrywania obrazów w warunkach niskiego oświetlenia
                lub całkowitej ciemności, oraz urządzenia sygnalizacyjne, które
                alarmują w przypadku wykrycia niebezpieczeństwa.
              </li>
              <li>
                <b>CCTV</b> – telewizja przemysłowa to rozwiązanie umożliwiające
                obserwację wydarzeń, które są rejestrowane przez od jednej do
                nawet kilkuset kamer przemysłowych jednocześnie. Składający się
                na ten system komponenty to przede wszystkim rejestratory oraz
                kamery, których obrazy są przekazywane do centralnego punktu
                odbiorczego. Tam pracownicy monitorujący na ekranach mają
                możliwość śledzenia rejestrowanych zdarzeń.
              </li>
              <li>
                <b>System sygnalizacji pożaru</b> - reagują na dym, ciepło lub
                inne oznaki pożaru. Dodatkowo dzięki kamerom termowizyjnym,
                jesteśmy w stanie monitorować zmiany termiczne obiektów czy
                wykryć pożar.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.serviceOffer}>
        <div className={styles.serviceOfferArticle}>
          <span
            className={styles.serviceOfferTitle}
            style={{ marginTop: "5%", marginLeft: "3%" }}
          >
            Mobilna wieża monitorująca
          </span>
          <div
            className={styles.serviceOfferDescription}
            style={{ marginLeft: "1%" }}
          >
            Zaawansowane rozwiązanie monitoringu wizyjnego, które może być
            skonfigurowane zgodnie z indywidualnymi potrzebami klienta. Poniżej
            przedstawiamy bardziej szczegółowy opis poszczególnych elementów tej
            wieży:
            <ul>
              <li>
                <b>Kamery IP z analityką obrazu:</b> Wyposażone w nowoczesną
                analizę obrazu, mogą rozpoznawać i reagować na konkretne
                zdarzenia, takie jak zmiana scenerii, wtargnięcie na
                monitorowany obszar, zanik obrazu wideo, sabotaż i wiele innych.
                Znacznie zwiększa to skuteczność monitoringu.
              </li>
              <li>
                <b>Kamery termowizyjne:</b> Służą do rejestrowania obrazu na
                podstawie emitowanego ciepła, co umożliwia skuteczne
                monitorowanie obszarów nawet w warunkach niskiej widoczności.
                Ponadto rejestrują zmiany termiczne np. obszarów zagrożonych
                pożarem, kontenerów, pomieszczeń i skutecznie wykrywają pożar.
              </li>
              <li>
                <b>Głośnik:</b> Może być używany do ostrzegania lub odstraszania
                potencjalnych intruzów.
              </li>
              <li>
                <b>Reflektor o dużej mocy:</b> Oświetla teren wokół wieży, co
                jest szczególnie istotne w warunkach nocnych lub w miejscach o
                ograniczonej widoczności.
              </li>
              <li>
                <b>Alternatywne zasilanie:</b> Zapewnia niezależne zasilanie,
                czerpiąc energię z paneli fotowoltaicznych lub agregatu. co
                umożliwia pracę wieży nawet w przypadku przerw w dostawie
                energii elektrycznej. Długi czas pracy akumulatora zwiększa
                niezawodność systemu.
              </li>
              <li>
                <b>Stalowa konstrukcja podstawy:</b> Zapewnia stabilność i
                bezpieczeństwo, nawet w trudnych warunkach atmosferycznych. Jest
                odporna na wibracje i inne czynniki zewnętrzne.
              </li>
              <li>
                <b>Elektronika wewnątrz konstrukcji:</b> Zawiera niezbędne
                układy sterujące, procesory, moduły komunikacyjne i inne
                elementy elektroniczne odpowiedzialne za pracę systemu.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={styles.serviceOfferTowerImg}
          style={backgroundImageStyle2}
        >
          {loading2 && <Loader />}
        </div>
      </div>
      <div className={`${styles.serviceOffer} ${styles.otherServiceOffer}`}>
        <div
          className={`${styles.serviceOfferArticle} ${styles.otherServiceOfferArticle}`}
        >
          <div
            className={`${styles.serviceOfferDescription} ${styles.otherServiceOfferDescription}`}
          >
            Ta wieża mobilna może być dostosowywana do różnych zastosowań,
            takich jak monitorowanie terenów przemysłowych, placu budowy,
            remontów dróg i/lub kanalizacji i każdego innego obiektu. Dzięki
            zaawansowanej technologii i elastycznej konfiguracji, spełnia
            różnorodne wymagania klientów w zakresie monitoringu wizyjnego i
            bezpieczeństwa. Tworzymy kompleksowy projekt zabezpieczeń,
            składający się z kilku lub kilkunastu komponentów. Wykorzystywane
            przez nas najnowsze technologie pozwalają na dostosowanie się do
            nawet najtrudniejszych warunków. Masz już system bezpieczeństwa?
            Zintegrujemy go dla Ciebie zgodnie z najnowszymi rozwiązaniami i
            potrzebami obiektu. Tworzymy kompleksowy projekt zabezpieczeń,
            składający się z kilku lub kilkunastu komponentów. Wykorzystywane
            przez nas najnowsze technologie pozwalają na dostosowanie się do
            nawet najtrudniejszych warunków. <br />
            <br />
            <br />
            <div className={styles.otherServices}>
              <div className={styles.otherSerivcesIcon}>
                <MdMiscellaneousServices />
              </div>
              <div>
                <span style={{ marginBottom: "10%" }}>
                  <b>
                    Masz problem techniczny? Potrzebujesz szybkiej i
                    profesjonalnej pomocy?
                    <br /> Jesteśmy tu, aby Ci pomóc!
                  </b>
                  <br />
                  <br />
                  Nie martw się! Nasza firma świadczy różnorodne usługi
                  najwyższej jakości, takie jak:
                </span>
                <ul>
                  <li style={{ marginBottom: "2%" }}>
                    montaż oraz serwis instalacji domofonowych i wideodomofonów
                  </li>
                  <li style={{ marginBottom: "2%" }}>
                    usługi hydrauliczne - naprawa i wymiana odpływów,
                    podgrzewaczy wody itp.{" "}
                  </li>
                  <li style={{ marginBottom: "2%" }}>
                    usługi ślusarskie - wymiana zamków, regulacja drzwi i okien
                  </li>
                  <li style={{ marginBottom: "2%" }}>
                    drobne prace elektryczne - naprawy usterek, podłączenia
                    instalacji i urządzeń
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            <span className={styles.otherServicesSlogan}>
              <b>
                Niezależnie od tego, czy jesteś przedsiębiorcą, czy borykasz się
                z usterką w domu, nasza ekipa jest gotowa, aby zapewnić Ci
                kompleksową pomoc techniczną. Co możemy dla Ciebie zrobić?
                Zadzwoń już dziś i powiedz nam, w czym możemy Ci pomóc!
              </b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffer;
