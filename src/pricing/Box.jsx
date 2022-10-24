import React from "react";
import {BsCheckCircle} from "react-icons/bs";
import { IoLogoYen } from "react-icons/io"

const Box = (props) => {
  const { title, btnClass, btnTitle, price, feature } = props;
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          <IoLogoYen/>{price} <small className="text-muted"></small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4 service-content">
          {feature &&
            feature.map((data, index) => {
              
              return <li key={index}><BsCheckCircle/>&nbsp;&nbsp;{data}</li>;
              // return <li key={index}>{data}</li>;
            })}
        </ul>
        <button type="button" className={`btn btn-lg btn-block ${btnClass}`}>
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

export default Box;
