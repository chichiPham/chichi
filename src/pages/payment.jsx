import React from 'react';
import payment from "../assets/images/background/Payment.jpg";
import '../assets/css/payment.css'
const Payment = () => {
    return (
        <div>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <img  src={payment} alt="anh chuyen nha" />

                <div className="btn-service">
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary csize cborder">THANH TOÁN NGAY ĐỂ TẬN HƯỞNG DỊCH VỤ</button>
                </div>

            </div>
        </div>
    );
};

export default Payment;