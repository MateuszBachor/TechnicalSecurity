import OfferTiles from "../components/OfferTiles/OfferTiles";
import SecurityOffer from "../components/SecurityOffer/SecurityOffer";
import ServiceOffer from "../components/ServiceOffer/ServiceOffer";
import styles from "./Pages.module.css";
import { animateScroll as scroll } from "react-scroll";

const SecurityPage = () => {
  scroll.scrollToTop();
  return (
    <div className={styles.OfferPage}>
      {/* <div
        className={styles.offerBanner}
        style={{ backgroundImage: `url(${ServiceOfferImg})` }}
      ></div> */}
      <OfferTiles />
      <SecurityOffer />
    </div>
  );
};
export default SecurityPage;
