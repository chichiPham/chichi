import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import userApi from "../../api/UserApi";
import "../../assets/css/sign-in-form.css";
import { city, plan } from "../../dataFill/data";
import { resetPackage } from "../../store/package/packageSlice";
import ExampleDate from "../date_picker/date-picker";
import CheckboxLabels from './CheckBoxLabels';
import BasicSelect from './customSelectInput';



const schema = Yup.object().shape({

    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),

    password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .max(15, 'Maximum 15 characters')
        .required('Required'),

    name: Yup.string()
        .min(3, 'Minimum 3 characters')
        .max(15, 'Maximum 15 characters')
        .required('Required'),

    mobile: Yup.string()
        .min(3, 'Minimum 3 characters')
        .max(15, 'Maximum 15 characters')
        .required('Required'),

    plan: Yup.number()
        .required('Required'),

    currentAddress: Yup.string()
        .required('Required'),

    newAddress: Yup.string()
        .required('Required'),

    moveDate: Yup.string()
        .required('Required'),
});

function RegisterForm() {
    const currentPackage = useSelector(state => state.package.currentPackage);
    console.log("currentPackage = " + currentPackage);
    let planId;
    switch (currentPackage) {
        case 'Gói Tiết Kiệm':
            planId = 1;
            break;
        case 'Gói Hợp Lý':
            planId = 2;
            break;
        case 'Gói VIP':
            planId = 3;
            break;
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>

            {/*Wrapping form inside formik tag and passing our schema to validationSchema prop*/}

            <Formik
                validationSchema={schema}
                initialValues={{
                    email: '',
                    password: '',
                    name: '',
                    mobile: '',
                    plan: planId,
                    currentAddress: '',
                    newAddress: '',
                    moveDate: '',
                    isSuggestedApartment: true
                }}

                // onSubmit={(values) => console.log(values)}

                // onSubmit={(values) => {
                //     // Alert the input values of the form that we filled
                //     dispatch(resetPackage());
                //     alert(JSON.stringify(values));
                // }}
                onSubmit={async (values) => {
                    const { email, password, name, mobile, plan, currentAddress,
                        newAddress, moveDate, isSuggestedApartment } = values;

                    let isHasApartmentAlready;

                    isSuggestedApartment === true ?
                        isHasApartmentAlready = 1 : isHasApartmentAlready = 0;


                    try {
                        const data = {
                            "email": email,
                            "phone": mobile,
                            "password": password,
                            "fullName": name,
                            "role": "CUSTOMER",
                            "currentCity": currentAddress,
                            "newCity": newAddress,
                            "movingDate": moveDate,
                            "planId": plan,
                            "isHasApartmentAlready": isHasApartmentAlready,
                            "distance": "100"
                        }

                        const registerResponse = await userApi.createUserAndOrder(data)
                        console.log(registerResponse);

                        dispatch(resetPackage());
                        alert(JSON.stringify(values));

                    } catch (error) {
                        alert('error')
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
                    <div className="register">
                        <div className="form">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>
                                <span style={{ fontSize: '40px' }}>Register</span>
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
                                <input
                                    type="name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    placeholder="Enter your fullname"
                                    className="form-control inp_text"
                                    id="name"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.name && touched.name && errors.name}
                                </p>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                    type="mobile"
                                    name="mobile"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.mobile}
                                    placeholder="Enter mobile"
                                    className="form-control inp_number"
                                    id='mobile'
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.mobile && touched.mobile && errors.mobile}
                                </p>
                             

                                <BasicSelect
                                    data={plan}
                                    type="plan"
                                    name="plan"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.currentPackage}
                                    placeholder={currentPackage ? currentPackage : 'Select your favorites plan'}
                                    className="form-control input_select"
                                    id="plan"
                                />
                                <p className="error">
                                    {errors.currentAddress && touched.currentAddress && errors.currentAddress}
                                </p>
                                <BasicSelect
                                    data={city}
                                    type="currentAddress"
                                    name="currentAddress"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.currentAddress}
                                    placeholder="Select your current Address"
                                    className="form-control input_select"
                                    id="currentAddress"
                                />
                                <p className="error">
                                    {errors.currentAddress && touched.currentAddress && errors.currentAddress}
                                </p>
                                <BasicSelect
                                    data={city}
                                    type="newAddress"
                                    name="newAddress"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.newAddress}
                                    placeholder="Select your new Address"
                                    className="form-control input_select"
                                    id="newAddress"
                                />
                                <p className="error">
                                    {errors.newAddress && touched.newAddress && errors.newAddress}
                                </p>

                                <ExampleDate
                                    type="moveDate"
                                    name="moveDate"
                                    onChangeDate={setFieldValue}
                                    onBlur={handleBlur}
                                    value={values.moveDate}
                                    placeholder="Enter your move Date"
                                    className="form-control inp_text"
                                    id="moveDate"

                                />
                                <CheckboxLabels
                                    label='Suggested Apartment'
                                    name='isSuggestedApartment'
                                    checked={values.isSuggestedApartment}
                                    onChange={setFieldValue}

                                />

                                {/* Click on submit button to submit the form */}
                                <button type="submit">Register</button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
}


export default RegisterForm;