import React from "react";
import { useRef } from "react";
import { scroller } from "react-scroll";
import styles from "./Banner.module.css";
import BannerImg from "./BannerImg.webp";
// import BannerMobile from "./BannerMobile.png";
import WhyUs from "./../WhyUs/WhyUs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

const Banner = ({ click }) => {
  const targetRef = useRef(null);
  const scrollToElement = () => {
    scroller.scrollTo("targetElement", {
      duration: 1200,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const handleButtonClick = () => {
    scrollToElement();
  };

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundAttachment: "fixed",
      }}
      ref={targetRef}
    >
      <div className={styles.bannerContent}>
        <div className={styles.titleContainer}>
          <span className={styles.bannerTitle}>
            Twoje spokojne jutro zaczyna się dziś
          </span>
          <div className={styles.bannerSubTitle}>
            <span className={styles.subTitleElemFirst}>
              {" "}
              kompleksowe usługi
            </span>{" "}
            <span className={styles.subTitleIcon}>{/* <FaCircle /> */}•</span>
            <span className={styles.subTitleElemSecound}>
              indywidualne rozwiązania
            </span>
          </div>
          <div className={styles.btnReadmore} onClick={click}>
            Zobacz oferte
            <span className={styles.iconReadmore}>
              <MdKeyboardDoubleArrowRight />
            </span>{" "}
          </div>
        </div>
      </div>
      <div name="targetElement"></div>
      <WhyUs ScrollClick={handleButtonClick} />
    </div>
  );
};

export default Banner;
