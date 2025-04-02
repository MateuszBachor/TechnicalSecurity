import { NavLink } from "react-router-dom";
import styles from "./OurOffer.module.css";
import ServiceImg from "./servicewebp.webp";
import MonitoringImg from "./monitoringwebp.webp";
import CleaningImg from "./cleaningwebp.webp";
import SecurityImg from "./securitywebp.webp";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const OurOffer = () => {
  const offers = [
    {
      title: "USŁUGI TECHNICZNE",
      description: [
        "Systemy alarmowe",
        "CCTV",
        "Mobilne wieże monitorujące",
        "Usługi elektryczne ",
        "Instalacje domofonowe",
      ],
      backgroundImage: ServiceImg,
      url: "/Oferta/Serwis",
    },
    {
      title: "MONITORING 24/7",
      description: [
        "Wideo weryfikacja z analityką obrazu",
        "Całodobowy nadzór elektroniczny z natychmiastową reakcją załóg interwencyjnych",
        "Wykwalifikowani Operatorzy ",
      ],
      backgroundImage: MonitoringImg,
      url: "/Oferta/Monitoring",
    },
    {
      title: "OCHRONA",
      description: [
        "Konwój wartości pieniężnych",
        "Licencjonowane załogi interwencyjne",
        "Ochrona stacjonarna",
        "Podjazdy kontrolne",
      ],
      backgroundImage: SecurityImg,
      url: "/Oferta/Ochrona",
    },
    {
      title: "USŁUGI PORZĄDKOWE",
      description: [
        "Sprzątanie biur i lokali",
        "Sprzątanie po remoncie",
        "Pielęgnacja zieleni",
        "DDD Dezynfekcja  Dezynsekcja Deratyzacja",
      ],
      backgroundImage: CleaningImg,
      url: "/Oferta/Uslugi-porzadkowe",
    },
  ];

  return (
    <section className={styles.offerSection}>
      <div className={styles.offerCards}>
        {offers.map((offer, index) => (
          <NavLink key={index} to={offer.url}>
            <div
              loading="lazy"
              className={styles.offerCard}
              key={index}
              style={{ backgroundImage: `url(${offer.backgroundImage})` }}
            >
              <div className={styles.ContentOfferCard}>
                <div className={styles.offerTitle}>{offer.title}</div>
                <ul className={styles.offerList}>
                  {offer.description.map((e, index) => {
                    return (
                      <li key={index} className={styles.offerListElem}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
                <div className={styles.btnReadmoreContainer}>
                  <div className={styles.btnReadmore}>
                    Zobacz więcej{" "}
                    <span className={styles.iconReadmore}>
                      <MdKeyboardDoubleArrowRight />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default OurOffer;
