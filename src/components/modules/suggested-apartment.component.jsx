import React from "react";
import { Fragment } from "react";
import { Grid } from "@mui/material";
import ApartmentCard from "./cards/apartment-card.component";
import { useEffect } from "react";
import { useState } from "react";
import { getApartmentDataByCityCode } from "../../api/Service";

const SuggestedApartment = () => {
    const [apartmentData, setApartmentData]=useState('')
    const getApartmentData = async ()=>{
        try {
            const response = await getApartmentDataByCityCode(13)
            console.log( 'data13',response.data );   
            setApartmentData(response.data) 
        } catch (error) {
            alert(error)
        }
    }
    // useEffect(()=>{
    //     getApartmentData()
    // },[])
    console.log({apartmentData});
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