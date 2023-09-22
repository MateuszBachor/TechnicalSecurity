import React from "react";
import styles from "./WhyUs.module.css";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";

const WhyUs = () => {
  return (
    <section className={styles.whyUs}>
      {/* <h2 className={styles.title}>Dlaczego my?</h2> */}
      <div className={styles.reasons}>
        <div className={styles.reason}>
          <div className={styles.reasonIcon}>
            <BsPeopleFill />
          </div>

          <h3 className={styles.reasonTitle}>Doświadczenie</h3>
          <p className={styles.reasonDescription}>
            Posiadamy ponad 10-letnie doświadczenie w branży ochrony. Nasi
            pracownicy są wyszkoleni i profesjonalni.
          </p>
        </div>
        <div className={styles.reason}>
          <div className={styles.reasonIcon}>
            <BiSolidTimeFive />
          </div>
          <h3 className={styles.reasonTitle}>Dostosowanie do potrzeb</h3>
          <p className={styles.reasonDescription}>
            Jesteśmy elastyczni i dostosowujemy nasze usługi do indywidualnych
            potrzeb klientów. Zapewniamy kompleksową ochronę w każdym miejscu i
            czasie.
          </p>
        </div>
        <div className={styles.reason}>
          <div className={styles.reasonIcon}>
            <MdOutlineMiscellaneousServices />
          </div>

          <h3 className={styles.reasonTitle}>Najnowsze technologie</h3>
          <p className={styles.reasonDescription}>
            Stosujemy najnowsze technologie i innowacyjne rozwiązania, aby
            zapewnić naszym klientom najwyższy poziom bezpieczeństwa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
