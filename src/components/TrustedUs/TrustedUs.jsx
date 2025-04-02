import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import FUNKE from "./FUNKE.png";
import INCO from "./INCO.png";
import MPC from "./mpcWebp.webp";
import OSINSKI from "./osinskiWebp.webp";
import GBS from "./GBS.webp";
import STRZELIN from "./strzelinWebp.webp";
import PALEF from "./palefWebp.webp";
import SKSM from "./SKSM.webp";
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
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          speed: 800,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          speed: 800,
          slidesToScroll: 1,
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
      <h3 style={{ marginBottom: "50px", marginTop: "15vh" }}>Zaufali nam</h3>
      <Slider {...settings}>
        <div>
          <img
            src={FUNKE}
            alt=""
            style={{
              height: "60px",
              margin: "auto",
            }}
          />
        </div>
        <div>
          <img
            src={SKSM}
            alt=""
            style={{ width: "150px", height: "70px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src={PALEF}
            alt=""
            style={{ width: "150px", height: "50px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src={MPC}
            alt=""
            style={{ width: "100px", height: "50px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src={INCO}
            alt=""
            style={{ width: "150px", height: "50px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src={OSINSKI}
            alt=""
            style={{ width: "150px", height: "50px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src={GBS}
            alt=""
            style={{ width: "200px", height: "50px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src={STRZELIN}
            alt=""
            style={{ height: "50px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://lazienkionline.pl/hpeciai/7cfaa9f9a1f4238f6b616a7e00ffd485/pol_pl_Zestaw-2w1-TECE-stelaz-podtynkowy-do-WC-mata-SSM006-1926_6.jpg"
            alt=""
            style={{ width: "150px", height: "50px", margin: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default TrustedUs;
