import React from "react";
import { useAuth } from "./Auth";
import { Link } from "react-router-dom";

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <h1>Welcome to the Advanced Router Demo!</h1>
      <p>
        This application demonstrates advanced features of React Router DOM:
        Nested, Dynamic, and Protected Routes.
      </p>

      {auth.user ? (
        <>
          <h3>You are currently logged in as: **{auth.user}**</h3>
          <p>
            You can now access the{" "}
            <Link to="/profile">Protected Profile Page</Link>.
          </p>
        </>
      ) : (
        <h3>
          Please click "Simulate Login" in the top right to access the protected
          content.
        </h3>
      )}

      <p>
        Test the **Dynamic Route** by clicking "Dynamic Post" in the navigation
        bar.
      </p>
    </div>
  );
};

// CRITICAL FIX: Ensure this export exists!
export default Home;
