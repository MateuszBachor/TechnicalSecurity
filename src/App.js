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

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <OurOffer />
      <TrustedUs />
      <Slogan />
      <Opinion />
      <Footer />
    </div>
  );
}

export default App;
