import "../../assets/css/sign-in-form.css";
import { Formik } from "formik";
import * as Yup from "yup";
import CheckboxLabels from "./CheckBoxLabels";
import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import storage from "../../storage/storage";
import { useDispatch } from "react-redux";
import { setIsRememberMe, setToken, setUserInfo } from "../../store/user/logInUserSlice";
import { NavLink, useNavigate } from "react-router-dom";
import LoginApi from "../../api/LoginApi";

// Creating schema
const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(6, "Password must be at least 8 characters"),
});

function SignInForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <>
            {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
            <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "", rememberMe: false }}
                // onSubmit={(values) => {
                //     // Alert the input values of the form that we filled
                //     alert(JSON.stringify(values));
                // }}
                onSubmit={async (values) => {
                    try {
                        const { email, password, rememberMe } = values;

                        const logInResult = await LoginApi.login(email, password);
                        console.log(logInResult);

                        if (logInResult.token) {
                            // Save to storage
                            dispatch(setIsRememberMe(rememberMe));
                            storage.setRememberMe(rememberMe);
                            storage.setToken(logInResult.token);
                            storage.setUserInfo(
                                logInResult.id,
                                logInResult.email,
                                logInResult.phone,
                                logInResult.fullname,
                                logInResult.role,
                                logInResult.status
                            );

                            // Save to store
                            dispatch(setToken(logInResult.token));
                            dispatch(setUserInfo({
                                id: logInResult.id,
                                email: logInResult.email,
                                phone: logInResult.phone,
                                fullname: logInResult.fullname,
                                role: logInResult.role,
                                status: logInResult.status,
                            }));

                            navigate('/service', { replace: true });

                        } else {
                            alert("log in error");
                            // dispatch(setSnackBar({
                            //     severity: "error",
                            //     title: "Account not activated",
                            //     message: "Your account needs to be activated to log in.",
                            // }));
                            // dispatch(openSnackBar());
                        }
                        ;


                    } catch (e) {
                        alert("log in error");
                        // dispatch(setSnackBar({
                        //     severity: "error",
                        //     title: "Log in Failed",
                        //     message: "Username and Password doesn't match!",
                        // }));
                        // dispatch(openSnackBar());
                        // reset();
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue
                }) => (
                    <div className="login">
                        <div className="form">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>
                                <span style={{ fontSize: '40px' }}>Login</span>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email id / username"
                                    className="form-control inp_text"
                                    id="email"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="form-control"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>
                                <CheckboxLabels
                                    label='Remember Me'
                                    name='rememberMe'
                                    checked={values.rememberMe}
                                    onChange={setFieldValue}

                                />
                                <div className='sublink'>
                                    <NavLink to={"/register"}> Đăng kí dịch vụ </NavLink>
                                    <NavLink> Quên mật khẩu </NavLink>
                                </div>

                                {/* <FormControlLabel
                                    control={<Checkbox checked={values.rememberMe} />}
                                    label='Remember Me'
                                    name="rememberMe"
                                    onChange={handleChange}
                                /> */}
                                {/* Click on submit button to submit the form */}
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
}

export default SignInForm;