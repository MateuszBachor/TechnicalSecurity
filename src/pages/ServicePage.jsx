import OfferTiles from "../components/OfferTiles/OfferTiles";
import ServiceOffer from "../components/ServiceOffer/ServiceOffer";
import styles from "./Pages.module.css";
import { animateScroll as scroll } from "react-scroll";

const ServicePage = () => {
  scroll.scrollToTop();
  return (
    <div className={styles.OfferPage}>
      {/* <div
        className={styles.offerBanner}
        style={{ backgroundImage: `url(${ServiceOfferImg})` }}
      ></div> */}
      <OfferTiles />
      <ServiceOffer />
    </div>
  );
};
export default ServicePage;
