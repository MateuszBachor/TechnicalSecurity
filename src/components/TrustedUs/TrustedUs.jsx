import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import styles from "./TrustedUs.module.css";

const TrustedUs = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1200,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    initialSlide: 2,
    // fade: true,
    // variableWidth: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          speed: 800,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          speed: 800,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          speed: 800,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className={styles.trustedUs}>
      <h2>Zaufali nam</h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://www.imsec.pl/images/design/logo.png"
            alt=""
            style={{
              width: "200px",
              height: "100px",
              margin: "auto",
            }}
          />
        </div>
        <div>
          <img
            src="https://lazienkionline.pl/hpeciai/7cfaa9f9a1f4238f6b616a7e00ffd485/pol_pl_Zestaw-2w1-TECE-stelaz-podtynkowy-do-WC-mata-SSM006-1926_6.jpg"
            alt=""
            style={{ width: "200px", height: "100px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://lazienkionline.pl/hpeciai/7cfaa9f9a1f4238f6b616a7e00ffd485/pol_pl_Zestaw-2w1-TECE-stelaz-podtynkowy-do-WC-mata-SSM006-1926_6.jpg"
            alt=""
            style={{ width: "200px", height: "100px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://lazienkionline.pl/hpeciai/7cfaa9f9a1f4238f6b616a7e00ffd485/pol_pl_Zestaw-2w1-TECE-stelaz-podtynkowy-do-WC-mata-SSM006-1926_6.jpg"
            alt=""
            style={{ width: "200px", height: "100px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://lazienkionline.pl/hpeciai/7cfaa9f9a1f4238f6b616a7e00ffd485/pol_pl_Zestaw-2w1-TECE-stelaz-podtynkowy-do-WC-mata-SSM006-1926_6.jpg"
            alt=""
            style={{ width: "200px", height: "100px", margin: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default TrustedUs;
