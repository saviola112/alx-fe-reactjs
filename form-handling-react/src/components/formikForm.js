import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Import Yup for validation

// Define the validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"), // Ensures the field is not empty
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  // Define initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Define the submission logic
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate an API call
    console.log("Formik Form Data:", values);

    // In a real app, you would send 'values' to the API here
    setTimeout(() => {
      alert(`Registration successful for: ${values.username}`);
      setSubmitting(false); // Enable the form button again
      resetForm(); // Optionally clear the form
    }, 400);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #007bff",
        maxWidth: "400px",
        margin: "50px auto",
      }}
    >
      <h2>Formik Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{ marginTop: "15px" }}
            >
              {isSubmitting ? "Submitting..." : "Register (Formik)"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
