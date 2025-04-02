import React, { useState, useRef } from "react";
import styles from "./Footer.module.css";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail, HiOutlineOfficeBuilding } from "react-icons/hi";
import Hotline from "./Hotline.webp";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    title: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const notifySucces = () => toast("Wiadomość wysłana");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.user_email.trim()) {
      validationErrors.user_email = "Pole jest puste";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      validationErrors.user_email = "Niepoprawny email ";
    }
    if (!formData.user_name.trim()) {
      validationErrors.user_name = "Pole jest puste";
    }
    if (!formData.title.trim()) {
      validationErrors.title = "Pole jest puste";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Pole jest puste";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          "contact_service",
          "contact_form",
          form.current,
          ""
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            notifySucces();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        ""
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={styles.contactContainer}>
        <div className={styles.contact}>
          <h3
            style={{
              fontWeight: "normal",
            }}
          >
            Kontakt
          </h3>
          <div className={styles.office}>
            <div className={styles.contactIcon}>
              <HiOutlineOfficeBuilding />
            </div>
            Biuro czynne pn-pt od 8:00 do 16:00
          </div>
          <span>
            <a href="tel:+48713924313">
              <div className={styles.contactIcon}>
                <BsTelephone />
              </div>
              71 392 43 13
            </a>
          </span>

          <span>
            <a href="mailto:kontakt@ochrona888.com.pl">
              <div className={styles.contactIcon}>
                <HiOutlineMail />
              </div>
              kontakt@ochrona888.com.pl
            </a>
          </span>
          <span style={{ display: "flex" }}>
            <a
              href="https://www.google.com/maps/place/Agencja+Ochrony+Os%C3%B3b+i+Mienia+888/@50.783048,17.0691951,17z/data=!3m1!4b1!4m6!3m5!1s0x470fd4bfc7486d3d:0xac5fd095e2d394cd!8m2!3d50.783048!4d17.07177!16s%2Fg%2F1td7xtm5?entry=ttu"
              target="_blank"
            >
              <div className={styles.contactIcon}>
                <FiMapPin />
              </div>
              Jana Pawła II 12<br></br> 57-100 Strzelin
            </a>
          </span>
          <a href="tel:+48713923187" style={{ color: "white" }}>
            <span className={styles.hotlineImgDiv}>
              <img
                loading="lazy"
                src={Hotline}
                alt=""
                className={styles.hotlineImg}
              />
              71 392 31 87 <br />
              Centrum Monitorowania Alarmów
            </span>
          </a>
        </div>
        <div className={styles.contactForm}>
          <h3
            style={{
              textAlign: "left",
              marginLeft: "25px",
              fontWeight: "normal",
            }}
          >
            Formularz kontaktowy
          </h3>
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              onChange={handleChange}
            />
            {errors.user_email && (
              <span style={{ fontSize: "1em", color: "white" }}>
                {errors.user_email}
              </span>
            )}
            <input
              type="text"
              placeholder="Imię i nazwisko"
              name="user_name"
              onChange={handleChange}
            />
            {errors.user_name && (
              <span style={{ fontSize: "1em", color: "white" }}>
                {errors.user_name}
              </span>
            )}
            <input
              type="text"
              placeholder="Temat"
              name="title"
              onChange={handleChange}
            />
            {errors.title && (
              <span style={{ fontSize: "1em", color: "white" }}>
                {errors.title}
              </span>
            )}
            <textarea
              type="text"
              placeholder="Wiadomość"
              name="message"
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <span style={{ fontSize: "1em", color: "white" }}>
                {errors.message}
              </span>
            )}
            <span>
              <button type="submit" value="Send">
                Wyślij
              </button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
