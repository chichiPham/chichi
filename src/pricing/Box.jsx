import React from "react";
import { BiYen } from "react-icons/bi"
import { BsCheckCircle } from "react-icons/bs";

const Box = (props) => {
  const { title, btnClass, btnTitle, price, feature, handleClickPackage } = props;

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          <BiYen style={{ marginTop: '-8px' }} />{price} <small className="text-muted"></small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4 service-content">
          {feature &&
            feature.map((data, index) => {

              return <li key={index}><BsCheckCircle style={{ color: 'rgb(17 184 56)' }} />&nbsp;&nbsp;{data}</li>;
              // return <li key={index}>{data}</li>;
            })}
        </ul>

      </div>
      <button
        onClick={() => handleClickPackage(title)}
        type="button" className={`btn btn-lg btn-block ${btnClass}`}>
        {btnTitle}
      </button>
    </div>
  );
};

export default Box;
