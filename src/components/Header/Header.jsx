import React from "react";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 568);
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
        <img
          src="https://ochrona888.com.pl/wp-content/uploads/2022/10/cropped-888-logo-01.png"
          alt=""
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      {isMobile ? <MobileMenu /> : <Nav />}
    </header>
  );
};
export default Header;
