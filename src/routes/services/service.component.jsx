import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import orderApi from "../../api/OderApi";
import SuggestedApartment from "../../components/modules/suggested-apartment.component";
import SuggestedMovingService from "../../components/modules/suggested-moving-service.component";
import ServiceDataTable from "../../components/service-data-table/service-data-table.component";
import UserProflie from "../../components/userProfile/UserProfile";
import Payment from "../../pages/payment";
import {
    setOrderCurrentCity, setOrderDistance,
    setOrderId,
    setOrderIsHasApartmentAlready,
    setOrderMovingDate,
    setOrderNewCity, setOrderPaymentStatus, setOrderPlan, setOrderStatus
} from "../../store/order/orderSlice";


const Service = () => {
    const logInResult = useSelector(state => state.logInUser.userInfo)
    const order = useSelector(state => state.order)

    const paymentStatus = useSelector(state => state.order.paymentStatus)

    const dispatch = useDispatch();

    async function fetchOrderResponse() {
        const orderResponse = await orderApi.getOrderInfo(logInResult.id);
        const {
            id, currentCity,
            newCity, movingDate, isHasApartmentAlready,
            distance, payment_status, status, plan
        } = orderResponse
        dispatch(setOrderId(id))
        dispatch(setOrderPlan(plan.id))
        dispatch(setOrderCurrentCity(currentCity))
        dispatch(setOrderNewCity(newCity))
        dispatch(setOrderMovingDate(movingDate))
        dispatch(setOrderIsHasApartmentAlready(isHasApartmentAlready))
        dispatch(setOrderDistance(distance))
        dispatch(setOrderPaymentStatus(payment_status))
        dispatch(setOrderStatus(status))
    }

    useEffect(() => {
        fetchOrderResponse();
    }, [])
    // const orderResponse = orderApi.getOrderInfo(logInResult.id);


    return (
        <>
            {paymentStatus === 1 ?
                <>
                    <UserProflie/>
                    {/*<DataTable />*/}
                    <ServiceDataTable />
                    <SuggestedApartment/>
                    <SuggestedMovingService/>
                </>
                :
                <Payment/>
            }
        </>
    )

    // if (paymentStatus === "1") {
    //
    //     return (
    //         <>  <UserProflie/>
    //             <DataTable/>
    //             <SuggestedApartment/>
    //             <SuggestedMovingService/>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //         </>
    //     )
    // }

}

export default Service;