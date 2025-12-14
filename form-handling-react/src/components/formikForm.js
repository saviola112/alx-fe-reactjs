import React from "react";
// CRITICAL FIX 1: Import ErrorMessage component
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

// 1. Yup Validation Schema
const validationSchema = Yup.object({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  // 2. Formik Integration using useFormik hook
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Formik Data:", values);
      alert(`Formik submission successful for ${values.username}!`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Formik Registration</h2>

      <div>
        <label htmlFor="formikUsername">Username:</label>
        <input
          id="formikUsername"
          type="text"
          {...formik.getFieldProps("username")}
        />
        {/* CRITICAL FIX 2: Use ErrorMessage component */}
        <ErrorMessage name="username" component="div" className="error" />
      </div>

      <div>
        <label htmlFor="formikEmail">Email:</label>
        <input
          id="formikEmail"
          type="email"
          {...formik.getFieldProps("email")}
        />
        {/* CRITICAL FIX 2: Use ErrorMessage component */}
        <ErrorMessage name="email" component="div" className="error" />
      </div>

      <div>
        <label htmlFor="formikPassword">Password:</label>
        <input
          id="formikPassword"
          type="password"
          {...formik.getFieldProps("password")}
        />
        {/* CRITICAL FIX 2: Use ErrorMessage component */}
        <ErrorMessage name="password" component="div" className="error" />
      </div>

      <button type="submit">Register with Formik</button>
    </form>
  );
};

// Make sure to export the component name correctly
export default FormikForm;
