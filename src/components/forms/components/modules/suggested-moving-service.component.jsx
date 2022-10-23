import {Fragment} from "react";
import {Grid} from "@mui/material";
import ApartmentCard from "./cards/apartment-card.component";
import MovingServiceCard from "./cards/moving-service-card.component";

const SuggestedMovingService = () => {
    return (
        <Fragment>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <h1>SuggestedMovingService</h1>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <MovingServiceCard />
                </Grid>
                <Grid item xs={8}>
                    <MovingServiceCard />
                </Grid>

            </Grid>

        </Fragment>
    )
}

export default SuggestedMovingService;