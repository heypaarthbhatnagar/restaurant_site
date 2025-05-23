import React, { useState } from 'react';

const footerStyle = {
  backgroundColor: '#f5f5dc',
  color: '#5a4631',
  fontFamily: 'Georgia, serif',
  padding: '50px 0 20px',
  borderTop: '3px solid #d2c9a0',
  marginTop: 'auto',
};

const footerContentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '40px',
};

const sectionStyle = {
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '1.4rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: '#5a4631',
  borderBottom: '2px solid #d2c9a0',
  paddingBottom: '10px',
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '15px',
  fontSize: '1.1rem',
  transition: 'all 0.3s ease',
  padding: '8px',
  borderRadius: '8px',
  cursor: 'pointer',
};

const socialLinksStyle = {
  display: 'flex',
  gap: '15px',
  justifyContent: 'center',
  marginTop: '20px',
};

const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '45px',
  height: '45px',
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
  borderRadius: '50%',
  textDecoration: 'none',
  fontSize: '1.3rem',
  transition: 'all 0.3s ease',
};

const newsletterStyle = {
  backgroundColor: '#ede8d3',
  padding: '25px',
  borderRadius: '15px',
  border: '2px solid #d2c9a0',
  marginTop: '20px',
};

const newsletterFormStyle = {
  display: 'flex',
  gap: '10px',
  marginTop: '15px',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const newsletterInputStyle = {
  flex: '1',
  minWidth: '200px',
  padding: '12px 15px',
  border: '2px solid #5a4631',
  borderRadius: '25px',
  fontSize: '1rem',
  fontFamily: 'Georgia, serif',
  outline: 'none',
};

const newsletterButtonStyle = {
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
  padding: '12px 25px',
  border: 'none',
  borderRadius: '25px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

const copyrightStyle = {
  textAlign: 'center',
  marginTop: '40px',
  paddingTop: '25px',
  borderTop: '2px solid #d2c9a0',
  fontSize: '1rem',
  backgroundColor: '#ede8d3',
  padding: '20px',
  margin: '40px -20px 0',
};

export default function Footer() {
  const [hoveredContact, setHoveredContact] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const contactInfo = [
    { icon: '📞', text: '(555) 123-4567', href: 'tel:+15551234567' },
    { icon: '📧', text: 'info@bellavista.com', href: 'mailto:info@bellavista.com' },
    { icon: '📍', text: '123 Gourmet Street, Culinary District', href: '#' }
  ];

  const socialMediaLinks = [
    { icon: '📷', url: 'https://instagram.com/bellavista', platform: 'Instagram' },
    { icon: '📘', url: 'https://facebook.com/bellavistarestaurant', platform: 'Facebook' },
    { icon: '🐦', url: 'https://twitter.com/bellavistarestaurant', platform: 'Twitter' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterSubmitted(false);
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        {/* Contact Information */}
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Contact</h3>
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              style={{
                ...contactItemStyle,
                textDecoration: 'none',
                color: 'inherit',
                backgroundColor: hoveredContact === index ? '#ede8d3' : 'transparent',
              }}
              onMouseEnter={() => setHoveredContact(index)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              <span style={{marginRight: '10px', fontSize: '1.2rem'}}>{item.icon}</span>
              {item.text}
            </a>
          ))}
        </div>

        {/* Hours */}
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Hours</h3>
          <p style={{marginBottom: '10px', fontSize: '1.1rem'}}>
            <strong>Lunch:</strong> Tue-Sun 11:30 AM - 3:00 PM
          </p>
          <p style={{marginBottom: '10px', fontSize: '1.1rem'}}>
            <strong>Dinner:</strong> Tue-Sun 5:00 PM - 10:00 PM
          </p>
          <p style={{marginBottom: '10px', fontSize: '1.1rem'}}>
            <strong>Weekend:</strong> Fri-Sat until 11:00 PM
          </p>
          <p style={{color: '#dc3545', fontWeight: 'bold', fontSize: '1rem'}}>
            🚫 Closed Mondays
          </p>
        </div>

        {/* Follow Us & Newsletter */}
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Follow Us</h3>
          <p style={{marginBottom: '15px', fontSize: '1rem'}}>
            Stay updated with our latest news and special offers
          </p>
          
          <div style={socialLinksStyle}>
            {socialMediaLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...socialLinkStyle,
                  backgroundColor: hoveredSocial === index ? '#8b4513' : '#5a4631',
                  transform: hoveredSocial === index ? 'translateY(-3px) scale(1.1)' : 'translateY(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                title={`Follow us on ${social.platform}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div style={newsletterStyle}>
            <h4 style={{color: '#5a4631', marginBottom: '10px', fontSize: '1.1rem'}}>
              📧 Newsletter
            </h4>
            <p style={{marginBottom: '15px', color: '#7a6b54', fontSize: '0.95rem'}}>
              Get exclusive offers and updates
            </p>
            
            {newsletterSubmitted ? (
              <div style={{
                backgroundColor: '#d4edda',
                color: '#155724',
                padding: '15px',
                borderRadius: '10px',
                textAlign: 'center',
                border: '2px solid #c3e6cb'
              }}>
                <strong>🎉 Thank you for subscribing!</strong>
              </div>
            ) : (
              <form style={newsletterFormStyle} onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={newsletterInputStyle}
                  required
                />
                <button
                  type="submit"
                  style={newsletterButtonStyle}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#4a3529';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#5a4631';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={copyrightStyle}>
        <p style={{margin: 0}}>
          © 2025 Bella Vista Restaurant. All rights reserved.
        </p>
        <p style={{margin: '10px 0 0', fontSize: '0.9rem', color: '#7a6b54'}}>
          Made with ❤️ for food lovers
        </p>
      </div>
    </footer>
  );
}
