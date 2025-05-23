import React, { useState } from 'react';
import EnhancedMenu from '../components/Menu';

// Modal Styles
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  padding: '20px',
};

const modalContentStyle = {
  backgroundColor: '#faf9f5',
  padding: '40px',
  borderRadius: '15px',
  maxWidth: '600px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  border: '3px solid #d2c9a0',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  fontFamily: 'Georgia, serif',
  color: '#5a4631',
};

const modalHeaderStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '25px',
  color: '#5a4631',
  textTransform: 'uppercase',
  letterSpacing: '2px',
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
  padding: '12px',
  border: '2px solid #d2c9a0',
  borderRadius: '5px',
  fontSize: '1rem',
  fontFamily: 'Georgia, serif',
  backgroundColor: '#fff',
  transition: 'border-color 0.3s ease',
};

const textareaStyle = {
  ...inputStyle,
  height: '100px',
  resize: 'vertical',
};

const selectStyle = {
  ...inputStyle,
  appearance: 'none',
  backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6,9 12,15 18,9\'%3e%3c/polyline%3e%3c/svg%3e")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 12px center',
  backgroundSize: '20px',
};

const submitButtonStyle = {
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
  padding: '15px 30px',
  border: 'none',
  borderRadius: '25px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  width: '100%',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontFamily: 'Georgia, serif',
};

const classCardStyle = {
  backgroundColor: '#f8f6f0',
  border: '2px solid #d2c9a0',
  borderRadius: '10px',
  padding: '20px',
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
};

const classTitleStyle = {
  fontSize: '1.3rem',
  fontWeight: 'bold',
  color: '#5a4631',
  marginBottom: '10px',
};

const classInfoStyle = {
  fontSize: '0.95rem',
  color: '#7a6b54',
  marginBottom: '8px',
};

const enrollButtonStyle = {
  backgroundColor: '#8b4513',
  color: '#f5f5dc',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '15px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  fontFamily: 'Georgia, serif',
  marginTop: '10px',
};

// Private Chef Service Modal Component
const PrivateChefModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    budgetRange: '',
    cuisinePreference: '',
    dietaryRestrictions: '',
    eventDetails: '',
    preferredContact: 'email'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! Our private chef coordinator will contact you within 24 hours to discuss your event details and provide a custom quote.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      guestCount: '',
      budgetRange: '',
      cuisinePreference: '',
      dietaryRestrictions: '',
      eventDetails: '',
      preferredContact: 'email'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose}>×</button>
        
        <h2 style={modalHeaderStyle}>🏠 Private Chef Service</h2>
        
        <div style={{marginBottom: '25px', textAlign: 'center', padding: '20px', backgroundColor: '#f5f5dc', borderRadius: '8px'}}>
          <h3 style={{color: '#5a4631', marginBottom: '15px'}}>Service Packages</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', fontSize: '0.9rem'}}>
            <div>
              <strong>Intimate Dinner (2-6 guests)</strong><br/>
              Starting at $300
            </div>
            <div>
              <strong>Family Gathering (7-12 guests)</strong><br/>
              Starting at $500
            </div>
            <div>
              <strong>Special Events (13+ guests)</strong><br/>
              Custom pricing
            </div>
          </div>
          <p style={{marginTop: '15px', fontSize: '0.85rem', fontStyle: 'italic'}}>
            *Includes menu planning, shopping, preparation, service, and cleanup
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
            <div style={formFieldStyle}>
              <label style={labelStyle}>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={formFieldStyle}>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
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
                style={inputStyle}
                required
              />
            </div>

            <div style={formFieldStyle}>
              <label style={labelStyle}>Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
            <div style={formFieldStyle}>
              <label style={labelStyle}>Event Type *</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                style={selectStyle}
                required
              >
                <option value="">Select Event Type</option>
                <option value="romantic-dinner">Romantic Dinner</option>
                <option value="family-gathering">Family Gathering</option>
                <option value="birthday-party">Birthday Party</option>
                <option value="anniversary">Anniversary</option>
                <option value="business-dinner">Business Dinner</option>
                <option value="holiday-celebration">Holiday Celebration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={formFieldStyle}>
              <label style={labelStyle}>Number of Guests *</label>
              <select
                name="guestCount"
                value={formData.guestCount}
                onChange={handleInputChange}
                style={selectStyle}
                required
              >
                <option value="">Select Guest Count</option>
                {[...Array(20)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1} {i === 0 ? 'Guest' : 'Guests'}</option>
                ))}
                <option value="20+">20+ Guests</option>
              </select>
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
            <div style={formFieldStyle}>
              <label style={labelStyle}>Budget Range</label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleInputChange}
                style={selectStyle}
              >
                <option value="">Select Budget Range</option>
                <option value="300-500">$300 - $500</option>
                <option value="500-750">$500 - $750</option>
                <option value="750-1000">$750 - $1,000</option>
                <option value="1000-1500">$1,000 - $1,500</option>
                <option value="1500+">$1,500+</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div style={formFieldStyle}>
              <label style={labelStyle}>Cuisine Preference</label>
              <select
                name="cuisinePreference"
                value={formData.cuisinePreference}
                onChange={handleInputChange}
                style={selectStyle}
              >
                <option value="">Select Cuisine</option>
                <option value="italian">Italian</option>
                <option value="french">French</option>
                <option value="american">American</option>
                <option value="mediterranean">Mediterranean</option>
                <option value="asian-fusion">Asian Fusion</option>
                <option value="seafood">Seafood Focus</option>
                <option value="mixed">Mixed Menu</option>
                <option value="surprise">Chef's Choice</option>
              </select>
            </div>
          </div>

          <div style={formFieldStyle}>
            <label style={labelStyle}>Dietary Restrictions / Allergies</label>
            <input
              type="text"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Vegetarian, gluten-free, nut allergies, etc."
            />
          </div>

          <div style={formFieldStyle}>
            <label style={labelStyle}>Event Details & Special Requests</label>
            <textarea
              name="eventDetails"
              value={formData.eventDetails}
              onChange={handleInputChange}
              style={textareaStyle}
              placeholder="Tell us about your event, special occasions, theme, or any specific requests..."
            />
          </div>

          <div style={formFieldStyle}>
            <label style={labelStyle}>Preferred Contact Method</label>
            <select
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleInputChange}
              style={selectStyle}
            >
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="text">Text Message</option>
            </select>
          </div>

          <button type="submit" style={submitButtonStyle}>
            Request Custom Quote
          </button>
        </form>
      </div>
    </div>
  );
};

// Culinary Classes Modal Component
const CulinaryClassesModal = ({ isOpen, onClose }) => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [enrollmentForm, setEnrollmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    specialRequests: ''
  });

  const classes = [
    {
      id: 1,
      title: 'Italian Classics Masterclass',
      date: 'June 15, 2025',
      time: '6:00 PM - 9:00 PM',
      duration: '3 hours',
      price: '$125',
      instructor: 'Chef Marco Romano',
      maxStudents: 12,
      currentEnrolled: 8,
      description: 'Learn to make authentic pasta from scratch, traditional risotto, and classic tiramisu. Includes wine pairings and take-home recipes.',
      whatYouLearn: [
        'Hand-rolled pasta techniques',
        'Perfect risotto cooking method',
        'Traditional tiramisu preparation',
        'Italian wine pairing principles'
      ],
      includes: 'All ingredients, wine tastings, printed recipes, and dinner'
    },
    {
      id: 2,
      title: 'French Pastry & Desserts',
      date: 'June 22, 2025',
      time: '10:00 AM - 2:00 PM',
      duration: '4 hours',
      price: '$145',
      instructor: 'Chef Isabelle Dubois',
      maxStudents: 10,
      currentEnrolled: 6,
      description: 'Master the art of French pastry with croissants, éclairs, and crème brûlée. Perfect for aspiring bakers and dessert enthusiasts.',
      whatYouLearn: [
        'Laminated dough for croissants',
        'Choux pastry for éclairs',
        'Classic crème brûlée technique',
        'French pastry cream preparation'
      ],
      includes: 'All ingredients, pastry tools use, recipe booklet, and tasting lunch'
    },
    {
      id: 3,
      title: 'Seafood Mastery Workshop',
      date: 'June 29, 2025',
      time: '5:00 PM - 8:30 PM',
      duration: '3.5 hours',
      price: '$165',
      instructor: 'Chef Alexandra Martinez',
      maxStudents: 8,
      currentEnrolled: 3,
      description: 'From selecting fresh seafood to advanced cooking techniques. Learn to prepare scallops, salmon, and whole fish with confidence.',
      whatYouLearn: [
        'Seafood selection and freshness',
        'Proper filleting techniques',
        'Pan-searing and grilling methods',
        'Sauce pairing for seafood'
      ],
      includes: 'Premium seafood, all ingredients, knife skills, and full dinner'
    },
    {
      id: 4,
      title: 'Wine & Food Pairing Seminar',
      date: 'July 6, 2025',
      time: '7:00 PM - 10:00 PM',
      duration: '3 hours',
      price: '$95',
      instructor: 'Sommelier James Chen',
      maxStudents: 16,
      currentEnrolled: 12,
      description: 'Discover the secrets of perfect wine and food combinations. Taste 6 wines with carefully paired small plates.',
      whatYouLearn: [
        'Wine tasting fundamentals',
        'Pairing principles and rules',
        'Regional wine characteristics',
        'Hosting wine dinner parties'
      ],
      includes: '6 wine tastings, paired appetizers, tasting notes, and wine guide'
    },
    {
      id: 5,
      title: 'Advanced Knife Skills',
      date: 'July 13, 2025',
      time: '11:00 AM - 2:00 PM',
      duration: '3 hours',
      price: '$85',
      instructor: 'Chef David Kim',
      maxStudents: 8,
      currentEnrolled: 5,
      description: 'Master professional knife techniques for faster, safer, and more precise cooking. Suitable for all skill levels.',
      whatYouLearn: [
        'Proper knife selection and care',
        'Basic to advanced cutting techniques',
        'Speed and precision training',
        'Kitchen safety protocols'
      ],
      includes: 'Professional knife use, cutting boards, practice ingredients, and lunch'
    },
    {
      id: 6,
      title: 'Plant-Based Gourmet',
      date: 'July 20, 2025',
      time: '6:00 PM - 9:00 PM',
      duration: '3 hours',
      price: '$115',
      instructor: 'Chef Sarah Green',
      maxStudents: 12,
      currentEnrolled: 7,
      description: 'Create sophisticated plant-based dishes that rival any traditional cuisine. Perfect for vegans and those looking to eat more plants.',
      whatYouLearn: [
        'Protein-rich plant combinations',
        'Advanced vegetable preparation',
        'Plant-based sauce mastery',
        'Meat substitute techniques'
      ],
      includes: 'All organic ingredients, recipe collection, and full vegan dinner'
    }
  ];

  const handleEnrollmentChange = (e) => {
    setEnrollmentForm({
      ...enrollmentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleEnrollment = (e) => {
    e.preventDefault();
    alert(`Thank you for enrolling in "${selectedClass.title}"! You will receive a confirmation email with payment instructions and class details within 1 hour.`);
    setEnrollmentForm({
      name: '',
      email: '',
      phone: '',
      experience: '',
      specialRequests: ''
    });
    setSelectedClass(null);
  };

  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={{...modalContentStyle, maxWidth: '900px'}} onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose}>×</button>
        
        <h2 style={modalHeaderStyle}>👩‍🍳 Culinary Classes</h2>

        {!selectedClass ? (
          <div>
            <div style={{textAlign: 'center', marginBottom: '30px', padding: '20px', backgroundColor: '#f5f5dc', borderRadius: '10px'}}>
              <h3 style={{color: '#5a4631', marginBottom: '10px'}}>Join Our Culinary Academy</h3>
              <p style={{color: '#7a6b54', margin: 0}}>
                Learn from our master chefs in hands-on classes designed for all skill levels. 
                Each class includes all ingredients, equipment, recipes, and a delicious meal.
              </p>
            </div>

            <div style={{display: 'grid', gap: '20px'}}>
              {classes.map((classItem) => (
                <div key={classItem.id} style={classCardStyle}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px'}}>
                    <div style={{flex: 1}}>
                      <h3 style={classTitleStyle}>{classItem.title}</h3>
                      <p style={classInfoStyle}>👨‍🍳 <strong>Instructor:</strong> {classItem.instructor}</p>
                      <p style={classInfoStyle}>📅 <strong>Date:</strong> {classItem.date}</p>
                      <p style={classInfoStyle}>🕰️ <strong>Time:</strong> {classItem.time} ({classItem.duration})</p>
                      <p style={classInfoStyle}>👥 <strong>Spots Available:</strong> {classItem.maxStudents - classItem.currentEnrolled} of {classItem.maxStudents}</p>
                    </div>
                    <div style={{textAlign: 'right', minWidth: '120px'}}>
                      <div style={{fontSize: '1.4rem', fontWeight: 'bold', color: '#8b4513', marginBottom: '10px'}}>
                        {classItem.price}
                      </div>
                      <button 
                        style={enrollButtonStyle}
                        onClick={() => setSelectedClass(classItem)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#654832'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#8b4513'}
                        disabled={classItem.currentEnrolled >= classItem.maxStudents}
                      >
                        {classItem.currentEnrolled >= classItem.maxStudents ? 'Full' : 'Enroll Now'}
                      </button>
                    </div>
                  </div>
                  
                  <p style={{...classInfoStyle, marginBottom: '15px'}}>{classItem.description}</p>
                  
                  <div style={{backgroundColor: '#f8f6f0', padding: '15px', borderRadius: '8px', border: '1px solid #e0d8c1'}}>
                    <h4 style={{color: '#5a4631', marginBottom: '8px', fontSize: '1rem'}}>What You'll Learn:</h4>
                    <ul style={{margin: 0, paddingLeft: '20px', color: '#7a6b54'}}>
                      {classItem.whatYouLearn.map((item, index) => (
                        <li key={index} style={{marginBottom: '4px'}}>{item}</li>
                      ))}
                    </ul>
                    <p style={{...classInfoStyle, marginTop: '10px', marginBottom: 0}}>
                      <strong>Includes:</strong> {classItem.includes}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{textAlign: 'center', marginTop: '30px', padding: '20px', backgroundColor: '#fff3cd', borderRadius: '10px', border: '2px solid #ffc107'}}>
              <h4 style={{color: '#856404', marginBottom: '10px'}}>💡 Private Group Classes Available</h4>
              <p style={{color: '#856404', margin: 0}}>
                Want to book a private class for your group? We offer customized classes for 6+ people. 
                Perfect for team building, birthday parties, or special celebrations!
              </p>
            </div>
          </div>
        ) : (
          <div>
            <button 
              style={{marginBottom: '20px', background: 'none', border: 'none', color: '#8b4513', cursor: 'pointer', fontSize: '1rem'}}
              onClick={() => setSelectedClass(null)}
            >
              ← Back to Classes
            </button>
            
            <h3 style={{color: '#5a4631', marginBottom: '20px'}}>Enroll in: {selectedClass.title}</h3>
            
            <div style={{backgroundColor: '#f8f6f0', padding: '20px', borderRadius: '10px', marginBottom: '25px'}}>
              <p><strong>Date:</strong> {selectedClass.date}</p>
              <p><strong>Time:</strong> {selectedClass.time}</p>
              <p><strong>Duration:</strong> {selectedClass.duration}</p>
              <p><strong>Price:</strong> {selectedClass.price}</p>
              <p><strong>Instructor:</strong> {selectedClass.instructor}</p>
            </div>

            <form onSubmit={handleEnrollment}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                <div style={formFieldStyle}>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={enrollmentForm.name}
                    onChange={handleEnrollmentChange}
                    style={inputStyle}
                    required
                  />
                </div>

                <div style={formFieldStyle}>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={enrollmentForm.email}
                    onChange={handleEnrollmentChange}
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              <div style={formFieldStyle}>
                <label style={labelStyle}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={enrollmentForm.phone}
                  onChange={handleEnrollmentChange}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={formFieldStyle}>
                <label style={labelStyle}>Cooking Experience Level</label>
                <select
                  name="experience"
                  value={enrollmentForm.experience}
                  onChange={handleEnrollmentChange}
                  style={selectStyle}
                >
                  <option value="">Select Experience Level</option>
                  <option value="beginner">Beginner - Just starting out</option>
                  <option value="intermediate">Intermediate - Some cooking experience</option>
                  <option value="advanced">Advanced - Experienced home cook</option>
                  <option value="professional">Professional - Culinary background</option>
                </select>
              </div>

              <div style={formFieldStyle}>
                <label style={labelStyle}>Special Requests or Dietary Restrictions</label>
                <textarea
                  name="specialRequests"
                  value={enrollmentForm.specialRequests}
                  onChange={handleEnrollmentChange}
                  style={textareaStyle}
                  placeholder="Any allergies, dietary restrictions, or special accommodations needed..."
                />
              </div>

              <div style={{backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '8px', padding: '15px', marginBottom: '20px'}}>
                <h4 style={{color: '#155724', marginBottom: '10px'}}>Payment Information</h4>
                <p style={{color: '#155724', margin: 0}}>
                  After enrollment, you'll receive payment instructions via email. We accept credit cards, 
                  PayPal, and bank transfers. Full payment is required to secure your spot.
                </p>
              </div>

              <button type="submit" style={submitButtonStyle}>
                Complete Enrollment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// Main MenuPage Component
export default function MenuPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showPrivateChefModal, setShowPrivateChefModal] = useState(false);
  const [showClassesModal, setShowClassesModal] = useState(false);

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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    margin: '40px auto',
    maxWidth: '1200px',
    padding: '0 20px',
  };

  const infoCardStyle = {
    backgroundColor: '#faf9f5',
    padding: '25px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '2px solid #d2c9a0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#5a4631',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  };

  const cardContentStyle = {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#7a6b54',
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

  const highlightTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#5a4631',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };

  const highlightContentStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#7a6b54',
    marginBottom: '20px',
  };

  const contactButtonStyle = {
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
    fontFamily: 'Georgia, serif',
  };

  const allergenNoticeStyle = {
    backgroundColor: '#fff3cd',
    border: '2px solid #ffc107',
    borderRadius: '10px',
    padding: '20px',
    margin: '30px auto',
    maxWidth: '800px',
    textAlign: 'center',
  };

  const MenuInfoCard = ({ title, icon, children }) => (
    <div style={infoCardStyle}>
      <h3 style={cardTitleStyle}>
        <span style={{fontSize: '1.8rem'}}>{icon}</span>
        {title}
      </h3>
      <div style={cardContentStyle}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Our Culinary Menu</h1>
      <p style={subtitleStyle}>
        Discover our carefully crafted dishes made with the finest ingredients, 
        blending traditional techniques with modern innovation. Each dish tells a story 
        of culinary passion and dedication to excellence.
      </p>

      {/* Information Cards Section */}
      <div style={infoSectionStyle}>
        <MenuInfoCard title="Kitchen Hours" icon="🕒">
          <p><strong>Lunch Service</strong><br />11:30 AM - 3:00 PM</p>
          <p><strong>Dinner Service</strong><br />5:00 PM - 10:00 PM</p>
          <p><strong>Late Night Menu</strong><br />Friday & Saturday until 11:00 PM</p>
          <p style={{marginTop: '15px', fontSize: '0.9rem', fontStyle: 'italic'}}>
            Last orders taken 30 minutes before closing
          </p>
        </MenuInfoCard>
        
        <MenuInfoCard title="Chef's Recommendation" icon="👨‍🍳">
          <p>Try our seasonal tasting menu featuring locally sourced ingredients and carefully selected wine pairings by our certified sommelier.</p>
          <p style={{marginTop: '10px', fontWeight: 'bold'}}>
            Available Thursday - Saturday evenings
          </p>
          <p style={{fontSize: '0.9rem', marginTop: '10px'}}>
            Advance reservation required (24 hours notice)
          </p>
        </MenuInfoCard>
        
        <MenuInfoCard title="Dietary Accommodations" icon="🌱">
          <p>We proudly accommodate all dietary restrictions including:</p>
          <ul style={{textAlign: 'left', marginTop: '10px', paddingLeft: '20px'}}>
            <li>Vegetarian & Vegan options</li>
            <li>Gluten-free preparations</li>
            <li>Allergen-free modifications</li>
            <li>Custom dietary requirements</li>
          </ul>
          <p style={{fontSize: '0.9rem', marginTop: '10px'}}>
            Please inform your server of any allergies
          </p>
        </MenuInfoCard>

        <MenuInfoCard title="Wine Program" icon="🍷">
          <p>Our award-winning wine cellar features over 200 selections from renowned regions worldwide.</p>
          <p style={{marginTop: '10px'}}>
            <strong>Wine Tasting:</strong> Every Friday 7-9 PM
          </p>
          <p style={{fontSize: '0.9rem', marginTop: '10px'}}>
            Ask about our wine pairing recommendations for any dish
          </p>
        </MenuInfoCard>

        <MenuInfoCard title="Sustainability" icon="🌍">
          <p>We source ingredients from local farms within 50 miles, supporting sustainable agriculture and reducing our carbon footprint.</p>
          <p style={{marginTop: '10px', fontWeight: 'bold'}}>
            Farm-to-table since 2019
          </p>
        </MenuInfoCard>

        <MenuInfoCard title="Special Events" icon="🎉">
          <p>Perfect venue for private dining, corporate events, and celebrations.</p>
          <p style={{marginTop: '10px'}}>
            <strong>Capacity:</strong> Up to 40 guests in private room
          </p>
          <p style={{fontSize: '0.9rem', marginTop: '10px'}}>
            Custom menus available for groups of 8+
          </p>
        </MenuInfoCard>
      </div>

      {/* Allergen Notice */}
      <div style={allergenNoticeStyle}>
        <h3 style={{color: '#856404', marginBottom: '10px'}}>⚠️ Allergen Information</h3>
        <p style={{color: '#856404', margin: 0}}>
          Please inform your server of any food allergies or dietary restrictions. 
          While we take precautions, our kitchen handles common allergens and cross-contamination may occur.
        </p>
      </div>

      {/* Private Chef Service Highlight */}
      <div style={highlightBoxStyle}>
        <h3 style={highlightTitleStyle}>🏠 Private Chef Service</h3>
        <p style={highlightContentStyle}>
          Bring the Bella Vista experience to your home! Our executive chef is available for 
          private events, intimate dinners, and special celebrations. Enjoy restaurant-quality 
          cuisine in the comfort of your own space.
        </p>
        <p style={highlightContentStyle}>
          <strong>Services Include:</strong> Menu planning, shopping, preparation, service, and cleanup. 
          Custom menus designed around your preferences and dietary needs.
        </p>
        <button 
          style={contactButtonStyle}
          onClick={() => setShowPrivateChefModal(true)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#4a3529'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#5a4631'}
        >
          Request Quote
        </button>
      </div>

      {/* Cooking Classes Highlight */}
      <div style={{...highlightBoxStyle, backgroundColor: '#f0f8ff', border: '3px solid #4682b4'}}>
        <h3 style={{...highlightTitleStyle, color: '#2c5aa0'}}>👩‍🍳 Culinary Classes</h3>
        <p style={{...highlightContentStyle, color: '#2c5aa0'}}>
          Learn from our master chefs in hands-on cooking classes! From pasta making to advanced 
          techniques, we offer classes for all skill levels.
        </p>
        <p style={{...highlightContentStyle, color: '#2c5aa0'}}>
          <strong>Upcoming Classes:</strong> Italian Classics (June 15), French Pastries (June 22), 
          Seafood Mastery (June 29). Classes include instruction, ingredients, and a meal.
        </p>
        <button 
          style={{...contactButtonStyle, backgroundColor: '#2c5aa0'}}
          onClick={() => setShowClassesModal(true)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1e4080'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2c5aa0'}
        >
          View Classes & Enroll
        </button>
      </div>

      {/* Enhanced Menu Component */}
      <EnhancedMenu />

      {/* Footer Information */}
      <div style={{...infoCardStyle, maxWidth: '800px', margin: '40px auto 0'}}>
        <h3 style={cardTitleStyle}>
          <span style={{fontSize: '1.8rem'}}>📞</span>
          Questions About Our Menu?
        </h3>
        <p style={cardContentStyle}>
          Our culinary team is happy to discuss ingredients, preparation methods, or 
          create custom dishes for your dietary needs. We believe every guest should 
          have an exceptional dining experience.
        </p>
        <p style={{...cardContentStyle, marginTop: '15px', fontWeight: 'bold'}}>
          Call us at (555) 123-4567 or speak with your server
        </p>
      </div>

      {/* Modals */}
      <PrivateChefModal 
        isOpen={showPrivateChefModal} 
        onClose={() => setShowPrivateChefModal(false)} 
      />
      <CulinaryClassesModal 
        isOpen={showClassesModal} 
        onClose={() => setShowClassesModal(false)} 
      />
    </div>
  );
}
