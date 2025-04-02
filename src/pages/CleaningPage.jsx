import OfferTiles from "../components/OfferTiles/OfferTiles";
import CleaningOffer from "../components/CleaningOffer/CleaningOffer";
import styles from "./Pages.module.css";
import { animateScroll as scroll } from "react-scroll";

const CleaningPage = () => {
  scroll.scrollToTop();

  return (
    <div className={styles.OfferPage}>
      <OfferTiles />
      <CleaningOffer />
    </div>
  );
};
export default CleaningPage;
