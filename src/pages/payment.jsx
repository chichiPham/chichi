import React from 'react';
import payment from "../assets/images/background/Payment.jpg";
import '../assets/css/payment.css'
import { useDispatch, useSelector } from 'react-redux';
import { setOrderPaymentStatus } from '../store/order/orderSlice';
import { useNavigate } from 'react-router-dom';
import orderApi from '../api/OderApi';
import storage from '../storage/storage';

const Payment = () => {
    const orderId = useSelector(state => state.order.orderId)
    const dispatch=useDispatch();
    const navigate= useNavigate()
    const _clickPayment=async()=>{
        try {
            const body={
                paymentStatus:1
            }
            const response= await orderApi.payment(orderId,body)
            if (response) {
              
                alert('Thanh toán thành công, xin cảm ơn quý khách !')
                dispatch(setOrderPaymentStatus(1));
                
                navigate('/service')

            }
        } catch (error) {
            alert(error)
        }
       
    }
    return (
        <div className='payment'>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <span className='payment-content'>Bạn chưa thanh toán dịch vụ, xin mời thanh toán để tận hưởng tốt nhất </span>
                <div className="btn-service">
                    <button 
                    onClick={_clickPayment}
                    type="button" className="btn btn-lg btn-outline-primary">THANH TOÁN NGAY </button>
                </div>
                <img  src={payment} alt="anh chuyen nha" />

            </div>
        </div>
    );
};

export default Payment;