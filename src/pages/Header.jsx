import React from "react";
import anh1 from "../assets/images/HIKKOSHI01.png";
import "../assets/css/header.css";

const Header = (props) => {
  const { title, description } = props;
  return (
    <>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <img style={{ width: '929px', marginLeft: '-131px', marginTop: '-64px'}} src={anh1} alt="anh chuyen nha" />
        
        <div className="btn-service">
          <button type="button" className="btn btn-lg btn-block btn-outline-primary csize cborder">TÔI CHƯA CHỌN ĐƯỢC NHÀ</button>
          <button type="button" className="btn btn-lg btn-block btn-outline-primary cborder ccolor">TÔI ĐÃ CHỌN ĐƯỢC NHÀ</button>
        </div>
        <div className="title-content">
          <h1 className="display-4">{title}</h1>
          <p className="lead">{description}</p>
        </div>
      </div>
    </>
    
  );
};

export default Header;
