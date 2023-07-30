import React, { useState, useEffect } from "react";
import styles from "./OurOffer.module.css";

const OurOffer = () => {
  const offers = [
    {
      title: "Bezpieczeństwo fizyczne",
      description:
        "-Zapewniamy 1\n-proewnić ci 2\n-spokój i reagować \n-na wszelkie zagrożenia.",
      icon: "https://nawakara.com/wp-content/uploads/2022/02/1643951013485.jpg",
    },
    {
      title: "Ochrona danych",
      description:
        "-Zapewniamy 1\n-proewnić ci 2\n-spokój i reagować \n-na wszelkie zagrożenia.",
      icon: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Cybersecurity_Projects.jpg",
    },
    {
      title: "Monitoring 24/7",
      description:
        "-Zapewniamy 1\n-proewnić ci 2\n-spokój i reagować \n-na wszelkie zagrożenia.",
      icon: "https://best-security.pl/wp-content/uploads/2021/11/monitoring.jpg",
    },
    {
      title: "Bezpieczeństwo fizyczne",
      description:
        "-Zapewniamy 1\n-proewnić ci 2\n-spokój i reagować \n-na wszelkie zagrożenia.",
      icon: "https://nawakara.com/wp-content/uploads/2022/02/1643951013485.jpg",
    },
    {
      title: "Sprzątnie",
      description:
        "-Zapewniamy 1\n-proewnić ci 2\n-spokój i reagować \n-na wszelkie zagrożenia.",
      icon: "https://oto-mistrz.pl/wp-content/uploads/2022/07/cs_blog_header.jpg",
    },
    {
      title: "Serwis",
      description:
        "-Zapewniamy 1\n-proewnić ci 2\n-spokój i reagować \n-na wszelkie zagrożenia.",
      icon: "https://elektrykdlakazdego.pl/wp-content/uploads/2022/07/bigstock-A-Male-Electrician-Works-In-A-252302767-pavjel-500x352.jpg",
    },
  ];
  const [isCentered, setIsCentered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = document.documentElement;

      if (scrollTop > clientHeight / 1.5) {
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
          <div
            className={styles.offerCard}
            key={index}
            style={{
              backgroundImage: `url(${offer.icon})`,
            }}
          >
            <div className={styles.descriptionContainer} style={{}}>
              <div
                className={`${styles.description} ${
                  isCentered ? styles.centred : ""
                }`}
              >
                {offer.description.split("\n").map((line, index) => (
                  <p key={index} className={styles.text}>
                    {line}
                  </p>
                ))}
                <div className={styles.readMore}>Czytaj więcej...</div>
              </div>
            </div>
            <div className={styles.offerTitle}>
              <h3>{offer.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurOffer;
