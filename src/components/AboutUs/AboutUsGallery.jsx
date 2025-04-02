import React, { useState } from "react";
import styles from "./AboutUsGallery.module.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import AboutUsImgNr7 from "./AboutUsImages/AboutUsImgNr7.webp";
import AboutUsImgNr6 from "./AboutUsImages/AboutUsImgNr6.webp";
import AboutUsImgNr4 from "./AboutUsImages/AboutUsImgNr4.webp";
import AboutUsImgNr3 from "./AboutUsImages/AboutUsImgNr3.webp";
import AboutUsImgNr2 from "./AboutUsImages/AboutUsImgNr2.webp";
import AboutUsImgNr1 from "./AboutUsImages/AboutUsImgNr1.webp";

const ArrayAboutUsGallery = [
  AboutUsImgNr1,
  AboutUsImgNr2,
  AboutUsImgNr3,
  AboutUsImgNr4,
  AboutUsImgNr6,
  AboutUsImgNr7,
];

const AboutUsGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const closeWindow = () => {
    setIsOpen(false);
  };
  const nextImg = () => {
    if (photoIndex === 5) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };
  const prevImg = () => {
    if (photoIndex === 0) {
      setPhotoIndex(5);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  return (
    <>
      <div className={styles.aboutUsGallery}>
        <span className={styles.aboutUsGalleryTitle}>Jak to się zaczeło?</span>
        <div className={styles.galleryCards}>
          {ArrayAboutUsGallery.map((img, index) => {
            return (
              <img
                className={styles.galleryCard}
                src={img}
                key={index}
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}
              ></img>
            );
          })}
        </div>
      </div>
      {isOpen ? (
        <ModalWindow
          image={ArrayAboutUsGallery[photoIndex]}
          closeClick={closeWindow}
          leftArrow={prevImg}
          rightArrow={nextImg}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default AboutUsGallery;

const ModalWindow = ({ image, closeClick, leftArrow, rightArrow }) => {
  return (
    <>
      <div
        className={styles.modalWindowContainer}
        id="modalWindowContainer"
        onClick={(e) => {
          if (e.target.id.includes("modalWindowContainer")) {
            closeClick();
          }
        }}
      >
        <img className={styles.modalImg} src={image} alt="" />
        <span className={styles.btnCloseModal} onClick={closeClick}>
          &times;
        </span>
        <span onClick={leftArrow} className={styles.prevImgBtn}>
          <BsArrowLeftCircle />
        </span>
        <span onClick={rightArrow} className={styles.nextImgBtn}>
          <BsArrowRightCircle />
        </span>
      </div>
    </>
  );
};
