import React from "react";
import styles from "./Header.module.css";
import logo from "./888logo2.webp";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import MobileMenu from "./MobileNav";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img
            src={logo}
            alt=""
            style={{ width: "100%", height: "9vh" }}
            onClick={() => {
              scroll.scrollToTop();
            }}
          />
        </NavLink>
      </div>
      {isMobile ? <MobileMenu /> : <Nav />}
    </header>
  );
};
export default Header;
