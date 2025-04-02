import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./OfferTiles.module.css";
import { MdMiscellaneousServices } from "react-icons/md";
import { LuMonitor, LuShieldCheck } from "react-icons/lu";
import { MdOutlineCleanHands } from "react-icons/md";

const OfferTiles = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState();
  setTimeout(() => {
    setActiveIndex(0);
  }, 100);
  return (
    <div className={styles.offerTilesContainer}>
      <NavLink
        to={"/Oferta/Serwis"}
        className={`${
          location.pathname === "/Oferta/Serwis" ? styles.active : ""
        }
          ${activeIndex === 0 ? styles.animate : ""}`}
      >
        <div className={styles.offerTile}>
          <div className={styles.offerTileIcon}>
            <MdMiscellaneousServices />
          </div>
          <span className={styles.offerTitle}>
            Usługi <br /> Techniczne
          </span>
        </div>
      </NavLink>
      <NavLink
        to={"/Oferta/Monitoring"}
        className={`${
          location.pathname === "/Oferta/Monitoring" ? styles.active : ""
        }
          ${activeIndex === 0 ? styles.animate : ""}`}
      >
        <div className={styles.offerTile}>
          <div className={styles.offerTileIcon}>
            <LuMonitor />
          </div>
          <span className={styles.offerTitle}>Monitoring</span>
        </div>
      </NavLink>
      <NavLink
        to={"/Oferta/Ochrona"}
        className={`${
          location.pathname === "/Oferta/Ochrona" ? styles.active : ""
        }
          ${activeIndex === 0 ? styles.animate : ""}`}
      >
        <div className={styles.offerTile}>
          <div className={styles.offerTileIcon}>
            <LuShieldCheck />
          </div>
          <span className={styles.offerTitle}>Ochrona</span>
        </div>
      </NavLink>
      <NavLink
        to={"/Oferta/Uslugi-porzadkowe"}
        className={`${
          location.pathname === "/Oferta/Uslugi-porzadkowe" ? styles.active : ""
        }
          ${activeIndex === 0 ? styles.animate : ""}`}
      >
        <div className={styles.offerTile}>
          <div className={styles.offerTileIcon}>
            <MdOutlineCleanHands />
          </div>
          <span className={styles.offerTitle}>
            Usługi <br /> Porządkowe
          </span>
        </div>
      </NavLink>
    </div>
  );
};
export default OfferTiles;
