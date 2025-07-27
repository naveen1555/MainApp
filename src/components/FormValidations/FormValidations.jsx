import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./FormValidation.css";

const FormValidations = () => {
    const schema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        name: Yup.string().min(3, "*name must alteast 3 chracters")
            .matches(/^[a-zA-Z ]+$/).required("*name is required"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[@,#,$,%,&,*]/, "Password must contain at least one special character")
    })
    return (
        <div className='form-main-container'>
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                validationSchema={schema}
                onSubmit={(values) => console.log(values)}>
                <Form className="form-container">
                    <Field name="name" type="text" placeholder="Enter Name" />
                    <ErrorMessage className='errormessage-name' name="name" />
                    <Field className="email-field" name="email" type="email" placeholder="Enter Email" />
                    <ErrorMessage name="email" />
                    <Field type="password" name="password" placeholder="Enter Password" />
                    <ErrorMessage name="password" component="div" />
                    <button className="buttonSubmit" type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormValidations
