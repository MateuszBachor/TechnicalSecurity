import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MobileNav.module.css";
import { Divide as Hamburger } from "hamburger-react";
import { ImPhone } from "react-icons/im";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={styles.hamburger}
        onClick={handleClick}
        style={{ marginRight: "8px" }}
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ""}`}>
        <nav className={`${styles.menuItems} ${isOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/O-firmie" onClick={() => setIsOpen(false)}>
                O firmie
              </NavLink>
            </li>
            <li>
              <NavLink to="/Oferta/Serwis" onClick={() => setIsOpen(false)}>
                Zabezpieczenia
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Oferta/Uslugi-porzadkowe"}
                onClick={() => setIsOpen(false)}
              >
                Usługi porządkowe
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Oferta/Ochrona"} onClick={() => setIsOpen(false)}>
                Ochrona
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Oferta/Monitoring"}
                onClick={() => setIsOpen(false)}
              >
                Monitoring
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Kontakt"} onClick={() => setIsOpen(false)}>
                Kontakt
              </NavLink>
            </li>
            <li>
              <a
                className={styles.callMe}
                href="tel:+48713922724"
                onClick={() => setIsOpen(false)}
              >
                <span style={{ color: "white" }}>
                  <ImPhone />
                </span>
                <span
                  style={{
                    marginLeft: "7px",
                    color: "white",
                    fontSize: "1em",
                  }}
                >
                  71 39 22 724
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
