import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <span className={styles.bannerTitle}>
          Sprzedam skode Octavie I rok 2001 bezwypadkowa z silnikiem 1.6 mpi
          101km - igła w chuj. Nie czekaj, kup teraz!
        </span>
      </div>
    </div>
  );
};

export default Banner;
