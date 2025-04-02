import OfferTiles from "../components/OfferTiles/OfferTiles";
import MonitoringOffer from "../components/MonitoringOffer/MonitoringOffer";
import styles from "./Pages.module.css";
import { animateScroll as scroll } from "react-scroll";

const MonitoringPage = () => {
  scroll.scrollToTop();
  return (
    <div className={styles.OfferPage}>
      {/* <div
        className={styles.offerBanner}
        style={{ backgroundImage: `url(${ServiceOfferImg})` }}
      ></div> */}
      <OfferTiles />
      <MonitoringOffer />
    </div>
  );
};
export default MonitoringPage;
