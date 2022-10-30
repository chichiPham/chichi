import {Button} from "@mui/material";
import React from "react";
import { NavLink, Outlet, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import logo from "../assets/images/logoHIKKOSHI.png";
import "../assets/css/header.css";
import storage from "../storage/storage";

const TopMenu = () => {
       const navigate=useNavigate()
    const token = useSelector(state => state.logInUser.token)
    const _onClick =()=>{
        storage.removeToken();
        storage.removeUserInfo();
        navigate("/sign-in");
    }
    return (
        <>

            <div
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">
                    <a href="/"><img style={{width: '30%', cursor: 'pointer', marginLeft: '100px'}}  src={logo} alt="Relocation service" /></a>
                </h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    
                    {/* <NavLink to={"/"}>
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
                    </NavLink> */}

                    <NavLink to={"/"}>
                        <Button className="btn-menu"> Home </Button>
                    </NavLink>

                    {
                        !token &&
                        <NavLink to={"/register"}>
                            <Button  className="btn-menu"> Book Services </Button>
                        </NavLink>
                    }
                    
                    {
                        token &&
                        <NavLink to={'/service'}>
                            <Button  className="btn-menu"> Service </Button>
                        </NavLink>
                    }

                    {
                        !token &&
                    <NavLink to={"/sign-in"}>
                        <Button  className="btn-menu"> Sign in </Button>
                    </NavLink>
                    }
                    {
                        token &&
                        
                        <Button onClick={_onClick}  className="btn-menu"> Logout </Button>
                     
                    }
                    
                </nav>

            </div>
            <Outlet/>
        </>
    );
};

export default TopMenu;
