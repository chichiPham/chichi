import React from "react";
import { Fragment } from "react";
import { Grid } from "@mui/material";
import MovingServiceCard from "./cards/moving-service-card.component";
import yamatoLogo from '../../assets/images/MovingServiceLogo/YamatoLogo.jpg'
import sagawaLogo from '../../assets/images/MovingServiceLogo/sagawa.png'
import japanPostLogo from '../../assets/images/MovingServiceLogo/JPpost.png'
import { useSelector } from "react-redux";
import { yamatoMovingService,sagawaMovingService,japanPostMovingService } from "../../dataFill/data";

const SuggestedMovingService = () => {

const distance = useSelector(state=>state.order.distance)
const yamatoMovingItem= yamatoMovingService.find((item,index)=> item.distance >= distance)
console.log(yamatoMovingItem);
const sagawaMovingItem= sagawaMovingService.find((item,index)=> item.distance >= distance)
console.log(sagawaMovingItem);
const japanPostMovingItem= japanPostMovingService.find((item,index)=> item.distance >= distance)
console.log(japanPostMovingItem);
    return (
        <Fragment>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <h1>SuggestedMovingService</h1>
            <Grid container spacing={2} columns={24} justifyContent="space-evenly">
                <Grid item xs={8}>
                    <MovingServiceCard
                        logo={yamatoLogo}
                        serviceName={'Yamato'}
                        distance={distance}
                        price={yamatoMovingItem.price}
                    />
                </Grid>
                <Grid item xs={8}>
                    <MovingServiceCard
                        logo={sagawaLogo}
                        serviceName={"Sagawa"}
                        distance={distance}
                        price={sagawaMovingItem.price}
                    />
                </Grid>
                <Grid item xs={8}>
                    <MovingServiceCard
                        logo={japanPostLogo}
                        serviceName={"Japan Post"}
                        distance={distance}
                        price={japanPostMovingItem.price}
                    />
                </Grid>

            </Grid>

        </Fragment>
    )
}

export default SuggestedMovingService;