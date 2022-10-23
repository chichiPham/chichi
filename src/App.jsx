import React from "react";
import TopMenu from "./TopMenu.jsx";
import Header from "./Header.jsx";
import PricingBox from "../src/pricing/PricingBox";
import Footer from "./Footer.jsx";
import "../src/pricing/pricing.css";

const App = () => {
  return (
    <>
      <TopMenu />
      <Header
        title="Bạn muốn chuyển nhà?"
        description="Không còn đau đầu suy nghĩ nữa. Hãy để chúng tôi đồng hành cùng bạn để quá trình chuyển nhà trở nên đơn giản hơn bao giờ hết."
      />

      <div className="container">
        <PricingBox />
        <Footer />
      </div>
    </>
  );
};

export default App;
