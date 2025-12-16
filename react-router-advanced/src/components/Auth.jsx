import React, { useState, createContext, useContext } from "react";

// 1. Create Context
const AuthContext = createContext(null);

// 2. Auth Provider Component
export const AuthProvider = ({ children }) => {
  // Simple state to simulate user login
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};
