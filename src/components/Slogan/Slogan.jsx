import styles from "./Slogan.module.css";

const Slogan = () => {
  return (
    <div className={styles.sloganContainer}>
      <div className={styles.sloganContent}>
        Bezpieczeństwo to nasza misja <b></b> Technical Security zapewnia Ci
        spokojny sen!
      </div>
    </div>
  );
};

export default Slogan;
