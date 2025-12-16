import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/Auth";
import ProtectedRoute from "./components/ProtectedRoute";

// Import all components
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Post from "./components/Post";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

// --- Navigation Bar Component ---
const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (auth.user) {
      auth.logout();
      navigate("/");
    } else {
      // Simple simulation of login
      auth.login("TestUser123");
      navigate("/profile");
    }
  };

  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* Protected Link - only visible if logged in */}
      {auth.user && <Link to="/profile">Profile</Link>}

      {/* Dynamic Link Example */}
      <Link to="/post/react-router-tutorial-guide">Dynamic Post</Link>

      <button onClick={handleAuth} style={{ marginLeft: "auto" }}>
        {auth.user ? `Logout (${auth.user})` : "Simulate Login"}
      </button>
    </nav>
  );
};

// --- Main App Component ---
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* 1. Dynamic Routing */}
          <Route path="/post/:postId" element={<Post />} />

          {/* 2. Protected Route Setup */}
          <Route
            path="/profile"
            element={
              // Wrap the Profile component with ProtectedRoute
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* 3. Nested Routes */}
            {/* Index route renders ProfileDetails when at /profile */}
            <Route index element={<ProfileDetails />} />

            {/* Nested paths are relative to /profile */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Fallback for 404 Not Found (Optional) */}
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
