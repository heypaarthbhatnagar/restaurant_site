import React, { useState } from 'react';

const eventsStyle = {
  fontFamily: 'Georgia, serif',
  color: '#5a4631',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '20px',
};

const eventCardStyle = {
  backgroundColor: '#faf9f5',
  padding: '30px',
  borderRadius: '15px',
  marginBottom: '30px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  border: '2px solid #d2c9a0',
  position: 'relative',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};

const eventCardHoverStyle = {
  transform: 'translateY(-5px)',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
};

const eventHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '20px',
};

const eventTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#5a4631',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

const eventDateStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#8b4513',
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const eventDescStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.7',
  marginBottom: '20px',
  color: '#6a5c4f',
};

const eventDetailsStyle = {
  backgroundColor: '#f5f3ef',
  padding: '20px',
  borderRadius: '10px',
  marginBottom: '20px',
  border: '1px solid #e0d8c1',
};

const eventPriceStyle = {
  fontSize: '1.4rem',
  fontWeight: 'bold',
  color: '#5a4631',
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const availabilityStyle = {
  padding: '8px 16px',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  display: 'inline-block',
  marginBottom: '15px',
};

const availableStyle = {
  ...availabilityStyle,
  backgroundColor: '#d4edda',
  color: '#155724',
  border: '1px solid #c3e6cb',
};

const limitedStyle = {
  ...availabilityStyle,
  backgroundColor: '#fff3cd',
  color: '#856404',
  border: '1px solid #ffeaa7',
};

const soldOutStyle = {
  ...availabilityStyle,
  backgroundColor: '#f8d7da',
  color: '#721c24',
  border: '1px solid #f5c6cb',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const registerButtonStyle = {
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
  padding: '12px 25px',
  border: 'none',
  borderRadius: '25px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const registerButtonHoverStyle = {
  backgroundColor: '#4a3529',
  transform: 'translateY(-2px)',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
};

const disabledButtonStyle = {
  backgroundColor: '#ccc',
  color: '#666',
  cursor: 'not-allowed',
  transform: 'none',
  boxShadow: 'none',
};

const detailsButtonStyle = {
  backgroundColor: 'transparent',
  color: '#8b4513',
  padding: '8px 16px',
  border: '2px solid #8b4513',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

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
  maxWidth: '600px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  fontFamily: 'Georgia, serif',
  color: '#5a4631',
  border: '3px solid #d2c9a0',
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
  color: '#8b4513',
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
  border: '2px solid #d2c9a0',
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
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
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

const successModalStyle = {
  textAlign: 'center',
  padding: '20px',
};

const eventBadgeStyle = {
  display: 'inline-block',
  padding: '4px 12px',
  borderRadius: '15px',
  fontSize: '0.8rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  margin: '5px 5px 5px 0',
};

const popularBadgeStyle = {
  ...eventBadgeStyle,
  backgroundColor: '#ff6b35',
  color: 'white',
};

const newBadgeStyle = {
  ...eventBadgeStyle,
  backgroundColor: '#28a745',
  color: 'white',
};

const limitedBadgeStyle = {
  ...eventBadgeStyle,
  backgroundColor: '#ffc107',
  color: '#212529',
};

export default function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    specialRequests: '',
    dietaryRestrictions: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandedEvents, setExpandedEvents] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const events = [
    {
      id: 1,
      title: 'Wine Tasting Evening',
      date: 'Every Friday, 7:00 PM - 9:00 PM',
      description: 'Join our sommelier for an exclusive wine tasting featuring rare vintages from around the world. Each session includes 5 premium wines paired with artisanal cheeses and charcuterie.',
      detailedDescription: 'Our sommelier will guide you through a curated selection of wines from renowned regions including Bordeaux, Tuscany, and Napa Valley. Learn about tasting techniques, food pairings, and wine history.',
      price: '$75 per person',
      capacity: 20,
      booked: 14,
      recurring: true,
      features: ['5 Premium Wines', 'Artisan Cheese Pairing', 'Expert Sommelier', 'Wine Education'],
      duration: '2 hours',
      dressCode: 'Smart Casual',
      badges: ['popular'],
      availability: 'limited'
    },
    {
      id: 2,
      title: 'Chef\'s Table Experience',
      date: 'Saturday, June 15th, 6:30 PM',
      description: 'An intimate 7-course tasting menu prepared by our executive chef right before your eyes. Limited to 8 guests for an exclusive culinary journey featuring seasonal ingredients.',
      detailedDescription: 'Watch our executive chef create each course using seasonal, locally-sourced ingredients. Interactive experience includes cooking tips, ingredient stories, and wine pairings for each course.',
      price: '$150 per person',
      capacity: 8,
      booked: 6,
      recurring: false,
      features: ['7-Course Menu', 'Chef Interaction', 'Wine Pairings', 'Recipe Cards', 'Photos'],
      duration: '3 hours',
      dressCode: 'Business Casual',
      badges: ['limited', 'new'],
      availability: 'limited'
    },
    {
      id: 3,
      title: 'Jazz Brunch',
      date: 'Every Sunday, 11:00 AM - 3:00 PM',
      description: 'Enjoy live jazz music while indulging in our signature brunch menu. Features bottomless mimosas, eggs benedict variations, and our famous truffle french toast.',
      detailedDescription: 'Relax to smooth jazz performances by local musicians while enjoying our extensive brunch buffet. Includes unlimited mimosas, coffee, and access to our omelet station.',
      price: '$45 per person',
      capacity: 50,
      booked: 32,
      recurring: true,
      features: ['Live Jazz Music', 'Bottomless Mimosas', 'Brunch Buffet', 'Omelet Station', 'Coffee Bar'],
      duration: '4 hours',
      dressCode: 'Casual',
      badges: ['popular'],
      availability: 'available'
    },
    {
      id: 4,
      title: 'Cooking Class: Italian Classics',
      date: 'Thursday, June 27th, 6:00 PM - 9:00 PM',
      description: 'Learn to prepare authentic Italian dishes from our head chef. Includes hands-on preparation of pasta, risotto, and tiramisu. Take home recipes and enjoy the fruits of your labor.',
      detailedDescription: 'Master the art of Italian cooking with hands-on instruction. Learn to make fresh pasta from scratch, perfect risotto technique, and traditional tiramisu. All participants receive a recipe booklet and apron.',
      price: '$95 per person',
      capacity: 12,
      booked: 8,
      recurring: false,
      features: ['Hands-on Cooking', 'Recipe Booklet', 'Take-home Apron', 'Full Dinner', 'Wine Included'],
      duration: '3 hours',
      dressCode: 'Comfortable Clothes',
      badges: ['popular'],
      availability: 'available'
    },
    {
      id: 5,
      title: 'New Year\'s Eve Gala',
      date: 'December 31st, 2025, 8:00 PM - 1:00 AM',
      description: 'Ring in the new year with an elegant 5-course dinner, champagne toast at midnight, live music, and dancing. Formal attire recommended.',
      detailedDescription: 'An unforgettable New Year\'s celebration featuring a 5-course tasting menu, premium champagne toast, live entertainment, dancing, and party favors. Professional photographer included.',
      price: '$200 per person',
      capacity: 80,
      booked: 65,
      recurring: false,
      features: ['5-Course Dinner', 'Premium Champagne', 'Live Entertainment', 'Dancing', 'Photography', 'Party Favors'],
      duration: '5 hours',
      dressCode: 'Formal/Black Tie',
      badges: ['limited'],
      availability: 'limited'
    },
    {
      id: 6,
      title: 'Chocolate & Wine Pairing',
      date: 'Saturday, July 12th, 3:00 PM - 5:00 PM',
      description: 'Discover the perfect harmony between premium chocolates and wines. Our chocolatier and sommelier will guide you through 6 exquisite pairings.',
      detailedDescription: 'Indulge in the art of chocolate and wine pairing with our expert chocolatier and sommelier. Learn about flavor profiles, texture combinations, and take home artisan chocolates.',
      price: '$65 per person',
      capacity: 16,
      booked: 3,
      recurring: false,
      features: ['6 Chocolate-Wine Pairings', 'Expert Guidance', 'Take-home Chocolates', 'Tasting Notes'],
      duration: '2 hours',
      dressCode: 'Casual',
      badges: ['new'],
      availability: 'available'
    }
  ];

  const getAvailabilityDisplay = (event) => {
    const spotsLeft = event.capacity - event.booked;
    if (spotsLeft === 0) {
      return { style: soldOutStyle, text: 'Sold Out', icon: '❌' };
    } else if (spotsLeft <= 3) {
      return { style: limitedStyle, text: `Only ${spotsLeft} spots left!`, icon: '⚠️' };
    } else {
      return { style: availableStyle, text: `${spotsLeft} spots available`, icon: '✅' };
    }
  };

  const getBadges = (badges) => {
    return badges.map(badge => {
      switch (badge) {
        case 'popular':
          return <span key={badge} style={popularBadgeStyle}>🔥 Popular</span>;
        case 'new':
          return <span key={badge} style={newBadgeStyle}>✨ New</span>;
        case 'limited':
          return <span key={badge} style={limitedBadgeStyle}>⏰ Limited Time</span>;
        default:
          return null;
      }
    });
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '1',
      specialRequests: '',
      dietaryRestrictions: ''
    });
    setFormErrors({});
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const toggleEventDetails = (eventId) => {
    setExpandedEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
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
    
    if (!formData.guests || isNaN(formData.guests) || Number(formData.guests) < 1) {
      errors.guests = 'Please enter a valid number of guests';
    } else {
      const availableSpots = selectedEvent.capacity - selectedEvent.booked;
      if (Number(formData.guests) > availableSpots) {
        errors.guests = `Only ${availableSpots} spots available`;
      }
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      // Simulate successful registration
      setTimeout(() => {
        setFormSubmitted(true);
        // Update event booking count
        selectedEvent.booked += Number(formData.guests);
      }, 1000);
    }
  };

  const getInputStyle = (fieldName) => {
    return formErrors[fieldName] ? inputErrorStyle : inputStyle;
  };

  return (
    <div style={eventsStyle}>
      {events.map((event) => {
        const availability = getAvailabilityDisplay(event);
        const isExpanded = expandedEvents[event.id];
        const isSoldOut = (event.capacity - event.booked) === 0;

        return (
          <div 
            key={event.id} 
            style={{
              ...eventCardStyle,
              ...(hoveredCard === event.id ? eventCardHoverStyle : {})
            }}
            onMouseEnter={() => setHoveredCard(event.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={eventHeaderStyle}>
              <div style={{flex: 1}}>
                <h3 style={eventTitleStyle}>{event.title}</h3>
                <div style={{marginBottom: '15px'}}>
                  {getBadges(event.badges)}
                </div>
                <div style={eventDateStyle}>
                  📅 {event.date}
                </div>
              </div>
              <div style={availability.style}>
                {availability.icon} {availability.text}
              </div>
            </div>

            <p style={eventDescStyle}>{event.description}</p>

            {isExpanded && (
              <div style={eventDetailsStyle}>
                <h4 style={{color: '#5a4631', marginBottom: '15px'}}>Event Details</h4>
                <p style={{marginBottom: '15px', color: '#6a5c4f'}}>{event.detailedDescription}</p>
                
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '15px'}}>
                  <div>
                    <strong>Duration:</strong> {event.duration}<br/>
                    <strong>Capacity:</strong> {event.capacity} guests<br/>
                    <strong>Dress Code:</strong> {event.dressCode}
                  </div>
                  <div>
                    <strong>What's Included:</strong>
                    <ul style={{margin: '5px 0', paddingLeft: '20px'}}>
                      {event.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div style={eventPriceStyle}>
              💰 {event.price}
            </div>

            <div style={buttonContainerStyle}>
              <button
                style={{
                  ...registerButtonStyle,
                  ...(hoveredButton === `register-${event.id}` ? registerButtonHoverStyle : {}),
                  ...(isSoldOut ? disabledButtonStyle : {})
                }}
                onMouseEnter={() => setHoveredButton(`register-${event.id}`)}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => openModal(event)}
                disabled={isSoldOut}
              >
                {isSoldOut ? 'Sold Out' : 'Register Now'}
              </button>
              
              <button
                style={{
                  ...detailsButtonStyle,
                  ...(hoveredButton === `details-${event.id}` ? {backgroundColor: '#8b4513', color: '#f5f5dc'} : {})
                }}
                onMouseEnter={() => setHoveredButton(`details-${event.id}`)}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => toggleEventDetails(event.id)}
              >
                {isExpanded ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
          </div>
        );
      })}

      {modalOpen && selectedEvent && (
        <div style={modalOverlayStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
            <button 
              style={closeButtonStyle} 
              onClick={closeModal}
              onMouseEnter={(e) => e.target.style.color = '#5a4631'}
              onMouseLeave={(e) => e.target.style.color = '#8b4513'}
            >
              ×
            </button>
            
            {formSubmitted ? (
              <div style={successModalStyle}>
                <h2 style={{color: '#28a745', marginBottom: '20px'}}>🎉 Registration Successful!</h2>
                <p style={{fontSize: '1.1rem', marginBottom: '15px'}}>
                  Thank you for registering for <strong>{selectedEvent.title}</strong>!
                </p>
                <div style={{backgroundColor: '#d4edda', padding: '20px', borderRadius: '10px', margin: '20px 0', border: '1px solid #c3e6cb'}}>
                  <h4 style={{color: '#155724', marginBottom: '10px'}}>What's Next?</h4>
                  <ul style={{textAlign: 'left', color: '#155724', paddingLeft: '20px'}}>
                    <li>Confirmation email sent to {formData.email}</li>
                    <li>Event details and location information included</li>
                    <li>Payment instructions (if applicable)</li>
                    <li>Calendar invite attached</li>
                  </ul>
                </div>
                <p style={{fontSize: '0.9rem', color: '#6c757d', marginBottom: '20px'}}>
                  For questions, call us at (555) 123-4567
                </p>
                <button 
                  style={submitButtonStyle}
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 style={{marginBottom: '20px', textAlign: 'center'}}>
                  Register for {selectedEvent.title}
                </h2>
                
                <div style={{backgroundColor: '#f8f6f0', padding: '15px', borderRadius: '8px', marginBottom: '25px'}}>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '0.9rem'}}>
                    <div><strong>Date:</strong> {selectedEvent.date}</div>
                    <div><strong>Duration:</strong> {selectedEvent.duration}</div>
                    <div><strong>Price:</strong> {selectedEvent.price}</div>
                    <div><strong>Available Spots:</strong> {selectedEvent.capacity - selectedEvent.booked}</div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                    <div style={formFieldStyle}>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={getInputStyle('name')}
                        placeholder="Enter your full name"
                      />
                      {formErrors.name && <div style={errorStyle}>⚠️ {formErrors.name}</div>}
                    </div>

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
                  </div>

                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
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

                    <div style={formFieldStyle}>
                      <label style={labelStyle}>Number of Guests *</label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        style={getInputStyle('guests')}
                      >
                        {Array.from({length: Math.min(8, selectedEvent.capacity - selectedEvent.booked)}, (_, i) => i + 1).map(num => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                      {formErrors.guests && <div style={errorStyle}>⚠️ {formErrors.guests}</div>}
                    </div>
                  </div>

                  <div style={formFieldStyle}>
                    <label style={labelStyle}>Dietary Restrictions</label>
                    <input
                      type="text"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleInputChange}
                      style={inputStyle}
                      placeholder="Allergies, vegetarian, vegan, etc."
                    />
                  </div>

                  <div style={formFieldStyle}>
                    <label style={labelStyle}>Special Requests</label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      style={{...inputStyle, height: '80px', resize: 'vertical'}}
                      placeholder="Any special requests or questions?"
                    />
                  </div>

                  <div style={{backgroundColor: '#e7f3ff', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #b3d9ff'}}>
                    <h4 style={{color: '#0066cc', marginBottom: '8px', fontSize: '1rem'}}>Registration Policy</h4>
                    <p style={{color: '#0066cc', fontSize: '0.9rem', margin: 0}}>
                      Registration confirmation will be sent via email. Cancellations must be made 48 hours in advance. 
                      Payment instructions will be included in your confirmation email.
                    </p>
                  </div>

                  <button 
                    type="submit" 
                    style={submitButtonStyle}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#4a3529';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#5a4631';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Complete Registration
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

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
