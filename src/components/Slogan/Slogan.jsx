import styles from "./Slogan.module.css";
import React, { useState, useEffect } from "react";
import sloganImg from "./1-7.webp";

const Slogan = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = sloganImg;
    if (img.complete) {
      setImageLoaded(true);
      setLoading(false);
    } else {
      img.onload = () => {
        setImageLoaded(true);
        setLoading(false);
      };
      img.onerror = () => {
        setLoading(false);
      };
    }
  }, []);
  const backgroundImageStyle = {
    backgroundImage: imageLoaded ? `url(${sloganImg})` : "none",
  };
  return (
    <div className={styles.sloganContainer} style={backgroundImageStyle}>
      <div className={styles.sloganContent}>
        Bezpieczeństwo to nasza misja <b></b> Technical Security zapewnia Ci
        spokojny sen!
      </div>
    </div>
  );
};

export default Slogan;
