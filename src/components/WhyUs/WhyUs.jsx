import React from "react";
import styles from "./WhyUs.module.css";
// import { useState } from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";

const firstReason = {
  translate: "0%",
  description:
    "Jedno hasło, wiele rozwiązań - Indywidualne podejście, twoje unikalne korzyści!",
  title: "Współpraca",
  icon: BsPeopleFill,
};
const secoundReason = {
  translate: "115%",
  description:
    "Zabezpieczenia dostosowujemy do indywidualnej specyfiki obiektu, zgodnie z analizą potencjalnych zagrożeń, potrzeb i wymagań Klienta.",
  title: "Dostosowanie do potrzeb",
  icon: MdOutlineMiscellaneousServices,
};
const primeReason = {
  translate: "235%",

  description: "Wykwalifikowana kadra i licencjonowane załogi interwencyjne",
  title: "Doświadczenie",
  icon: BiSolidTimeFive,
};
const reasonList = [firstReason, secoundReason, primeReason];

const WhyUs = ({ ScrollClick }) => {
  return (
    <>
      <section className={styles.whyUs}>
        <div className={styles.reasons}>
          {reasonList.map((reason, index) => {
            return (
              <div className={styles.reason} key={index}>
                <div className={styles.reasonIcon} onClick={ScrollClick}>
                  <reason.icon />
                </div>
                <span className={styles.reasonTitle}>{reason.title}</span>
                <div className={styles.reasonDescription}>
                  <div className={styles.reasonDescriptionText}>
                    {reason.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WhyUs;
