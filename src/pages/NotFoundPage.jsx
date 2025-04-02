import styles from "./Pages.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFoundTitle}>Upsss... Nie znaleziono strony</h1>
    </div>
  );
};

export default NotFoundPage;
