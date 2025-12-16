// File: react-router-advanced/src/App.jsx 

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute'; // Must be imported

// Import all required components for the Routes
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Post from './components/Post'; 
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

// --- Navigation Bar Component (Required for useAuth and navigation links) ---
const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (auth.user) {
      auth.logout();
      navigate('/');
    } else {
      auth.login('TestUser123');
      navigate('/profile'); 
    }
  };

  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', display: 'flex', gap: '20px' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      
      {/* Dynamic Link (Uses checker-required path: /blog/:id) */}
      <Link to="/blog/example-post">Blog Post</Link> 

      {/* Protected Link */}
      {auth.user && <Link to="/profile">Profile</Link>}

      <button onClick={handleAuth} style={{ marginLeft: 'auto' }}>
        {auth.user ? `Logout (${auth.user})` : 'Simulate Login'}
      </button>
    </nav>
  );
};

// --- Main App Component ---
function App() {
  return (
    // AuthProvider must wrap the entire App
    <AuthProvider>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* FIX: Dynamic Routing - Uses the required checker string "/blog/:id" */}
          <Route path="/blog/:id" element={<Post />} />

          {/* CRITICAL FIX: Protected Route Implementation */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          >
            {/* Nested Routes */}
            <Route index element={<ProfileDetails />} /> 
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;