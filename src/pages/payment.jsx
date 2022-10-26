import React from 'react';
import payment from "../assets/images/background/Payment.jpg";
import '../assets/css/payment.css'
const Payment = () => {
    return (
        <div className='payment'>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <span className='payment-content'>Bạn chưa thanh toán dịch vụ, xin mời thanh toán để tận hưởng tốt nhất </span>
                <div className="btn-service">
                    <button type="button" className="btn btn-lg btn-outline-primary">THANH TOÁN NGAY </button>
                </div>
                <img  src={payment} alt="anh chuyen nha" />

            </div>
        </div>
    );
};

export default Payment;