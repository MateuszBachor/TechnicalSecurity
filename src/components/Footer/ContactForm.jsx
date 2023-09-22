import React from "react";
import styles from "./Footer.module.css";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Hotline from "./Hotline.png";

const ContactForm = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contact}>
        <h4>Kontakt</h4>
        <span>
          <div className={styles.contactIcon}>
            <BsTelephone />
          </div>
          888-123-456
        </span>
        <span>
          <div className={styles.contactIcon}>
            <HiOutlineMail />
          </div>
          kontakt@888technicalsecurity.com
        </span>
        <span>
          <div className={styles.contactIcon}>
            <FiMapPin />
          </div>
          Strzelin Jana Pawła II 12/1
        </span>
        <span style={{ height: "50px", marginTop: "40px", fontSize: "19px" }}>
          <img src={Hotline} alt="" className={styles.hotlineImg} />
          71 234 234 12
        </span>
      </div>
      <div className={styles.contactForm}>
        <h4 style={{ textAlign: "left", marginLeft: "25px" }}>
          Formularz kontaktowy
        </h4>
        <form>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Imię i nazwisko" />
          <textarea placeholder="Wiadomość"></textarea>
          <span>
            <button type="submit">Wyślij</button>
          </span>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
