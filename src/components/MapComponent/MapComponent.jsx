import DolnySlask from "./DolnySlask.png";
import styles from "./Map.module.css";

const MapComponent = () => {
  return (
    <section
      style={{
        boxShadow: `1px -1px 20px rgba(0, 0, 0, 0.12),
    -13px 0px 13px rgba(0, 0, 0, 0.14)`,
        paddingBottom: "2%",
        paddingTop: "2%",
      }}
    >
      {/* <h2 style={{ margin: "0" }}>Wszędzie chwytliwe slogany!</h2> */}
      <div className={styles.mapContainer}>
        <div className={styles.mapImg}>
          <img src={DolnySlask} alt="" />
        </div>
        <div className={styles.mapDescription}>
          Ochronimy Twoją dupę na terenie Sobótki, Środy Śląskiej i Strzelina!
          Bla bla bla ten tekst będzie pewnie dłuuuuuższy, a może nawet jeszcze
          trochę dłuższy!!! Ps: Lepiej sprawdź położenie tych miast, nanosiłem
          je na oko xd
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
