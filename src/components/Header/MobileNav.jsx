import React, { useState } from "react";
import styles from "./MobileNav.module.css";
import { Sling as Hamburger } from "hamburger-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.mobileMenu}`}>
      <div onClick={toggleMenu} style={{ marginRight: "8px" }}>
        <Hamburger />
      </div>

      {isOpen && (
        <nav className={styles.menuItems}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
