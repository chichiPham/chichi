import React from "react";
import {Fragment} from "react";
import DataTable from "../../components/table/data-table.component";
import SuggestedApartment from "../../components/modules/suggested-apartment.component";
import SuggestedMovingService from "../../components/modules/suggested-moving-service.component";
import Payment from "../../pages/payment";


const Service = () => {

    const isPay = true

    return (
        <Fragment>
            {isPay &&<Payment/>} 
            <DataTable />
            <SuggestedApartment />
            <SuggestedMovingService />
        </Fragment>
    )
}

export default Service;