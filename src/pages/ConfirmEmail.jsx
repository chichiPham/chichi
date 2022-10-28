import React from 'react';
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import comfirm_email from "../assets/images/background/confirmEmail.png";
import '../assets/css/payment.css'
const Payment = () => {
    return (
        <div className='payment'>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <span className='payment-content'> We automatically sent a request to email for you to verify. Please check your Email </span>
                
                <img style={{ width: '80%' }} src={comfirm_email} alt="confirm eamil" />
                <div className="btn btn-lg btn-outline-primary">
                <NavLink to={"/sign-in"}>
                        <Button > Sign in here </Button>
                </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Payment;
