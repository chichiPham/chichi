import React from "react";
import Box from "./Box.jsx";

const PricingBox = () => {
  const featureBox1 = [
    "10 users included",
    "2 GB of storage",
    "Email support",
    "Help center access"
  ];
  const featureBox2 = [
    "20 users included",
    "10 GB of storage",
    "Priority email support",
    "Help center access"
  ];
  const featureBox3 = [
    "30 users included",
    "15 GB of storage",
    "Phone and email support",
    "Help center access"
  ];
  return (
    <div className="card-deck mb-3 text-center">
      <Box
        price="0"
        title="Free"
        btnClass="btn-outline-primary"
        btnTitle="Sign up for free"
        feature={featureBox1}
      />
      <Box
        feature={featureBox2}
        price="15"
        title="Pro"
        btnClass="btn-primary"
        btnTitle="Get started"
      />
      <Box
        feature={featureBox3}
        price="29"
        title="Enterprise"
        btnClass="btn-primary"
        btnTitle="Contact us"
      />
    </div>
  );
};

export default PricingBox;
