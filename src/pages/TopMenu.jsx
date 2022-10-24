import { Button } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/logoHIKKOSHI.png"

const TopMenu = () => {
  return (
    <>
    
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <a href="/"><img style={{width: '30%', cursor: 'pointer', marginLeft: '100px'}}  src={logo} alt="Relocation service" /></a>
      </h5>
      
      <nav className="my-2 my-md-0 mr-md-3">

        <NavLink to={"/"}>
          <Button> Home </Button>
        </NavLink>

        <NavLink to={"/register"}>
          <Button> Book Services </Button>
        </NavLink>

        <NavLink >
          <Button>  Contact </Button>
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
