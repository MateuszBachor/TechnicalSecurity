import styles from "./OurOffer.module.css";
import ServiceImg from "./ServiceImg.png";
import MonitoringImg from "./MonitoringImg.png";
import CleaningImg from "./CleaningImg.png";
import SecurityImg from "./SecurityImg.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const OurOffer = () => {
  const offers = [
    {
      title: "Bezpieczeństwo fizyczne",
      description:
        "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
      backgroundImage: ServiceImg,
    },
    {
      title: "Ochrona danych",
      description:
        "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
      backgroundImage: MonitoringImg,
    },
    {
      title: "Monitoring 24/7",

      description:
        "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
      backgroundImage: CleaningImg,
    },
    {
      title: "Bezpieczeństwo fizyczne",
      description:
        "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
      backgroundImage: SecurityImg,
    },
  ];

  return (
    <section className={styles.offerSection}>
      <span className={styles.offerSectionTitle}>Sprawdź naszą oferte!</span>
      <div className={styles.offerCards}>
        {offers.map((offer, index) => (
          <div className={styles.offerCard} key={index}>
            <img
              className={styles.imgOfferCard}
              src={offer.backgroundImage}
              alt=""
            ></img>
            <div className={styles.btnReadmore}>
              Dowiedz się więcej{" "}
              <span className={styles.iconReadmore}>
                <MdKeyboardDoubleArrowRight />
              </span>{" "}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurOffer;
