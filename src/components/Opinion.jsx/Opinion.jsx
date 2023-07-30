import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from "./Opinion.module.css";
import CardOpinion from "./CardOpinion.jsx";
import ClientOpinion from "./ClientOpinion";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#180a41", right: "1.3%" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#180a41",
        left: "-1%",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}
const Opinion = () => {
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 1200,
    centerMode: true,
    centerPadding: "1px",
    initialSlide: 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          speed: 800,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          speed: 800,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          speed: 800,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={styles.opinion}>
      <h2>Opinie</h2>
      <Slider {...settings}>
        {ClientOpinion.map((e) => {
          console.log(e);
          return (
            <div>
              <CardOpinion Object={e} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Opinion;
