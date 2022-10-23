import {Fragment} from "react";
import DataTable from "../../components/table/data-table.component";
import SuggestedApartment from "../../components/modules/suggested-apartment.component";
import SuggestedMovingService from "../../components/modules/suggested-moving-service.component";


const Service = () => {
    return (
        <Fragment>
            <DataTable />
            <SuggestedApartment />
            <SuggestedMovingService />
        </Fragment>
    )
}

export default Service;