import styles from "./Pages.module.css";
import { animateScroll as scroll } from "react-scroll";
import AboutUsGallery from "../components/AboutUs/AboutUsGallery";
import AboutUsDescriptionCard from "../components/AboutUs/AboutUsDescriptionCard";
import AboutUsFeatures from "../components/AboutUs/AboutUsFeatures";

const AboutUsPage = () => {
  scroll.scrollToTop();
  return (
    <div className={styles.AboutUsPage}>
      <AboutUsDescriptionCard />
      <AboutUsGallery />
      <AboutUsFeatures />
    </div>
  );
};
export default AboutUsPage;
