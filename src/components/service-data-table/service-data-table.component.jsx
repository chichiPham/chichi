import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import LinearWithValueLabel from "../progress/LinearProgressWithLabel";
import EnhancedTable from "../table/data-table.component";

const ServiceDataTable = () => {
    const order = useSelector(state => state.order);
    console.log("order status value " + order.orderStatus)
    return (
        <>
            {/*<LinearWithValueLabel />*/}
            <EnhancedTable />
        </>
    )
}

export default ServiceDataTable;