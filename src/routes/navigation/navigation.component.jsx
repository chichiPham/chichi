import {Fragment} from "react";
import {NavLink, Outlet} from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import * as React from "react";

const Navigation = () => {
    return (
        <>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <NavLink to={""}>
                    <Button>
                        Home
                    </Button>
                </NavLink>
                <NavLink to={"/register"}>
                    <Button>
                        Book service
                    </Button>
                </NavLink>
                <NavLink to={"/sign-in"}>
                    <Button>
                        Sign in
                    </Button>
                </NavLink>
                <NavLink to={"/service"}>
                    <Button>
                        Service
                    </Button>
                </NavLink>
            </ButtonGroup>
            <Outlet/>
        </>

    )
}

export default Navigation;