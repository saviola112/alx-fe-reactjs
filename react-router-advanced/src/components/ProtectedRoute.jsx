import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth"; // Assumes useAuth is imported from ./Auth

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    // If not authenticated, redirect to the home page (or login page)
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If authenticated, render the child component (Profile in this case)
  return children;
};

export default ProtectedRoute;
