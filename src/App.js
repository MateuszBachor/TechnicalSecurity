import React from "react";
// import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import OurOffer from "./components/OurOffer/OurOffer";
import TrustedUs from "./components/TrustedUs/TrustedUs";
import Footer from "./components/Footer/Footer";
import Opinion from "./components/Opinion.jsx/Opinion";
import Slogan from "./components/Slogan/Slogan";
import MapComponent from "./components/MapComponent/MapComponent";
import WhyUs from "./components/WhyUs/WhyUs";
import WhyUs2 from "./components/WhyUs2/WhyUs2";
import ContactForm from "./components/Footer/ContactForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <WhyUs />
      <OurOffer />
      <WhyUs2 />
      <MapComponent />
      <Slogan />
      <Opinion />
      <TrustedUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
