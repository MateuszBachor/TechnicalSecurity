import React, { useState, useEffect } from "react";
import styles from "./OurOffer.module.css";
import img from "./SerwisImg.png";

const OurOffer = () => {
  const offers = [
    {
      title: "Bezpieczeństwo fizyczne",
      description:
        "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
      backgroundImage: img,
    },
    {
      title: "Ochrona danych",
      description:
        "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
      backgroundImage: img,
    },
    {
      title: "Monitoring 24/7",

      description:
        "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
      backgroundImage: img,
    },
    {
      title: "Bezpieczeństwo fizyczne",
      description:
        "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
      backgroundImage: img,
    },
    {
      title: "Sprzątnie",
      description:
        "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
      backgroundImage: img,
    },
    {
      title: "Serwis",
      description:
        "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów CCTV i wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
      backgroundImage: img,
    },
  ];
  // const offers = [
  //   {
  //     title: "Bezpieczeństwo fizyczne",
  //     description:
  //       "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
  //     backgroundImage: img,
  //   },
  //   {
  //     title: "Ochrona danych",
  //     description:
  //       "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
  //     backgroundImage: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Cybersecurity_Projects.jpg",
  //   },
  //   {
  //     title: "Monitoring 24/7",

  //     description:
  //       "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
  //     backgroundImage: "https://best-security.pl/wp-content/uploads/2021/11/monitoring.jpg",
  //   },
  //   {
  //     title: "Bezpieczeństwo fizyczne",
  //     description:
  //       "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
  //     backgroundImage: "https://nawakara.com/wp-content/uploads/2022/02/1643951013485.jpg",
  //   },
  //   {
  //     title: "Sprzątnie",
  //     description:
  //       "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów telewizji przemysłowej CCTV i  wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
  //     backgroundImage: "https://oto-mistrz.pl/wp-content/uploads/2022/07/cs_blog_header.jpg",
  //   },
  //   {
  //     title: "Serwis",
  //     description:
  //       "- Montaż oraz serwis systemów alarmowych i napadowych\n- Montaż oraz serwis systemów CCTV i wideomonitoringu\n- Montaż oraz serwis instalacji domofonowych i wideodomofonów\n- Pomoc techniczna i  konserwacje\n- Usługi elektryczne",
  //     backgroundImage: "https://elektrykdlakazdego.pl/wp-content/uploads/2022/07/bigstock-A-Male-Electrician-Works-In-A-252302767-pavjel-500x352.jpg",
  //   },
  // ];
  const [isCentered, setIsCentered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = document.documentElement;

      if (scrollTop > clientHeight / 3) {
        setIsCentered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.offerSection}>
      <h2>Sprawdź naszą oferte!</h2>
      <div className={styles.offerCards}>
        {offers.map((offer, index) => (
          <div className={styles.offerCard} key={index}>
            <img src={offer.backgroundImage} alt="" />
          </div>
          // <div
          //   className={styles.offerCard}
          //   key={index}
          //   style={{
          //     backgroundImage: `url(${offer.backgroundImage})`,
          //   }}
          // >
          //   <div className={styles.offerTitle}>
          //     {/* <span>{offer.title}</span> */}
          //   </div>
          //   <div className={styles.descriptionContainer}>
          //     <div
          //       className={`${styles.description} ${
          //         isCentered ? styles.centred : ""
          //       }`}
          //     >
          //       {offer.description.split("\n").map((line, index) => (
          //         <p key={index} className={styles.text}>
          //           {line}
          //         </p>
          //       ))}
          //     </div>
          //   </div>
          //   <div className={styles.readMore}>
          //     <button>Zobacz więcej...</button>
          //   </div>
          // </div>
        ))}
      </div>
    </section>
  );
};

export default OurOffer;
