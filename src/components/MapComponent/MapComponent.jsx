import DolnySlask from "./dolnyslask.webp";
import styles from "./Map.module.css";

const MapComponent = () => {
  return (
    <section
      style={{
        //     boxShadow: `1px -1px 20px rgba(0, 0, 0, 0.12),
        // -13px 0px 13px rgba(0, 0, 0, 0.14)`,
        paddingBottom: "4%",
        paddingTop: "2%",
      }}
    >
      {/* <h2 style={{ margin: "0" }}>Wszędzie chwytliwe slogany!</h2> */}
      <div className={styles.mapContainer}>
        <div className={styles.mapImg}>
          <img src={DolnySlask} alt="" />
        </div>
        <div className={styles.mapDescription}>
          <span className={styles.sloganTitle}>Jesteśmy tu dla Ciebie!</span>{" "}
          <br></br>
          888 Technical Security to lokalna firma działająca na terenie
          województwa Dolnośląskiego. Nasze siedziby znajdują się w Strzelinie,
          Sobótce i Środzie Śląskiej. Nasza kadra to wykwalifikowani
          specjaliści, którzy są przygotowani do działania w każdej sytuacji!
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
