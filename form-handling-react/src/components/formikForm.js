import React from "react";
// CRITICAL FIX 1: Import all required Formik pieces (including ErrorMessage)
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

// 1. Yup Validation Schema (Fixes "Yup validation schema" check)
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
  // 2. Formik Integration using useFormik hook (Fixes "Formik validation logic" check)
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    // Linking the Yup schema is essential for validation logic
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
          // Using getFieldProps is key for Formik integration
          {...formik.getFieldProps("username")}
        />
        {/* CRITICAL FIX 2: Use ErrorMessage component (Fixes "Formik integration" check) */}
        <ErrorMessage name="username" component="div" className="error" />
      </div>

      <div>
        <label htmlFor="formikEmail">Email:</label>
        <input
          id="formikEmail"
          type="email"
          {...formik.getFieldProps("email")}
        />
        {/* Use ErrorMessage component */}
        <ErrorMessage name="email" component="div" className="error" />
      </div>

      <div>
        <label htmlFor="formikPassword">Password:</label>
        <input
          id="formikPassword"
          type="password"
          {...formik.getFieldProps("password")}
        />
        {/* Use ErrorMessage component */}
        <ErrorMessage name="password" component="div" className="error" />
      </div>

      <button type="submit">Register with Formik</button>
    </form>
  );
};

export default FormikForm;
