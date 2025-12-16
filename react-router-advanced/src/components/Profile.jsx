import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "./Auth";

const Profile = () => {
  const auth = useAuth();

  return (
    <div>
      <h1>User Profile: {auth.user}</h1>

      {/* Navigation for Nested Routes */}
      <nav style={{ display: "flex", gap: "20px", margin: "15px 0" }}>
        {/* The links are relative to the parent route (/profile) */}
        <NavLink to="details">Details</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      {/* Renders the matching Nested Route (ProfileDetails or ProfileSettings) */}
      <Outlet />
    </div>
  );
};

export default Profile;
