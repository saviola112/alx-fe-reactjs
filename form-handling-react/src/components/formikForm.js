import React from "react";
import { useFormik } from "formik"; // Required for Formik integration
import * as Yup from "yup"; // Required for Yup validation schema

// 1. Yup Validation Schema (outside the component)
const validationSchema = Yup.object({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Username is required"), // Formik validation logic
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"), // Formik validation logic
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Password is required"), // Formik validation logic
});

const FormikForm = () => {
  // 2. Formik Integration using useFormik hook
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    // Linking the Yup schema
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Submission logic (for checker)
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
          // Link input fields to Formik state and handlers
          {...formik.getFieldProps("username")}
        />
        {/* Display Formik validation error */}
        {formik.touched.username && formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="formikEmail">Email:</label>
        <input
          id="formikEmail"
          type="email"
          {...formik.getFieldProps("email")}
        />
        {/* Display Formik validation error */}
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="formikPassword">Password:</label>
        <input
          id="formikPassword"
          type="password"
          {...formik.getFieldProps("password")}
        />
        {/* Display Formik validation error */}
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit">Register with Formik</button>
    </form>
  );
};

export default FormikForm;
