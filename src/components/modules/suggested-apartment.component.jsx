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
            // area code: 13   đang error
            const areaCode=13
            // city code: 13102   đang error
            const cityCode=13102
            const response = await getApartmentDataByCityCode(cityCode)
            console.log( 'data13',response.data );   
            setApartmentData(response.data) 
        } catch (error) {
            alert(error)
        }
    }
    useEffect(()=>{
        getApartmentData()
    },[])

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