import React, { useState } from 'react';
import ReservationForm from '../components/ReservationForm';

const pageStyle = {
  minHeight: '100vh',
  padding: '40px 20px',
  backgroundColor: '#fcfcfa',
  fontFamily: 'Georgia, serif',
};

const titleStyle = {
  fontSize: '3.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '20px',
  color: '#5a4631',
  textTransform: 'uppercase',
  letterSpacing: '4px',
};

const subtitleStyle = {
  fontSize: '1.3rem',
  textAlign: 'center',
  marginBottom: '50px',
  color: '#7a6b54',
  fontStyle: 'italic',
  maxWidth: '700px',
  margin: '0 auto 50px',
  lineHeight: '1.6',
};

const infoSectionStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '25px',
  maxWidth: '1200px',
  margin: '0 auto 50px',
  padding: '0 20px',
};

const infoBoxStyle = {
  backgroundColor: '#faf9f5',
  padding: '30px',
  borderRadius: '15px',
  textAlign: 'center',
  border: '2px solid #d2c9a0',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const infoBoxHoverStyle = {
  transform: 'translateY(-5px)',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
};

const policyBoxStyle = {
  backgroundColor: '#f5f5dc',
  padding: '25px',
  borderRadius: '12px',
  maxWidth: '800px',
  margin: '0 auto 40px',
  textAlign: 'left',
  border: '2px solid #d2c9a0',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const contactBoxStyle = {
  backgroundColor: '#e8f4f8',
  border: '2px solid #4682b4',
  borderRadius: '15px',
  padding: '25px',
  maxWidth: '600px',
  margin: '40px auto',
  textAlign: 'center',
};

const emergencyBoxStyle = {
  backgroundColor: '#fff3cd',
  border: '2px solid #ffc107',
  borderRadius: '10px',
  padding: '20px',
  maxWidth: '700px',
  margin: '30px auto',
  textAlign: 'center',
};

const hoursBoxStyle = {
  backgroundColor: '#d4edda',
  border: '2px solid #28a745',
  borderRadius: '12px',
  padding: '25px',
  textAlign: 'center',
};

const capacityBoxStyle = {
  backgroundColor: '#f8d7da',
  border: '2px solid #dc3545',
  borderRadius: '12px',
  padding: '25px',
  textAlign: 'center',
};

const InfoCard = ({ title, icon, children, style = {} }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...infoBoxStyle, 
        ...style,
        ...(isHovered ? infoBoxHoverStyle : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={{
        color: '#5a4631', 
        marginBottom: '15px', 
        fontSize: '1.4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}>
        <span style={{fontSize: '2rem'}}>{icon}</span>
        {title}
      </h3>
      <div style={{color: '#7a6b54', fontSize: '1rem', lineHeight: '1.5'}}>
        {children}
      </div>
    </div>
  );
};

export default function ReservationsPage() {
  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Table Reservations</h1>
      <p style={subtitleStyle}>
        Reserve your table for an unforgettable dining experience at Bella Vista. 
        We recommend booking in advance, especially for weekends and special events. 
        Our team is dedicated to making your visit exceptional.
      </p>

      {/* Quick Info Cards */}
      <div style={infoSectionStyle}>
        <InfoCard 
          title="Operating Hours" 
          icon="🕒"
          style={hoursBoxStyle}
        >
          <p><strong>Lunch Service:</strong><br />Tuesday - Sunday: 11:30 AM - 3:00 PM</p>
          <p><strong>Dinner Service:</strong><br />Tuesday - Sunday: 5:00 PM - 10:00 PM</p>
          <p><strong>Extended Hours:</strong><br />Friday & Saturday until 11:00 PM</p>
          <p style={{marginTop: '15px', fontSize: '0.9rem', fontStyle: 'italic'}}>
            🚫 Closed Mondays for maintenance
          </p>
        </InfoCard>

        <InfoCard 
          title="Group Dining" 
          icon="👥"
          style={capacityBoxStyle}
        >
          <p><strong>Large Parties:</strong><br />Groups of 6+ require advance booking</p>
          <p><strong>Private Dining:</strong><br />Room available for up to 40 guests</p>
          <p><strong>Deposit Required:</strong><br />$25 per person for parties of 6+</p>
          <p style={{marginTop: '15px', fontSize: '0.9rem', fontStyle: 'italic'}}>
            📞 Call for special group arrangements
          </p>
        </InfoCard>

        <InfoCard 
          title="Special Services" 
          icon="⭐"
        >
          <p><strong>Birthday Celebrations:</strong><br />Complimentary dessert with advance notice</p>
          <p><strong>Anniversary Dinners:</strong><br />Special table setup available</p>
          <p><strong>Business Dinners:</strong><br />Quiet seating areas reserved</p>
          <p style={{marginTop: '15px', fontSize: '0.9rem', fontStyle: 'italic'}}>
            🎉 Mention your occasion when booking
          </p>
        </InfoCard>
      </div>

      {/* Reservation Policies */}
      <div style={policyBoxStyle}>
        <h3 style={{color: '#5a4631', marginBottom: '20px', fontSize: '1.5rem', textAlign: 'center'}}>
          📋 Reservation Policies
        </h3>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px'}}>
          <div>
            <h4 style={{color: '#5a4631', marginBottom: '10px'}}>📅 Booking Guidelines</h4>
            <ul style={{paddingLeft: '20px', color: '#7a6b54'}}>
              <li>Reservations accepted up to 30 days in advance</li>
              <li>Online booking confirmed within 2 hours</li>
              <li>Phone reservations confirmed immediately</li>
              <li>Walk-ins welcome based on availability</li>
            </ul>
          </div>
          <div>
            <h4 style={{color: '#5a4631', marginBottom: '10px'}}>⚠️ Important Policies</h4>
            <ul style={{paddingLeft: '20px', color: '#7a6b54'}}>
              <li>24-hour cancellation policy required</li>
              <li>15-minute grace period for late arrivals</li>
              <li>Tables held for 15 minutes past reservation time</li>
              <li>No-show fees may apply to large parties</li>
            </ul>
          </div>
        </div>
        
        <div style={{marginTop: '20px', padding: '15px', backgroundColor: '#f8f6f0', borderRadius: '8px', border: '1px solid #e0d8c1'}}>
          <h4 style={{color: '#5a4631', marginBottom: '8px'}}>💳 Payment & Deposits</h4>
          <p style={{color: '#7a6b54', margin: 0}}>
            Groups of 6 or more require a $25 per person deposit to secure the reservation. 
            Deposits are fully applied to your final bill. We accept all major credit cards.
          </p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div style={emergencyBoxStyle}>
        <h3 style={{color: '#856404', marginBottom: '15px'}}>📞 Need Immediate Assistance?</h3>
        <p style={{color: '#856404', fontSize: '1.1rem', marginBottom: '10px'}}>
          For same-day reservations, cancellations, or special requests:
        </p>
        <p style={{color: '#856404', fontSize: '1.3rem', fontWeight: 'bold'}}>
          Call us directly at (555) 123-4567
        </p>
        <p style={{color: '#856404', fontSize: '0.9rem', marginTop: '10px'}}>
          Available during business hours: Tuesday-Sunday, 11:00 AM - 10:00 PM
        </p>
      </div>

      {/* Reservation Form */}
      <ReservationForm />

      {/* Additional Contact Information */}
      <div style={contactBoxStyle}>
        <h3 style={{color: '#2c5aa0', marginBottom: '15px'}}>💬 Alternative Contact Methods</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', color: '#2c5aa0'}}>
          <div>
            <strong>📧 Email</strong><br />
            reservations@bellavista.com
          </div>
          <div>
            <strong>📱 Text</strong><br />
            (555) 123-4567
          </div>
          <div>
            <strong>📍 Address</strong><br />
            123 Gourmet Street<br />
            Culinary District
          </div>
        </div>
        <p style={{color: '#2c5aa0', fontSize: '0.9rem', marginTop: '15px', fontStyle: 'italic'}}>
          We respond to emails and texts within 1 hour during business hours
        </p>
      </div>

      {/* Accessibility Notice */}
      <div style={{
        backgroundColor: '#e7f3ff',
        border: '2px solid #b3d9ff',
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '600px',
        margin: '30px auto',
        textAlign: 'center'
      }}>
        <h4 style={{color: '#0066cc', marginBottom: '10px'}}>♿ Accessibility</h4>
        <p style={{color: '#0066cc', margin: 0}}>
          Bella Vista is fully wheelchair accessible. Please mention any special accessibility 
          needs when making your reservation so we can ensure the best possible experience.
        </p>
      </div>
    </div>
  );
}
