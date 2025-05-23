import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const homeStyle = {
  fontFamily: 'Georgia, serif',
  color: '#5a4631',
};

const heroStyle = {
  background: 'linear-gradient(rgba(245, 245, 220, 0.8), rgba(245, 245, 220, 0.8)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '50px 20px',
};

const heroContentStyle = {
  backgroundColor: 'rgba(250, 249, 245, 0.95)',
  padding: '50px',
  borderRadius: '15px',
  maxWidth: '700px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
  border: '2px solid #d2c9a0',
};

const heroTitleStyle = {
  fontSize: '3.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  letterSpacing: '4px',
  textTransform: 'uppercase',
  color: '#5a4631',
};

const heroSubtitleStyle = {
  fontSize: '1.6rem',
  marginBottom: '25px',
  fontStyle: 'italic',
  color: '#7a6b54',
};

const heroDescStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  marginBottom: '35px',
  color: '#6a5c4f',
};

const ctaButtonStyle = {
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
  padding: '18px 35px',
  textDecoration: 'none',
  borderRadius: '25px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  display: 'inline-block',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  margin: '0 15px 15px 0',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const sectionStyle = {
  padding: '80px 20px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const sectionTitleStyle = {
  fontSize: '2.8rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '50px',
  textTransform: 'uppercase',
  letterSpacing: '3px',
  color: '#5a4631',
};

const featuresStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '40px',
  marginTop: '50px',
};

const featureCardStyle = {
  backgroundColor: '#faf9f5',
  padding: '40px 30px',
  borderRadius: '15px',
  textAlign: 'center',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  border: '2px solid #d2c9a0',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
};

const featureIconStyle = {
  fontSize: '4rem',
  marginBottom: '25px',
  display: 'block',
};

const featureTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#5a4631',
};

const featureDescStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#6a5c4f',
};

const statsStyle = {
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
  padding: '60px 20px',
  textAlign: 'center',
};

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '30px',
  maxWidth: '800px',
  margin: '0 auto',
};

const statItemStyle = {
  textAlign: 'center',
};

const statNumberStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const statLabelStyle = {
  fontSize: '1.1rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: '#d2c9a0',
};

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div style={homeStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>Bella Vista</h1>
          <p style={heroSubtitleStyle}>Where Culinary Dreams Come True</p>
          <p style={heroDescStyle}>
            Experience exceptional dining in an elegant atmosphere with our carefully crafted seasonal menu featuring the finest ingredients.
          </p>
          <div style={{marginTop: '35px'}}>
            <Link 
              to="/reservations" 
              style={{
                ...ctaButtonStyle,
                ...(hoveredButton === 'reservation' ? {
                  backgroundColor: '#4a3529',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
                } : {})
              }}
              onMouseEnter={() => setHoveredButton('reservation')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Make Reservation
            </Link>
            <Link 
              to="/menu" 
              style={{
                ...ctaButtonStyle,
                backgroundColor: 'transparent',
                color: '#5a4631',
                border: '3px solid #5a4631',
                ...(hoveredButton === 'menu' ? {
                  backgroundColor: '#5a4631',
                  color: '#f5f5dc',
                  transform: 'translateY(-3px)',
                } : {})
              }}
              onMouseEnter={() => setHoveredButton('menu')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={statsStyle}>
        <div style={statsGridStyle}>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>15+</div>
            <div style={statLabelStyle}>Years of Excellence</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>10,000+</div>
            <div style={statLabelStyle}>Happy Guests</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>200+</div>
            <div style={statLabelStyle}>Wine Selections</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>25+</div>
            <div style={statLabelStyle}>Awards Won</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Why Choose Bella Vista</h2>
        <div style={featuresStyle}>
          <div 
            style={{
              ...featureCardStyle,
              transform: hoveredFeature === 0 ? 'translateY(-10px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredFeature(0)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <span style={featureIconStyle}>👨‍🍳</span>
            <h3 style={featureTitleStyle}>Master Chefs</h3>
            <p style={featureDescStyle}>
              Our award-winning chefs bring years of experience from Michelin-starred restaurants around the world.
            </p>
          </div>
          
          <div 
            style={{
              ...featureCardStyle,
              transform: hoveredFeature === 1 ? 'translateY(-10px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredFeature(1)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <span style={featureIconStyle}>🌿</span>
            <h3 style={featureTitleStyle}>Fresh Ingredients</h3>
            <p style={featureDescStyle}>
              We source only the finest, locally-grown organic ingredients to create unforgettable flavors.
            </p>
          </div>
          
          <div 
            style={{
              ...featureCardStyle,
              transform: hoveredFeature === 2 ? 'translateY(-10px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredFeature(2)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <span style={featureIconStyle}>🍷</span>
            <h3 style={featureTitleStyle}>Premium Wine Selection</h3>
            <p style={featureDescStyle}>
              Our sommelier has curated an extensive collection of rare wines to perfectly complement your meal.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        ...sectionStyle, 
        backgroundColor: '#faf9f5', 
        textAlign: 'center',
        border: '2px solid #d2c9a0',
        borderRadius: '15px',
        margin: '40px auto',
        maxWidth: '800px'
      }}>
        <h2 style={{...sectionTitleStyle, marginBottom: '30px', fontSize: '2.2rem'}}>
          Ready for an Unforgettable Experience?
        </h2>
        <p style={{fontSize: '1.2rem', marginBottom: '30px', color: '#7a6b54'}}>
          Book your table today and discover why Bella Vista is the destination for exceptional dining.
        </p>
        <Link 
          to="/reservations" 
          style={{
            ...ctaButtonStyle,
            fontSize: '1.1rem',
            padding: '15px 30px'
          }}
        >
          Reserve Your Table
        </Link>
      </section>
    </div>
  );
}
