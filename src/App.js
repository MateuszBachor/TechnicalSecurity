import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/Footer/ContactForm";
import Loader from "./components/Loader/Loader";

const App = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div style={{ marginTop: "20vh" }}>
            <Loader />
          </div>
        }
      >
        <Outlet />
        <ContactForm />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
