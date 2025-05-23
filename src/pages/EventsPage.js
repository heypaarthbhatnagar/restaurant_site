import React, { useState } from 'react';
import Events from '../components/Events';

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
  maxWidth: '800px',
  margin: '0 auto 50px',
  lineHeight: '1.6',
};

const infoSectionStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '25px',
  maxWidth: '1200px',
  margin: '0 auto 50px',
  padding: '0 20px',
};

const infoCardStyle = {
  backgroundColor: '#faf9f5',
  padding: '25px',
  borderRadius: '15px',
  textAlign: 'center',
  border: '2px solid #d2c9a0',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
};

const cardTitleStyle = {
  fontSize: '1.4rem',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#5a4631',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
};

const highlightBoxStyle = {
  backgroundColor: '#f5f5dc',
  padding: '30px',
  borderRadius: '15px',
  margin: '40px auto',
  maxWidth: '900px',
  border: '3px solid #d2c9a0',
  textAlign: 'center',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
};

const membershipBoxStyle = {
  backgroundColor: '#e8f4f8',
  border: '3px solid #4682b4',
  borderRadius: '15px',
  padding: '25px',
  maxWidth: '700px',
  margin: '30px auto',
  textAlign: 'center',
};

// Modal Styles for Membership
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  padding: '20px',
  animation: 'fadeIn 0.3s ease',
};

const modalContentStyle = {
  backgroundColor: '#faf9f5',
  padding: '40px',
  borderRadius: '20px',
  maxWidth: '700px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  fontFamily: 'Georgia, serif',
  color: '#5a4631',
  border: '3px solid #4682b4',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  animation: 'slideIn 0.3s ease',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '15px',
  right: '20px',
  background: 'none',
  border: 'none',
  fontSize: '2rem',
  cursor: 'pointer',
  color: '#4682b4',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
};

const formFieldStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  color: '#5a4631',
};

const inputStyle = {
  width: '100%',
  padding: '15px',
  border: '2px solid #4682b4',
  borderRadius: '8px',
  fontSize: '1rem',
  fontFamily: 'Georgia, serif',
  backgroundColor: '#fff',
  transition: 'border-color 0.3s ease',
  boxSizing: 'border-box',
};

const inputErrorStyle = {
  ...inputStyle,
  borderColor: '#dc3545',
  backgroundColor: '#fff5f5',
};

const selectStyle = {
  ...inputStyle,
  appearance: 'none',
  backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6,9 12,15 18,9\'%3e%3c/polyline%3e%3c/svg%3e")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 15px center',
  backgroundSize: '20px',
  cursor: 'pointer',
};

const submitButtonStyle = {
  backgroundColor: '#2c5aa0',
  color: 'white',
  padding: '18px 35px',
  border: 'none',
  borderRadius: '25px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  width: '100%',
  marginTop: '15px',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const errorStyle = {
  color: '#dc3545',
  fontSize: '0.9rem',
  marginTop: '5px',
  fontWeight: 'bold',
};

const membershipButtonStyle = {
  backgroundColor: '#2c5aa0',
  color: 'white',
  padding: '12px 25px',
  border: 'none',
  borderRadius: '25px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const membershipButtonHoverStyle = {
  backgroundColor: '#1e4080',
  transform: 'translateY(-2px)',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
};

// Membership Modal Component
const MembershipModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    membershipType: 'individual',
    heardAbout: '',
    specialInterests: '',
    newsletter: true
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const membershipPlans = [
    {
      type: 'individual',
      name: 'Individual Membership',
      price: '$99/year',
      benefits: [
        '15% discount on all events',
        'Priority booking access',
        'Exclusive member events',
        'Monthly wine tasting invitation',
        'Birthday celebration perks'
      ]
    },
    {
      type: 'couple',
      name: 'Couple Membership',
      price: '$159/year',
      benefits: [
        '15% discount on all events for 2 people',
        'Priority booking access',
        'Exclusive member events',
        'Monthly wine tasting for 2',
        'Anniversary celebration perks',
        'Complimentary valet parking'
      ]
    },
    {
      type: 'family',
      name: 'Family Membership',
      price: '$199/year',
      benefits: [
        '15% discount on all events for family',
        'Priority booking access',
        'Exclusive member events',
        'Family cooking classes included',
        'Kids eat free on Sundays',
        'Holiday celebration perks'
      ]
    }
  ];

  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
      if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
        errors.phone = 'Please enter a valid phone number';
      }
    }
    
    if (!formData.birthDate) {
      errors.birthDate = 'Birth date is required for membership benefits';
    }
    
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({ ...prev, [name]: newValue }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      }, 2000);
    }
  };

  const getInputStyle = (fieldName) => {
    return formErrors[fieldName] ? inputErrorStyle : inputStyle;
  };

  const resetModal = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthDate: '',
      membershipType: 'individual',
      heardAbout: '',
      specialInterests: '',
      newsletter: true
    });
    setFormErrors({});
    setFormSubmitted(false);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle} onClick={handleClose}>
      <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
        <button 
          style={closeButtonStyle} 
          onClick={handleClose}
          onMouseEnter={(e) => e.target.style.color = '#1e4080'}
          onMouseLeave={(e) => e.target.style.color = '#4682b4'}
        >
          ×
        </button>
        
        {formSubmitted ? (
          <div style={{textAlign: 'center', padding: '20px'}}>
            <h2 style={{color: '#28a745', marginBottom: '20px', fontSize: '2rem'}}>
              🎉 Welcome to the Events Club!
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '20px'}}>
              Thank you, <strong>{formData.firstName}</strong>! Your membership application has been received.
            </p>
            <div style={{backgroundColor: '#d4edda', padding: '25px', borderRadius: '15px', margin: '20px 0', border: '2px solid #c3e6cb'}}>
              <h3 style={{color: '#155724', marginBottom: '15px'}}>What happens next?</h3>
              <ul style={{textAlign: 'left', color: '#155724', paddingLeft: '30px', lineHeight: '1.6'}}>
                <li>Membership confirmation email sent to {formData.email}</li>
                <li>Welcome package with membership card mailed within 3-5 business days</li>
                <li>Access to member portal activated within 24 hours</li>
                <li>Payment instructions included in confirmation email</li>
                <li>Exclusive member events calendar attached</li>
              </ul>
            </div>
            <div style={{backgroundColor: '#e7f3ff', padding: '20px', borderRadius: '10px', margin: '20px 0', border: '1px solid #b3d9ff'}}>
              <h4 style={{color: '#0066cc', marginBottom: '10px'}}>Immediate Benefits</h4>
              <p style={{color: '#0066cc', margin: 0}}>
                You can start using your member discount immediately! Just mention your membership 
                when making event reservations. Your membership card will arrive soon!
              </p>
            </div>
            <button 
              style={submitButtonStyle}
              onClick={handleClose}
            >
              Start Exploring Events
            </button>
          </div>
        ) : (
          <>
            <h2 style={{marginBottom: '10px', textAlign: 'center', color: '#2c5aa0', fontSize: '2.2rem'}}>
              🎫 Join the Events Club
            </h2>
            <p style={{textAlign: 'center', marginBottom: '30px', color: '#6c757d', fontSize: '1.1rem'}}>
              Unlock exclusive benefits and become part of our culinary community
            </p>

            {/* Membership Plans */}
            <div style={{marginBottom: '30px'}}>
              <h3 style={{color: '#5a4631', marginBottom: '20px', textAlign: 'center'}}>Choose Your Membership</h3>
              <div style={{display: 'grid', gap: '15px'}}>
                {membershipPlans.map((plan) => (
                  <div 
                    key={plan.type}
                    style={{
                      border: formData.membershipType === plan.type ? '3px solid #2c5aa0' : '2px solid #d2c9a0',
                      borderRadius: '10px',
                      padding: '20px',
                      backgroundColor: formData.membershipType === plan.type ? '#e7f3ff' : '#f8f6f0',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setFormData(prev => ({...prev, membershipType: plan.type}))}
                  >
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                      <h4 style={{color: '#5a4631', margin: 0}}>{plan.name}</h4>
                      <span style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#2c5aa0'}}>{plan.price}</span>
                    </div>
                    <ul style={{paddingLeft: '20px', color: '#6a5c4f', fontSize: '0.9rem'}}>
                      {plan.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                <div style={formFieldStyle}>
                  <label style={labelStyle}>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    style={getInputStyle('firstName')}
                    placeholder="Enter your first name"
                  />
                  {formErrors.firstName && <div style={errorStyle}>⚠️ {formErrors.firstName}</div>}
                </div>

                <div style={formFieldStyle}>
                  <label style={labelStyle}>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    style={getInputStyle('lastName')}
                    placeholder="Enter your last name"
                  />
                  {formErrors.lastName && <div style={errorStyle}>⚠️ {formErrors.lastName}</div>}
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                <div style={formFieldStyle}>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={getInputStyle('email')}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.email && <div style={errorStyle}>⚠️ {formErrors.email}</div>}
                </div>

                <div style={formFieldStyle}>
                  <label style={labelStyle}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={getInputStyle('phone')}
                    placeholder="(555) 123-4567"
                  />
                  {formErrors.phone && <div style={errorStyle}>⚠️ {formErrors.phone}</div>}
                </div>
              </div>

              <div style={formFieldStyle}>
                <label style={labelStyle}>Birth Date *</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  style={getInputStyle('birthDate')}
                />
                <div style={{fontSize: '0.8rem', color: '#6c757d', marginTop: '5px'}}>
                  Required for birthday celebration benefits and age-appropriate event recommendations
                </div>
                {formErrors.birthDate && <div style={errorStyle}>⚠️ {formErrors.birthDate}</div>}
              </div>

              <div style={formFieldStyle}>
                <label style={labelStyle}>How did you hear about us?</label>
                <select
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleInputChange}
                  style={selectStyle}
                >
                  <option value="">Select an option</option>
                  <option value="restaurant-visit">During restaurant visit</option>
                  <option value="social-media">Social media</option>
                  <option value="friend-referral">Friend referral</option>
                  <option value="google-search">Google search</option>
                  <option value="newsletter">Email newsletter</option>
                  <option value="event-attendance">Attended an event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={formFieldStyle}>
                <label style={labelStyle}>Special Culinary Interests</label>
                <textarea
                  name="specialInterests"
                  value={formData.specialInterests}
                  onChange={handleInputChange}
                  style={{...inputStyle, height: '80px', resize: 'vertical'}}
                  placeholder="Tell us about your favorite cuisines, dietary preferences, or types of events you're most interested in..."
                />
              </div>

              <div style={{...formFieldStyle, marginBottom: '30px'}}>
                <label style={{...labelStyle, display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer'}}>
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    style={{width: 'auto', margin: 0}}
                  />
                  Subscribe to our newsletter for event updates and special offers
                </label>
              </div>

              <div style={{backgroundColor: '#fff3cd', padding: '20px', borderRadius: '10px', marginBottom: '20px', border: '1px solid #ffc107'}}>
                <h4 style={{color: '#856404', marginBottom: '10px', fontSize: '1.1rem'}}>💳 Membership Terms</h4>
                <ul style={{color: '#856404', fontSize: '0.9rem', paddingLeft: '20px', margin: 0}}>
                  <li>Annual membership fee charged upon approval</li>
                  <li>Benefits begin immediately upon payment</li>
                  <li>Membership auto-renews annually unless cancelled</li>
                  <li>30-day money-back guarantee if not satisfied</li>
                  <li>Transferable to immediate family members</li>
                </ul>
              </div>

              <button 
                type="submit" 
                style={submitButtonStyle}
                disabled={isSubmitting}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#1e4080';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#2c5aa0';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                {isSubmitting ? (
                  <span>Processing Application... ⏳</span>
                ) : (
                  'Apply for Membership'
                )}
              </button>

              {Object.keys(formErrors).length > 0 && (
                <div style={{...errorStyle, marginTop: '15px', textAlign: 'center'}}>
                  ⚠️ Please correct the errors above before submitting
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default function EventsPage() {
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [membershipButtonHovered, setMembershipButtonHovered] = useState(false);

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Special Events</h1>
      <p style={subtitleStyle}>
        Join us for exclusive culinary experiences, wine tastings, cooking classes, 
        and seasonal celebrations throughout the year. Each event is carefully crafted 
        to provide unforgettable memories and expand your culinary horizons.
      </p>

      {/* Event Program Information */}
      <div style={infoSectionStyle}>
        <div style={infoCardStyle}>
          <h3 style={cardTitleStyle}>
            <span style={{fontSize: '2rem'}}>🍷</span>
            Wine & Tasting Events
          </h3>
          <p style={{color: '#7a6b54', lineHeight: '1.5'}}>
            Explore world-class wines with our certified sommelier. From intimate tastings 
            to educational seminars, discover new favorites and perfect your palate.
          </p>
        </div>

        <div style={infoCardStyle}>
          <h3 style={cardTitleStyle}>
            <span style={{fontSize: '2rem'}}>👨‍🍳</span>
            Cooking Classes
          </h3>
          <p style={{color: '#7a6b54', lineHeight: '1.5'}}>
            Learn from our master chefs in hands-on classes. Master traditional techniques, 
            discover new cuisines, and take home recipes to impress your family and friends.
          </p>
        </div>

        <div style={infoCardStyle}>
          <h3 style={cardTitleStyle}>
            <span style={{fontSize: '2rem'}}>🎭</span>
            Entertainment Dining
          </h3>
          <p style={{color: '#7a6b54', lineHeight: '1.5'}}>
            Combine exceptional cuisine with live entertainment. From jazz brunches to 
            holiday galas, experience dining as a complete sensory journey.
          </p>
        </div>

        <div style={infoCardStyle}>
          <h3 style={cardTitleStyle}>
            <span style={{fontSize: '2rem'}}>🌟</span>
            Exclusive Experiences
          </h3>
          <p style={{color: '#7a6b54', lineHeight: '1.5'}}>
            Chef's table experiences, private dinners, and limited-time events. 
            These intimate gatherings offer unique access to our culinary team's creativity.
          </p>
        </div>
      </div>

      {/* Membership Program - NOW WITH WORKING BUTTON */}
      <div style={membershipBoxStyle}>
        <h3 style={{fontSize: '1.8rem', color: '#2c5aa0', marginBottom: '20px'}}>
          🎫 Events Membership Program
        </h3>
        <p style={{color: '#2c5aa0', marginBottom: '20px', fontSize: '1.1rem'}}>
          Join our exclusive Events Club for priority booking, member discounts, and access to 
          special members-only events throughout the year.
        </p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px'}}>
          <div style={{color: '#2c5aa0'}}>
            <strong>Benefits Include:</strong><br/>
            • 15% discount on all events<br/>
            • Priority booking access<br/>
            • Exclusive member events
          </div>
          <div style={{color: '#2c5aa0'}}>
            <strong>Membership Fee:</strong><br/>
            Starting at $99 annually<br/>
            <em>Pays for itself after 3 events!</em>
          </div>
        </div>
        <button 
          style={{
            ...membershipButtonStyle,
            ...(membershipButtonHovered ? membershipButtonHoverStyle : {})
          }}
          onMouseEnter={() => setMembershipButtonHovered(true)}
          onMouseLeave={() => setMembershipButtonHovered(false)}
          onClick={() => setShowMembershipModal(true)}
        >
          Learn More About Membership
        </button>
      </div>

      {/* Event Guidelines */}
      <div style={highlightBoxStyle}>
        <h3 style={{fontSize: '1.8rem', color: '#5a4631', marginBottom: '20px'}}>
          📋 Event Guidelines & Policies
        </h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', textAlign: 'left'}}>
          <div>
            <h4 style={{color: '#5a4631', marginBottom: '10px'}}>Registration</h4>
            <ul style={{color: '#7a6b54', paddingLeft: '20px'}}>
              <li>Online registration required</li>
              <li>Payment confirmation secures spot</li>
              <li>Confirmation email with details</li>
              <li>Calendar invite included</li>
            </ul>
          </div>
          <div>
            <h4 style={{color: '#5a4631', marginBottom: '10px'}}>Cancellation Policy</h4>
            <ul style={{color: '#7a6b54', paddingLeft: '20px'}}>
              <li>48-hour cancellation notice required</li>
              <li>Full refund for timely cancellations</li>
              <li>Transfer to future events allowed</li>
              <li>No-show policy applies</li>
            </ul>
          </div>
          <div>
            <h4 style={{color: '#5a4631', marginBottom: '10px'}}>What to Expect</h4>
            <ul style={{color: '#7a6b54', paddingLeft: '20px'}}>
              <li>Arrive 15 minutes early</li>
              <li>All materials provided</li>
              <li>Dietary accommodations available</li>
              <li>Professional photography included</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Events Component */}
      <Events />

      {/* Contact Information */}
      <div style={{
        backgroundColor: '#fff3cd',
        border: '2px solid #ffc107',
        borderRadius: '15px',
        padding: '25px',
        maxWidth: '600px',
        margin: '40px auto',
        textAlign: 'center'
      }}>
        <h3 style={{color: '#856404', marginBottom: '15px'}}>
          📞 Questions About Our Events?
        </h3>
        <p style={{color: '#856404', marginBottom: '15px'}}>
          Our events team is here to help you choose the perfect experience 
          and answer any questions about our programs.
        </p>
        <div style={{color: '#856404', fontWeight: 'bold'}}>
          <p>Events Hotline: (555) 123-EVENTS</p>
          <p>Email: events@bellavista.com</p>
          <p>Available: Tuesday-Sunday, 10 AM - 8 PM</p>
        </div>
      </div>

      {/* Membership Modal */}
      <MembershipModal 
        isOpen={showMembershipModal} 
        onClose={() => setShowMembershipModal(false)} 
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
