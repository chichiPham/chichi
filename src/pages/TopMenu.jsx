import { Button } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const TopMenu = () => {
  return (
    <>
    
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Relocation service</h5>
      <nav className="my-2 my-md-0 mr-md-3">

        <NavLink to={"/"}>
          <Button> Home </Button>
        </NavLink>

        <NavLink to={"/register"}>
          <Button> Book Services </Button>
        </NavLink>

        <NavLink to={'/payment'} >
          <Button>  Payment </Button>
        </NavLink>
        <NavLink to={'/service'}>
          <Button>  service </Button>
        </NavLink>

        <NavLink to={"/sign-in"}>
          <Button> Sign in </Button>
        </NavLink>

      </nav>
     
    </div> 
    <Outlet/>
    </>
  );
};

export default TopMenu;
