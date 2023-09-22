import React from "react";
import styles from "./WhyUs2.module.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { PiHandshakeBold } from "react-icons/pi";

const WhyUs2 = () => {
  return (
    <section className={styles.whyUs}>
      <div className={styles.imgContainer}></div>
      <div className={styles.reasonList}>
        <div className={styles.reason}>
          <div className={styles.reasonIcon}>
            <FaMapMarkedAlt />
          </div>
          <span>
            Działamy lokalnie w promieniu 50km od: Wrocławia, Strzelina, Sobótki
            i Środy Śląskiej
          </span>
        </div>
        <div className={styles.reason}>
          <div className={styles.reasonIcon}>
            <MdSecurity />
          </div>
          <span>
            Usługi dostosowujemy do indywidualnych potrzeb każdego klienta
          </span>
        </div>
        <div className={styles.reason}>
          <div className={styles.reasonIcon}>
            <PiHandshakeBold />
          </div>
          <span>Zapewniamy bezpieczeństwo i wsparcie techniczne</span>
        </div>
      </div>
    </section>
  );
};
export default WhyUs2;
