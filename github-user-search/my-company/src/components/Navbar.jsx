// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-around', // inline styling with justifyContent
        gap: '15px',
        backgroundColor: '#f5f5f5',
        padding: '10px 20px',
        borderBottom: '2px solid #ddd'
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
