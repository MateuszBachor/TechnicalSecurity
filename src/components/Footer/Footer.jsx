import React from "react";
import styles from "./Footer.module.css";
import MyImage from "./EliteImg.webp";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.infoFlex}>
          <h4 className={styles.infoTitle}>O Firmie</h4>
          <span>888 Technical Security Sp.z.o.o.</span>
          <span>Strzelin ul Jana Pawła II 12</span>
          <span>57-100 Strzelin</span>
        </div>
        <div className={styles.infoFlex}>
          <h4 className={styles.infoTitle}>Informacje</h4>
          <span>NIP 914 157 42 16</span>
          <span>REGON 522538037</span>
          <span>KRS 0000981499</span>
        </div>
        <div className={styles.infoFlex}>
          <img
            loading="lazy"
            src={MyImage}
            alt=""
            className={styles.eliteImg}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
