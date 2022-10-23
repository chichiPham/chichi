import { Fragment } from "react";
import {  Container, Grid } from "@mui/material";
import { pricingA, pricingB, pricingC } from "../DataFill/data";
import PricingCard from "../modules/cards/pricing-card.component";
import { NavLink } from "react-router-dom";

export default function PricingTable() {

    const handleClick = ()=>{
        console.log('Clicked');
    }
    
    return (
        <Fragment>

            <div className="py-3 py-xl-5">
                <Container className="py-3 py-xl-5">
                    <div className="text-center mb-4">
                        <h1 className="display-2 text-black mb-3 font-weight-bold">
                            Gói dịch vụ
                        </h1>
                        <p className="font-size-xl mb-4 text-black-50">
                            Có tiền là có tất cả.
                        </p>
                    </div>
                    <Grid container spacing={4} className="d-flex align-items-center">
                        <Grid item xs={12} md={6} lg={4}>
                            <PricingCard pricingData={pricingA} click={handleClick} />
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <PricingCard pricingData={pricingB} click={handleClick}/>
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <PricingCard pricingData={pricingC} click={handleClick}/>
                        </Grid>
                    </Grid>
                </Container>
            </div>

        </Fragment>
    );
}