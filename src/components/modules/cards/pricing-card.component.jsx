import React from 'react';
import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

const PricingCard = (props) => {
    const { name, price, buttonText, content } = props.pricingData
    const _onClick = () => {
        props.click();
    }

    return (
        <div>
            <Card className="mb-4">
                <div className="card-body px-4 pb-4 pt-3 text-center">
                    <h3 className="display-4 my-4 font-weight-bold text-info">
                        {name}
                    </h3>
                    <div className="bg-neutral-info p-3 rounded mb-4">
                        <h3 className="display-2 font-weight-bold">
                            {price}
                        </h3>

                    </div>
                    <ul className="list-unstyled text-lg-left mb-4 font-weight-bold font-size-sm">
                        {content.map((item, index) =>
                            <li id={index} className="px-4 py-2">
                                {/* <FontAwesomeIcon  icon="fa-regular fa-circle-check" className="text-success mr-2" /> */}
                                {item}
                            </li>
                        )}
                    </ul>
                    <NavLink to={"/register"}>
                        <Button
                            size="large"
                            variant="outlined"
                            color="secondary"
                            onClick={_onClick}
                        >
                            {buttonText}
                        </Button>
                    </NavLink>

                </div>
            </Card>
        </div>
    );
};

export default PricingCard;