import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { ImPhone } from "react-icons/im";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li
          className={styles.navbarItem}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          className={styles.navbarItem}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <NavLink to="/Oferta/Serwis">Usługi</NavLink>
        </li>
        <li
          className={styles.navbarItem}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <NavLink to="/O-firmie">O firmie</NavLink>
        </li>
        <li
          className={styles.navbarItem}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <NavLink to="/Kontakt">Kontakt</NavLink>
        </li>
        <li>
          <a className={styles.callMe} href="tel:+48713922724">
            <span style={{ color: "white" }}>
              <ImPhone />
            </span>
            <span
              style={{ marginLeft: "7px", color: "white", fontSize: "1em" }}
            >
              71 39 22 724
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
