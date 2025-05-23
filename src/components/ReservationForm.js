import React, { useState } from 'react';

const formStyle = {
  maxWidth: '700px',
  margin: '0 auto',
  padding: '40px',
  backgroundColor: '#faf9f5',
  borderRadius: '15px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
  fontFamily: 'Georgia, serif',
  color: '#5a4631',
  border: '2px solid #d2c9a0',
};

const fieldStyle = {
  marginBottom: '25px',
};

const gridFieldStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  marginBottom: '25px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
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
  transition: 'all 0.3s ease',
  boxSizing: 'border-box',
};

const inputErrorStyle = {
  ...inputStyle,
  borderColor: '#dc3545',
  backgroundColor: '#fff5f5',
};

const inputSuccessStyle = {
  ...inputStyle,
  borderColor: '#28a745',
  backgroundColor: '#f8fff8',
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

const buttonStyle = {
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
  padding: '18px 35px',
  border: 'none',
  borderRadius: '25px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  width: '100%',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontFamily: 'Georgia, serif',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const buttonHoverStyle = {
  backgroundColor: '#4a3529',
  transform: 'translateY(-2px)',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
};

const errorStyle = {
  color: '#dc3545',
  fontSize: '0.9rem',
  marginTop: '5px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
};

const successStyle = {
  color: '#28a745',
  fontSize: '0.9rem',
  marginTop: '5px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
};

const confirmationStyle = {
  backgroundColor: '#d4edda',
  border: '2px solid #c3e6cb',
  borderRadius: '10px',
  padding: '25px',
  marginTop: '20px',
  textAlign: 'center',
  color: '#155724',
};

const loadingStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
};

const availabilityStyle = {
  padding: '15px',
  borderRadius: '8px',
  marginTop: '10px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
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

const unavailableStyle = {
  ...availabilityStyle,
  backgroundColor: '#f8d7da',
  color: '#721c24',
  border: '1px solid #f5c6cb',
};

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    seatingPreference: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [validFields, setValidFields] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [availability, setAvailability] = useState(null);
  const [buttonHovered, setButtonHovered] = useState(false);

  // Get today's date for date input minimum
  const today = new Date().toISOString().split('T')[0];

  // Simulate availability checking
  const checkAvailability = (date, time, guests) => {
    if (!date || !time || !guests) return null;
    
    // Simulate different availability scenarios
    const random = Math.random();
    if (random > 0.7) {
      return { status: 'available', message: 'Great! This time slot is available.' };
    } else if (random > 0.4) {
      return { status: 'limited', message: 'Limited availability - we recommend booking soon.' };
    } else {
      return { status: 'unavailable', message: 'This time slot is fully booked. Please try a different time.' };
    }
  };

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = '⚠️ Full name is required';
        else if (value.trim().length < 2) error = '⚠️ Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) {
          error = '⚠️ Email address is required';
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) error = '⚠️ Please enter a valid email address';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = '⚠️ Phone number is required';
        } else {
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
          const cleanPhone = value.replace(/[\s\-\(\)]/g, '');
          if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
            error = '⚠️ Please enter a valid phone number';
          }
        }
        break;
      case 'date':
        if (!value) {
          error = '⚠️ Please select a date';
        } else {
          const selectedDate = new Date(value);
          const today = new Date();
          if (selectedDate < today) {
            error = '⚠️ Please select a future date';
          }
        }
        break;
      case 'time':
        if (!value) error = '⚠️ Please select a time';
        break;
      case 'guests':
        if (!value) error = '⚠️ Please select number of guests';
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    // Mark field as valid if no error
    setValidFields(prev => ({
      ...prev,
      [name]: !error
    }));

    // Check availability when date, time, or guests change
    if (['date', 'time', 'guests'].includes(name)) {
      const updatedData = { ...formData, [name]: value };
      const availabilityResult = checkAvailability(updatedData.date, updatedData.time, updatedData.guests);
      setAvailability(availabilityResult);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const fields = ['name', 'email', 'phone', 'date', 'time', 'guests'];
    
    fields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (availability?.status === 'unavailable') {
      alert('Please select a different time slot as this one is fully booked.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        seatingPreference: '',
        specialRequests: ''
      });
      setErrors({});
      setValidFields({});
      setAvailability(null);
    }, 2000);
  };

  const getInputStyle = (fieldName) => {
    if (errors[fieldName]) return inputErrorStyle;
    if (validFields[fieldName]) return inputSuccessStyle;
    return inputStyle;
  };

  const renderAvailability = () => {
    if (!availability) return null;

    const style = availability.status === 'available' ? availableStyle :
                  availability.status === 'limited' ? limitedStyle : unavailableStyle;

    const icon = availability.status === 'available' ? '✅' :
                 availability.status === 'limited' ? '⚠️' : '❌';

    return (
      <div style={style}>
        {icon} {availability.message}
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <div style={confirmationStyle}>
        <h2 style={{marginBottom: '20px', color: '#155724'}}>🎉 Reservation Request Submitted!</h2>
        <p style={{fontSize: '1.1rem', marginBottom: '15px'}}>
          Thank you, <strong>{formData.name || 'valued guest'}</strong>! Your reservation request has been received.
        </p>
        <div style={{backgroundColor: '#fff', padding: '20px', borderRadius: '8px', margin: '20px 0'}}>
          <h3 style={{color: '#5a4631', marginBottom: '10px'}}>What's Next?</h3>
          <ul style={{textAlign: 'left', color: '#155724', paddingLeft: '20px'}}>
            <li>You'll receive a confirmation email within 15 minutes</li>
            <li>Our team will call you within 2 hours to confirm details</li>
            <li>For immediate assistance, call us at (555) 123-4567</li>
          </ul>
        </div>
        <button 
          onClick={() => setIsSubmitted(false)}
          style={{...buttonStyle, width: 'auto', padding: '12px 25px'}}
        >
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <form style={formStyle} onSubmit={handleSubmit} noValidate>
      <div style={{textAlign: 'center', marginBottom: '30px'}}>
        <h2 style={{color: '#5a4631', marginBottom: '10px'}}>📅 Reserve Your Table</h2>
        <p style={{color: '#7a6b54', fontStyle: 'italic'}}>
          Complete the form below and we'll confirm your reservation within 2 hours
        </p>
      </div>

      <div style={gridFieldStyle}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={getInputStyle('name')}
            placeholder="Enter your full name"
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && <div style={errorStyle}>{errors.name}</div>}
          {validFields.name && <div style={successStyle}>✅ Looks good!</div>}
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={getInputStyle('email')}
            placeholder="your.email@example.com"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}
          {validFields.email && <div style={successStyle}>✅ Valid email</div>}
        </div>
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Phone Number *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={getInputStyle('phone')}
          placeholder="(555) 123-4567"
          aria-invalid={errors.phone ? 'true' : 'false'}
        />
        {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
        {validFields.phone && <div style={successStyle}>✅ Valid phone number</div>}
      </div>

      <div style={gridFieldStyle}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Preferred Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={getInputStyle('date')}
            min={today}
            aria-invalid={errors.date ? 'true' : 'false'}
          />
          {errors.date && <div style={errorStyle}>{errors.date}</div>}
          {validFields.date && <div style={successStyle}>✅ Date selected</div>}
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Preferred Time *</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            style={getInputStyle('time')}
            aria-invalid={errors.time ? 'true' : 'false'}
          >
            <option value="">Select Time</option>
            <optgroup label="Lunch Service">
              <option value="11:30">11:30 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="13:30">1:30 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="14:30">2:30 PM</option>
            </optgroup>
            <optgroup label="Dinner Service">
              <option value="17:00">5:00 PM</option>
              <option value="17:30">5:30 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="18:30">6:30 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="19:30">7:30 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="20:30">8:30 PM</option>
              <option value="21:00">9:00 PM</option>
            </optgroup>
          </select>
          {errors.time && <div style={errorStyle}>{errors.time}</div>}
          {validFields.time && <div style={successStyle}>✅ Time selected</div>}
        </div>
      </div>

      {renderAvailability()}

      <div style={gridFieldStyle}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Number of Guests *</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            style={getInputStyle('guests')}
            aria-invalid={errors.guests ? 'true' : 'false'}
          >
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
                {num > 6 && ' (Deposit Required)'}
              </option>
            ))}
            <option value="12+">12+ Guests (Call Required)</option>
          </select>
          {errors.guests && <div style={errorStyle}>{errors.guests}</div>}
          {validFields.guests && <div style={successStyle}>✅ Party size confirmed</div>}
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Special Occasion</label>
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            style={selectStyle}
          >
            <option value="">Select Occasion (Optional)</option>
            <option value="birthday">Birthday Celebration</option>
            <option value="anniversary">Anniversary</option>
            <option value="date-night">Date Night</option>
            <option value="business">Business Dinner</option>
            <option value="celebration">General Celebration</option>
            <option value="proposal">Proposal</option>
            <option value="other">Other Special Event</option>
          </select>
        </div>
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Seating Preference</label>
        <select
          name="seatingPreference"
          value={formData.seatingPreference}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">No Preference</option>
          <option value="window">Window Table</option>
          <option value="booth">Booth Seating</option>
          <option value="bar">Bar Seating</option>
          <option value="private">Private Dining Room</option>
          <option value="patio">Outdoor Patio (Weather Permitting)</option>
          <option value="quiet">Quiet Area</option>
        </select>
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Special Requests & Dietary Restrictions</label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          style={{...inputStyle, height: '120px', resize: 'vertical'}}
          placeholder="Tell us about dietary restrictions, allergies, special accommodations, or any other requests to make your dining experience perfect..."
        />
      </div>

      <div style={{backgroundColor: '#f8f6f0', padding: '20px', borderRadius: '8px', marginBottom: '25px', border: '1px solid #e0d8c1'}}>
        <h4 style={{color: '#5a4631', marginBottom: '10px', fontSize: '1.1rem'}}>📋 Important Information</h4>
        <ul style={{color: '#7a6b54', paddingLeft: '20px', margin: 0}}>
          <li>Reservations are confirmed within 2 hours</li>
          <li>Parties of 6+ require a $25/person deposit</li>
          <li>Cancellations must be made 24 hours in advance</li>
          <li>For same-day reservations, please call (555) 123-4567</li>
        </ul>
      </div>

      <button 
        type="submit" 
        style={buttonHovered ? {...buttonStyle, ...buttonHoverStyle} : buttonStyle}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div style={loadingStyle}>
            <span>Processing Reservation...</span>
            <span>⏳</span>
          </div>
        ) : (
          'Confirm Reservation Request'
        )}
      </button>

      {Object.keys(errors).length > 0 && (
        <div style={{...errorStyle, marginTop: '15px', textAlign: 'center'}}>
          ⚠️ Please correct the errors above before submitting
        </div>
      )}
    </form>
  );
}
