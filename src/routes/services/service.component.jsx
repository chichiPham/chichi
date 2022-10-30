import React from "react";
import DataTable from "../../components/table/data-table.component";
import SuggestedApartment from "../../components/modules/suggested-apartment.component";
import SuggestedMovingService from "../../components/modules/suggested-moving-service.component";
import Payment from "../../pages/payment";
import { useSelector } from "react-redux";
import UserProflie from "../../components/userProfile/UserProfile";


const Service = () => {

    const paymentStatus = useSelector(state=>state.order.paymentStatus)
 
    if (paymentStatus === 1) {

        return (
            <>  <UserProflie />
                <DataTable />
                <SuggestedApartment />
                <SuggestedMovingService />
            </>
        )
    }
    return (
        <>
            <Payment />
        </>
    )
}

export default Service;