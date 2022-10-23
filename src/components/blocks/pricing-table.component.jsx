import { Fragment } from "react";
import { Card, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import * as React from "react";

export default function PricingTable() {
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
                            <Card className="mb-4">
                                <div className="card-body px-4 pb-4 pt-3 text-center">
                                    <h3 className="display-4 my-4 font-weight-bold text-info">
                                        Tiết kiệm
                                    </h3>
                                    <div className="bg-neutral-info p-3 rounded mb-4">
                                        <span className="display-2 font-weight-bold">
                                            1500 JPY
                                        </span>

                                    </div>
                                    <ul className="list-unstyled text-lg-left mb-4 font-weight-bold font-size-sm">
                                        <li className="px-4 py-2">
                                            <FontAwesomeIcon icon={['far', 'check-circle']} className="text-success mr-2" />

                                            Unlimited Tasks
                                        </li>
                                        <li className="px-4 py-2">
                                            <FontAwesomeIcon icon={['far', 'check-circle']} className="text-success mr-2" />
                                            Unlimited Teams
                                        </li>
                                        <li className="px-4 py-2">
                                            <FontAwesomeIcon icon={['far', 'check-circle']} className="text-success mr-2" />
                                            All Integrations
                                        </li>
                                        <li className="px-4 py-2 text-black-50">
                                            <FontAwesomeIcon icon={['far', 'times-circle']} className="text-danger mr-2" />
                                            Premium support
                                        </li>
                                    </ul>
                                    <NavLink to={"/register"}>
                                        <Button size="large" variant="outlined" color="secondary">
                                            Đăng ký
                                        </Button>
                                    </NavLink>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card className="card-box border-2 border-first mb-4">
                                <div className="card-body px-5 pb-5 pt-4 text-center">
                                    <h3 className="display-4 my-4 font-weight-bold text-first">
                                        Hợp lý
                                    </h3>
                                    <div className="bg-neutral-first p-3 rounded mb-4">
                                        <span className="display-2 font-weight-bold">
                                            2500 JPY
                                        </span>

                                    </div>
                                    <ul className="list-unstyled text-lg-left mb-4 font-weight-bold font-size-sm">
                                        <li className="px-4 py-2">
                                            <FontAwesomeIcon icon={['far', 'check-circle']} className="text-success mr-2" />

                                            Unlimited Tasks
                                        </li>
                                        <li className="px-4 py-2">
                                            <FontAwesomeIcon icon={['far', 'check-circle']} className="text-success mr-2" />
                                            Unlimited Teams
                                        </li>
                                        <li className="px-4 py-2">
                                            <FontAwesomeIcon icon={['far', 'check-circle']} className="text-success mr-2" />
                                            All Integrations
                                        </li>
                                        <li className="px-4 py-2 text-black-50">
                                            <FontAwesomeIcon icon={['far', 'times-circle']} className="text-danger mr-2" />
                                            Premium support
                                        </li>
                                    </ul>
                                    <Button size="large" variant="contained" color="primary">
                                        Chuyển ngay
                                    </Button>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Card className="mb-4">
                                <div className="card-body px-4 pb-4 pt-3 text-center">
                                    <h3 className="display-4 my-4 font-weight-bold text-warning">
                                        Rảnh khỏe
                                    </h3>
                                    <div className="bg-neutral-warning p-3 rounded mb-4">
                                        <span className="display-2 font-weight-bold">
                                            100.000 JPY
                                        </span>

                                    </div>
                                    <ul className="list-unstyled text-lg-left mb-4 font-weight-bold font-size-sm">
                                        <li className="px-4 py-2">
                                            <FontAwesomeIcon icon={['far', 'check-circle']} className="text-success mr-2" />

                                            Unlimited Tasks
                                        </li>
                                        <li className="px-4 py-2">
                                            <FontAwesomeIcon icon={['far', 'check-circle']} className="text-success mr-2" />
                                            Unlimited Teams
                                        </li>
                                        <li className="px-4 py-2">
                                            <FontAwesomeIcon icon={['far', 'check-circle']} className="text-success mr-2" />
                                            All Integrations
                                        </li>
                                        <li className="px-4 py-2 text-black-50">
                                            <FontAwesomeIcon icon={['far', 'times-circle']} className="text-danger mr-2" />
                                            Premium support
                                        </li>
                                    </ul>
                                    <Button size="large" variant="outlined" color="secondary">
                                        Nhận tư vấn
                                    </Button>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>

        </Fragment>
    );
}