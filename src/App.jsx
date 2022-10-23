import React from "react";
import TopMenu from "./TopMenu.jsx";
import Header from "./Header.jsx";
import PricingBox from "./PricingBox.jsx";
import Footer from "./Footer.jsx";
import "./pricing.css";

const App = () => {
  return (
    <>
      <TopMenu />
      <Header
        title="Pricing"
        description="Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization."
      />

      <div className="container">
        <PricingBox />
        <Footer />
      </div>
    </>
  );
};

export default App;
