import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const headerStyle = {
  backgroundColor: '#f5f5dc',
  color: '#5a4631',
  fontFamily: 'Georgia, serif',
  padding: '20px 0',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const logoStyle = {
  fontSize: '2.8rem',
  fontWeight: 'bold',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: '#5a4631',
  transition: 'color 0.3s ease',
};

const navLinksStyle = {
  display: 'flex',
  gap: '35px',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  alignItems: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#5a4631',
  fontSize: '1.2rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  textTransform: 'capitalize',
  padding: '10px 15px',
  borderRadius: '20px',
  position: 'relative',
};

const activeLinkStyle = {
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
  fontWeight: 'bold',
};

const phoneButtonStyle = {
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '20px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const mobileMenuStyle = {
  display: 'none',
  background: 'none',
  border: '2px solid #5a4631',
  color: '#5a4631',
  fontSize: '1.5rem',
  padding: '8px 12px',
  borderRadius: '8px',
  cursor: 'pointer',
};

const mobileNavStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: '#f5f5dc',
  flexDirection: 'column',
  gap: '0',
  padding: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  border: '2px solid #d2c9a0',
  borderTop: 'none',
  zIndex: 1000,
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [logoHovered, setLogoHovered] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/reservations', label: 'Reservations' },
    { path: '/events', label: 'Events' },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const getLinkStyle = (path, index) => {
    const isActive = isActivePath(path);
    const isHovered = hoveredLink === index;
    
    return {
      ...linkStyle,
      ...(isActive ? activeLinkStyle : {}),
      ...(isHovered && !isActive ? {
        color: '#8b4513',
        backgroundColor: '#ede8d3',
        transform: 'translateY(-2px)',
      } : {}),
    };
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        {/* Logo */}
        <Link 
          to="/" 
          style={{
            ...logoStyle,
            color: logoHovered ? '#8b4513' : '#5a4631',
          }}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          Bella Vista
        </Link>

        {/* Desktop Navigation */}
        <ul style={navLinksStyle} className="desktop-nav">
          {navItems.map((item, index) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={getLinkStyle(item.path, index)}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          
          {/* Phone Button */}
          <li>
            <a
              href="tel:+15551234567"
              style={phoneButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#4a3529';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#5a4631';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              📞 Call
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          style={mobileMenuStyle}
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div style={mobileNavStyle} className="mobile-nav">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...linkStyle,
                  display: 'block',
                  textAlign: 'center',
                  margin: '10px 0',
                  ...(isActivePath(item.path) ? activeLinkStyle : {})
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+15551234567"
              style={{
                ...phoneButtonStyle,
                display: 'block',
                textAlign: 'center',
                margin: '20px auto 10px',
                width: 'fit-content'
              }}
            >
              📞 (555) 123-4567
            </a>
          </div>
        )}
      </nav>

      {/* Simple Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
