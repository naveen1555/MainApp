// import React from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import "./FormValidation.css";

// const FormValidations = () => {
//     const schema = Yup.object({
//         email: Yup.string().email("Invalid email address").required("Email is required"),
//         name: Yup.string().min(3, "*name must alteast 3 chracters")
//             .matches(/^[a-zA-Z ]+$/).required("*name is required"),
//         password: Yup.string()
//             .required("Password is required")
//             .min(6, "Password must be at least 6 characters")
//             .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//             .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//             .matches(/[0-9]/, "Password must contain at least one number")
//             .matches(/[@,#,$,%,&,*]/, "Password must contain at least one special character")
//     })
//     return (
//         <div className='form-main-container'>
//             <Formik
//                 initialValues={{ name: "", email: "", password: "" }}
//                 validationSchema={schema}
//                 onSubmit={(values) => console.log(values)}>
//                 <Form className="form-container">
//                     <Field name="name" type="text" placeholder="Enter Name" />
//                     <ErrorMessage className='errormessage-name' name="name" />
//                     <Field className="email-field" name="email" type="email" placeholder="Enter Email" />
//                     <ErrorMessage name="email" />
//                     <Field type="password" name="password" placeholder="Enter Password" />
//                     <ErrorMessage name="password" component="div" />
//                     <button className="buttonSubmit" type="submit">Submit</button>
//                 </Form>
//             </Formik>
//         </div>
//     )
// }

// export default FormValidations

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FormValidation.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import logo from './your-logo.png';
// Replace with your actual logo path

const FormValidations = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const schema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .min(3, "Name must be at least 3 characters")
            .matches(/^[a-zA-Z ]+$/, "Name should not include numbers or symbols"),

        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),

        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
            .matches(/[A-Z]/, "Must include at least one uppercase letter")
            .matches(/[a-z]/, "Must include at least one lowercase letter")
            .matches(/[0-9]/, "Must include at least one number")
            .matches(/[@#$%&*]/, "Must include at least one special character")
    });

    const handleSubmit = (values, { resetForm }) => {
        setSuccessMessage("✅ Signup Successful!");
        setTimeout(() => setSuccessMessage(""), 3000);
        resetForm();
    };

    return (
        <div className="form-main-container">
            <div className="form-container glass-card">
                {/* <img src={logo} alt="Logo" className="form-logo" /> */}

                <h2>Signup Form</h2>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="form-group">
                                <Field name="name" type="text" placeholder="Enter Name" />
                                <ErrorMessage name="name" component="div" className="error-message" />
                            </div>
                            <div className="form-group">
                                <Field name="email" type="email" placeholder="Enter Email" />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </div>
                            <div className="form-group password-field">
                                <Field
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter Password"
                                />
                                <span
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                <ErrorMessage name="password" component="div" className="error-message" />
                            </div>

                            <button className="buttonSubmit" type="submit">
                                Submit
                            </button>
                            {successMessage && (
                                <div className="success-message">{successMessage}</div>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default FormValidations;
