import React from "react";
import "./../App.css";
import { scroller } from "react-scroll";
import Banner from "./../components/Banner/Banner";
import OurOffer from "./../components/OurOffer/OurOffer";
import TrustedUs from "./../components/TrustedUs/TrustedUs";
import Opinion from "./../components/Opinion.jsx/Opinion";
import Slogan from "./../components/Slogan/Slogan";
import MapComponent from "./../components/MapComponent/MapComponent";
import AboutUs from "./../components/AboutUs/AboutUs";
import { animateScroll as scroll } from "react-scroll";

const HomePage = () => {
  scroll.scrollToTop();

  const scrollToElem2 = () => {
    scroller.scrollTo("targetElem", {
      duration: 1200,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -85,
    });
  };
  const scrollToElem1 = () => {
    scroller.scrollTo("targetElem2", {
      duration: 1200,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -30,
    });
  };

  return (
    <div className="App">
      <Banner click={scrollToElem2} />
      <AboutUs Scroll={scrollToElem1} />
      <div id="targetElem"></div>
      <OurOffer />
      <MapComponent />
      <Slogan />
      <div id="targetElem2"></div>
      <Opinion />
      <TrustedUs />
    </div>
  );
};
export default HomePage;
