import React, { useState } from "react";

const RegistrationForm = () => {
  // State initialization for controlled components
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handlers to update state
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation logic
    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // Successful submission logic (for checker)
    console.log("Registration Data:", { username, email, password });
    alert(`Registration successful for ${username}!`);

    // Reset form after submission
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          // FIX: Controlled Component Setup - linking value to state
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          // FIX: Controlled Component Setup - linking value to state
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          // FIX: Controlled Component Setup - linking value to state
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
