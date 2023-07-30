import React from "react";
import styles from "./Opinion.module.css";

const CardOpinion = ({ Object }) => {
  return (
    <div className={styles.opinionCard}>
      <div className={styles.content}>
        <i>{Object.clientOpinion}</i>
      </div>
      <div className={styles.clientSign}>{Object.clientSign}</div>
    </div>
  );
};
export default CardOpinion;
