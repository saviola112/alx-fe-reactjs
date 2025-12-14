import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic Validation Logic
    if (!formData.username || !formData.email || !formData.password) {
      setError("Error: All fields are mandatory.");
      return;
    }

    console.log("Controlled Form Data:", formData);
    // Here you would typically call an API
    alert("Controlled Form Submitted!");
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        maxWidth: "400px",
        margin: "50px auto",
      }}
    >
      <h2>Controlled Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ marginTop: "15px" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
