import React from "react";
import styles from "./Header.module.css";
import { ImPhone } from "react-icons/im";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a href="#home">Home</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#about">About</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#services">Services</a>
        </li>
        <li>
          <a className={styles.callMe} href="tel:713922724">
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
