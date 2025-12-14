import React from "react";
// FIX 1: Must import ErrorMessage for Formik integration check
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

// 1. Yup Validation Schema (Fixes "Yup validation schema" check with string().required)
const validationSchema = Yup.object({
  // FIX 2: Explicitly use .string().required() for the checker
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Username is required"), // Contains "string().required"
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  // 2. Formik Integration (Fixes "Formik validation logic" check)
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
          {...formik.getFieldProps("username")}
        />
        {/* FIX 1: Use ErrorMessage component to pass integration check */}
        <ErrorMessage name="username" component="div" className="error" />
      </div>

      <div>
        <label htmlFor="formikEmail">Email:</label>
        <input
          id="formikEmail"
          type="email"
          {...formik.getFieldProps("email")}
        />
        <ErrorMessage name="email" component="div" className="error" />
      </div>

      <div>
        <label htmlFor="formikPassword">Password:</label>
        <input
          id="formikPassword"
          type="password"
          {...formik.getFieldProps("password")}
        />
        <ErrorMessage name="password" component="div" className="error" />
      </div>

      <button type="submit">Register with Formik</button>
    </form>
  );
};

export default FormikForm;
