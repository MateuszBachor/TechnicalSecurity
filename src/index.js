import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const ServicePage = lazy(() => import("./pages/ServicePage"));
const MonitoringPage = lazy(() => import("./pages/MonitoringPage"));
const SecurityPage = lazy(() => import("./pages/SecurityPage"));
const CleaningPage = lazy(() => import("./pages/CleaningPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

document.documentElement.lang = "pl";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/Oferta" element={<ServicePage />} />
          <Route path="/Oferta/Serwis" element={<ServicePage />} />
          <Route path="/Oferta/Monitoring" element={<MonitoringPage />} />
          <Route path="/Oferta/Ochrona" element={<SecurityPage />} />
          <Route path="/Oferta/Uslugi-porzadkowe" element={<CleaningPage />} />
          <Route path="/O-firmie" element={<AboutUsPage />} />
          <Route path="/Kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
