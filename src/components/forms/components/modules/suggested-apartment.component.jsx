import {Fragment} from "react";
import {Grid} from "@mui/material";
import ApartmentCard from "./cards/apartment-card.component";

const SuggestedApartment = () => {
    return (
        <Fragment>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <h1>SuggestedApartment</h1>
            <Grid container spacing={2} columns={24}>
                <Grid item xs={8}>
                    <ApartmentCard />
                </Grid>
                <Grid item xs={8}>
                    <ApartmentCard />
                </Grid>
                <Grid item xs={8}>
                    <ApartmentCard />
                </Grid>
            </Grid>

        </Fragment>
    )
}

export default SuggestedApartment;