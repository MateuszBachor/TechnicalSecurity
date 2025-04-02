import { animateScroll as scroll } from "react-scroll";
import styles from "./Pages.module.css";

const ContactPage = () => {
  scroll.scrollToTop();
  return <div className={styles.contactPage}></div>;
};
export default ContactPage;
