import React from 'react';
import Confirm from "../../assets/images/confirmEmail.png";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
// import "../../assets/css/payment";
const ConfirmEmail = (email) => {
  return (

      <div className='payment'>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <span className='payment-content'> 'We automatically send a request to email for you to verify. Please check your Email' </span>
          <div className="btn-service">
            <button type="button" className="btn btn-lg btn-outline-primary">PAYMENT NOW </button>
          </div>
        
          <NavLink to={"/sign-in"}>
            <Button> Sign in here </Button>
          </NavLink>
        </div>
      </div>



  )
};

export default ConfirmEmail;
