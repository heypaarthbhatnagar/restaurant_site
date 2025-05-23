import React, { useState } from 'react';

const menuStyle = {
  fontFamily: 'Georgia, serif',
  color: '#5a4631',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '20px',
};

const filterSectionStyle = {
  textAlign: 'center',
  marginBottom: '40px',
  padding: '20px',
  backgroundColor: '#faf9f5',
  borderRadius: '10px',
  border: '2px solid #d2c9a0',
};

const filterButtonStyle = {
  backgroundColor: '#f5f5dc',
  border: '2px solid #d2c9a0',
  color: '#5a4631',
  padding: '10px 20px',
  margin: '5px',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  fontFamily: 'Georgia, serif',
};

const activeFilterStyle = {
  ...filterButtonStyle,
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
  transform: 'scale(1.05)',
};

const searchStyle = {
  width: '300px',
  padding: '12px 20px',
  margin: '10px auto',
  display: 'block',
  border: '2px solid #d2c9a0',
  borderRadius: '25px',
  fontSize: '1rem',
  fontFamily: 'Georgia, serif',
  textAlign: 'center',
};

const categoryStyle = {
  marginBottom: '50px',
  backgroundColor: '#faf9f5',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e0d8c1',
};

const categoryTitleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '25px',
  textTransform: 'uppercase',
  letterSpacing: '3px',
  borderBottom: '3px solid #d2c9a0',
  paddingBottom: '15px',
  textAlign: 'center',
};

const menuItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '20px',
  paddingBottom: '15px',
  borderBottom: '1px dotted #d2c9a0',
  transition: 'all 0.3s ease',
  borderRadius: '8px',
  padding: '15px',
  cursor: 'pointer',
};

const menuItemHoverStyle = {
  backgroundColor: '#f0f0f0',
  transform: 'translateY(-2px)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const itemInfoStyle = {
  flex: 1,
  paddingRight: '20px',
};

const itemHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '8px',
  flexWrap: 'wrap',
};

const itemNameStyle = {
  fontSize: '1.3rem',
  fontWeight: 'bold',
  marginBottom: '0',
  color: '#5a4631',
};

const itemDescStyle = {
  fontSize: '1rem',
  fontStyle: 'italic',
  color: '#7a6b54',
  lineHeight: '1.4',
  marginBottom: '8px',
};

const badgeStyle = {
  padding: '3px 10px',
  borderRadius: '15px',
  fontSize: '0.7rem',
  fontWeight: 'bold',
  margin: '2px',
  display: 'inline-block',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const popularBadgeStyle = {
  ...badgeStyle,
  backgroundColor: '#ff6b35',
  color: 'white',
};

const chefBadgeStyle = {
  ...badgeStyle,
  backgroundColor: '#5a4631',
  color: '#f5f5dc',
};

const newBadgeStyle = {
  ...badgeStyle,
  backgroundColor: '#228b22',
  color: 'white',
};

const spicyBadgeStyle = {
  ...badgeStyle,
  backgroundColor: '#dc143c',
  color: 'white',
};

const dietaryBadgeStyle = {
  ...badgeStyle,
  backgroundColor: '#32cd32',
  color: 'white',
};

const priceContainerStyle = {
  textAlign: 'right',
  minWidth: '120px',
};

const priceStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#8b4513',
  marginBottom: '5px',
};

const glassPriceStyle = {
  fontSize: '0.9rem',
  color: '#7a6b54',
  fontStyle: 'italic',
};

const detailsButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#8b4513',
  cursor: 'pointer',
  fontSize: '0.85rem',
  marginTop: '8px',
  textDecoration: 'underline',
  fontFamily: 'Georgia, serif',
  fontWeight: 'bold',
};

const detailsStyle = {
  marginTop: '15px',
  padding: '15px',
  backgroundColor: '#f8f6f0',
  borderRadius: '8px',
  fontSize: '0.9rem',
  border: '1px solid #e0d8c1',
};

const detailItemStyle = {
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'flex-start',
};

const detailLabelStyle = {
  fontWeight: 'bold',
  minWidth: '100px',
  color: '#5a4631',
};

const wineSubcategoryStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#8b4513',
  marginTop: '20px',
  marginBottom: '15px',
  paddingLeft: '10px',
  borderLeft: '4px solid #d2c9a0',
  textTransform: 'capitalize',
};

// Enhanced menu data
const enhancedMenuItems = {
  appetizers: [
    { 
      name: 'Truffle Arancini', 
      desc: 'Crispy risotto balls with black truffle and aged parmesan, served with herb aioli', 
      price: '$18',
      dietary: ['vegetarian'],
      allergens: ['dairy', 'gluten', 'eggs'],
      popular: true,
      prepTime: '15 min',
      spiceLevel: 0,
      pairing: 'Pairs beautifully with our Barolo DOCG',
      chef: 'Chef Marco\'s signature dish featuring hand-selected Umbrian truffles'
    },
    { 
      name: 'Seared Scallops', 
      desc: 'Pan-seared diver scallops with cauliflower puree, crispy pancetta, and microgreens', 
      price: '$24',
      dietary: ['gluten-free'],
      allergens: ['shellfish', 'dairy'],
      prepTime: '12 min',
      spiceLevel: 0,
      pairing: 'Excellent with our Sancerre',
      chef: 'Sourced daily from sustainable fisheries'
    },
    { 
      name: 'Burrata Caprese', 
      desc: 'Creamy burrata with heirloom tomatoes, fresh basil, and aged balsamic reduction', 
      price: '$16',
      dietary: ['vegetarian', 'gluten-free'],
      allergens: ['dairy'],
      prepTime: '8 min',
      spiceLevel: 0,
      seasonal: true,
      pairing: 'Perfect with Prosecco or Pinot Grigio'
    },
    { 
      name: 'Foie Gras', 
      desc: 'Pan-seared foie gras with toasted brioche and house-made fig jam', 
      price: '$26',
      allergens: ['dairy', 'gluten'],
      prepTime: '18 min',
      spiceLevel: 0,
      chef: 'Traditional French preparation',
      pairing: 'Exceptional with Sauternes dessert wine'
    },
    { 
      name: 'Oysters Rockefeller', 
      desc: 'Fresh Blue Point oysters baked with creamed spinach, herbs, and parmesan breadcrumbs', 
      price: '$22',
      allergens: ['shellfish', 'dairy', 'gluten'],
      prepTime: '14 min',
      spiceLevel: 1,
      pairing: 'Classic pairing with Champagne'
    }
  ],
  mains: [
    { 
      name: 'Ribeye Steak', 
      desc: '12oz dry-aged ribeye with roasted bone marrow, red wine jus, and truffle fries', 
      price: '$48',
      dietary: ['gluten-free'],
      allergens: ['dairy'],
      popular: true,
      prepTime: '25 min',
      spiceLevel: 0,
      chef: 'Dry-aged for 28 days for maximum flavor',
      pairing: 'Perfect with our Cabernet Sauvignon Reserve'
    },
    { 
      name: 'Chilean Sea Bass', 
      desc: 'Miso-glazed sea bass with shiitake mushrooms, baby bok choy, and jasmine rice', 
      price: '$42',
      dietary: ['gluten-free'],
      allergens: ['fish', 'soy'],
      prepTime: '20 min',
      spiceLevel: 1,
      chef: 'Sustainable wild-caught sea bass',
      pairing: 'Complements our Riesling perfectly'
    },
    { 
      name: 'Duck Confit', 
      desc: 'Slow-cooked duck leg with cherry gastrique, wild rice pilaf, and seasonal vegetables', 
      price: '$38',
      dietary: ['gluten-free'],
      allergens: ['dairy'],
      prepTime: '22 min',
      spiceLevel: 0,
      seasonal: true,
      pairing: 'Exceptional with Pinot Noir'
    },
    { 
      name: 'Lobster Ravioli', 
      desc: 'House-made pasta filled with Maine lobster in saffron cream sauce', 
      price: '$36',
      allergens: ['shellfish', 'dairy', 'gluten', 'eggs'],
      popular: true,
      prepTime: '18 min',
      spiceLevel: 0,
      chef: 'Pasta made fresh daily in-house',
      pairing: 'Beautiful with our Chardonnay Burgundy'
    },
    { 
      name: 'Rack of Lamb', 
      desc: 'Herb-crusted New Zealand lamb with mint pesto and roasted root vegetables', 
      price: '$44',
      dietary: ['gluten-free'],
      allergens: ['dairy', 'nuts'],
      prepTime: '28 min',
      spiceLevel: 0,
      chef: 'Sourced from sustainable farms',
      pairing: 'Ideal with our Syrah or Malbec'
    },
    { 
      name: 'Truffle Risotto', 
      desc: 'Carnaroli rice slowly cooked with black truffle, aged parmesan, and white wine', 
      price: '$34',
      dietary: ['vegetarian', 'gluten-free'],
      allergens: ['dairy'],
      prepTime: '25 min',
      spiceLevel: 0,
      chef: 'Made to order with imported Italian rice',
      pairing: 'Excellent with our Barolo or Chardonnay'
    }
  ],
  desserts: [
    { 
      name: 'Chocolate Soufflé', 
      desc: 'Dark chocolate soufflé with vanilla bean ice cream and raspberry coulis', 
      price: '$14',
      dietary: ['vegetarian'],
      allergens: ['dairy', 'eggs', 'gluten'],
      prepTime: '20 min',
      chef: 'Made with 70% Belgian chocolate',
      pairing: 'Perfect with Port or coffee'
    },
    { 
      name: 'Tiramisu', 
      desc: 'Classic Italian dessert with ladyfingers, mascarpone, and espresso', 
      price: '$12',
      dietary: ['vegetarian'],
      allergens: ['dairy', 'eggs', 'gluten'],
      prepTime: '5 min',
      chef: 'Traditional family recipe',
      pairing: 'Espresso or Amaretto'
    },
    { 
      name: 'Crème Brûlée', 
      desc: 'Vanilla bean custard with caramelized sugar and fresh seasonal berries', 
      price: '$10',
      dietary: ['vegetarian', 'gluten-free'],
      allergens: ['dairy', 'eggs'],
      prepTime: '8 min',
      popular: true,
      pairing: 'Moscato or Dessert Wine'
    },
    { 
      name: 'Apple Tarte Tatin', 
      desc: 'Upside-down apple tart with puff pastry and crème fraîche', 
      price: '$13',
      dietary: ['vegetarian'],
      allergens: ['dairy', 'gluten', 'eggs'],
      prepTime: '12 min',
      seasonal: true,
      pairing: 'Calvados or Late Harvest Wine'
    },
    { 
      name: 'Panna Cotta', 
      desc: 'Silky vanilla bean panna cotta with seasonal fruit compote', 
      price: '$11',
      dietary: ['vegetarian', 'gluten-free'],
      allergens: ['dairy'],
      prepTime: '6 min',
      pairing: 'Prosecco or Fruit Liqueur'
    }
  ],
  wines: {
    red: [
      { 
        name: 'Barolo DOCG 2018', 
        desc: 'Piedmont, Italy - Full-bodied with notes of cherry, leather, and truffle', 
        price: '$85', 
        glass: '$18',
        vintage: '2018',
        region: 'Piedmont, Italy',
        notes: 'Rich tannins, long finish'
      },
      { 
        name: 'Cabernet Sauvignon Reserve', 
        desc: 'Napa Valley - Rich tannins with blackcurrant, cedar, and vanilla oak', 
        price: '$65', 
        glass: '$15',
        vintage: '2020',
        region: 'Napa Valley, California',
        popular: true
      },
      { 
        name: 'Pinot Noir Oregon', 
        desc: 'Willamette Valley - Light-bodied with cherry, earth, and spice', 
        price: '$55', 
        glass: '$13',
        vintage: '2021',
        region: 'Oregon, USA'
      }
    ],
    white: [
      { 
        name: 'Sancerre 2022', 
        desc: 'Loire Valley - Crisp minerality with citrus, gooseberry, and flint', 
        price: '$55', 
        glass: '$14',
        vintage: '2022',
        region: 'Loire Valley, France',
        popular: true
      },
      { 
        name: 'Chardonnay Burgundy', 
        desc: 'Burgundy - Buttery texture with vanilla, apple, and toasted oak', 
        price: '$70', 
        glass: '$16',
        vintage: '2021',
        region: 'Burgundy, France'
      },
      { 
        name: 'Riesling Alsace', 
        desc: 'Alsace - Semi-dry with peach, honey, and mineral notes', 
        price: '$48', 
        glass: '$12',
        vintage: '2022',
        region: 'Alsace, France'
      }
    ],
    sparkling: [
      { 
        name: 'Dom Pérignon 2015', 
        desc: 'Champagne - Elegant bubbles with brioche, citrus, and minerality', 
        price: '$280', 
        glass: '$45',
        vintage: '2015',
        region: 'Champagne, France',
        chef: 'Perfect for celebrations'
      },
      { 
        name: 'Prosecco DOCG', 
        desc: 'Veneto - Light and fresh with apple and pear notes', 
        price: '$42', 
        glass: '$10',
        vintage: 'NV',
        region: 'Veneto, Italy',
        popular: true
      }
    ]
  },
  drinks: [
    { 
      name: 'Signature Martini', 
      desc: 'Premium vodka or gin with your choice of olive or lemon twist', 
      price: '$16',
      prepTime: '3 min',
      popular: true
    },
    { 
      name: 'Old Fashioned', 
      desc: 'Bourbon whiskey with bitters, orange zest, and house-made simple syrup', 
      price: '$14',
      prepTime: '4 min',
      chef: 'Made with our signature bourbon blend'
    },
    { 
      name: 'French 75', 
      desc: 'Premium gin with fresh lemon juice, simple syrup, and champagne', 
      price: '$15',
      prepTime: '3 min'
    },
    { 
      name: 'Negroni', 
      desc: 'Gin, Campari, and sweet vermouth with orange peel', 
      price: '$15',
      prepTime: '2 min'
    },
    { 
      name: 'Moscow Mule', 
      desc: 'Premium vodka with ginger beer, lime juice, served in copper mug', 
      price: '$13',
      prepTime: '2 min'
    },
    { 
      name: 'Manhattan', 
      desc: 'Rye whiskey with sweet vermouth, bitters, and cherry garnish', 
      price: '$15',
      prepTime: '3 min'
    },
    { 
      name: 'Espresso Martini', 
      desc: 'Vodka, coffee liqueur, and fresh espresso with coffee bean garnish', 
      price: '$14',
      prepTime: '4 min',
      popular: true
    },
    { 
      name: 'Mojito', 
      desc: 'White rum with fresh mint, lime juice, sugar, and soda water', 
      price: '$13',
      prepTime: '4 min'
    }
  ],
  nonAlcoholic: [
    { 
      name: 'Artisan Coffee', 
      desc: 'Single-origin Colombian beans, available as espresso, cappuccino, or French press', 
      price: '$5',
      dietary: ['vegan'],
      prepTime: '3 min'
    },
    { 
      name: 'Premium Tea Selection', 
      desc: 'Earl Grey, Chamomile, Dragon Well Green, or Oolong', 
      price: '$4',
      dietary: ['vegan', 'gluten-free'],
      prepTime: '4 min'
    },
    { 
      name: 'Fresh Juice Blends', 
      desc: 'Orange, apple, cranberry, or seasonal fruit combinations', 
      price: '$6',
      dietary: ['vegan', 'gluten-free'],
      prepTime: '2 min'
    },
    { 
      name: 'Sparkling Water', 
      desc: 'San Pellegrino or Perrier with lime, lemon, or cucumber', 
      price: '$4',
      dietary: ['vegan', 'gluten-free'],
      prepTime: '1 min'
    },
    { 
      name: 'House-made Sodas', 
      desc: 'Ginger beer, lavender lemonade, or seasonal fruit sodas', 
      price: '$5',
      dietary: ['vegan', 'gluten-free'],
      prepTime: '2 min'
    }
  ],
  chefsSpecials: [
    { 
      name: 'Market Fish Special', 
      desc: 'Daily selection of fresh fish prepared with seasonal vegetables and chef\'s choice sauce', 
      price: 'Market Price',
      special: true,
      prepTime: '25 min',
      chef: 'Ask your server about today\'s selection'
    },
    { 
      name: '7-Course Tasting Menu', 
      desc: 'Chef-curated experience featuring seasonal ingredients with wine pairings', 
      price: '$125',
      tasting: true,
      prepTime: '2.5 hours',
      chef: 'Advance notice preferred, wine pairing +$60',
      popular: true
    },
    { 
      name: 'Vegetarian Tasting', 
      desc: '5-course plant-based menu showcasing seasonal vegetables and grains', 
      price: '$85',
      dietary: ['vegetarian'],
      tasting: true,
      prepTime: '2 hours',
      chef: 'Wine pairing available +$45'
    }
  ]
};

export default function EnhancedMenu() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showDetails, setShowDetails] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleDetails = (category, index) => {
    const key = `${category}-${index}`;
    setShowDetails(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filterItems = (items, category) => {
    return items.filter(item => {
      // Search filter
      if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !item.desc.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Dietary filter
      if (activeFilter === 'all') return true;
      if (activeFilter === 'popular') return item.popular;
      if (activeFilter === 'vegetarian') return item.dietary?.includes('vegetarian');
      if (activeFilter === 'vegan') return item.dietary?.includes('vegan');
      if (activeFilter === 'gluten-free') return item.dietary?.includes('gluten-free');
      if (activeFilter === 'seasonal') return item.seasonal;
      if (activeFilter === 'chef') return item.chef;
      
      return true;
    });
  };

  const renderBadges = (item) => {
    const badges = [];
    
    if (item.popular) badges.push(<span key="popular" style={popularBadgeStyle}>⭐ Popular</span>);
    if (item.chef) badges.push(<span key="chef" style={chefBadgeStyle}>👨‍🍳 Chef's Special</span>);
    if (item.seasonal) badges.push(<span key="seasonal" style={newBadgeStyle}>🌿 Seasonal</span>);
    if (item.spiceLevel > 0) badges.push(<span key="spicy" style={spicyBadgeStyle}>🌶️ Spicy</span>);
    if (item.special) badges.push(<span key="special" style={chefBadgeStyle}>⭐ Special</span>);
    if (item.tasting) badges.push(<span key="tasting" style={newBadgeStyle}>🍷 Tasting</span>);
    
    return badges;
  };

  const renderDietaryBadges = (item) => {
    if (!item.dietary) return null;
    
    return item.dietary.map(diet => (
      <span key={diet} style={dietaryBadgeStyle}>
        {diet === 'vegetarian' ? '🌱' : diet === 'vegan' ? '🌿' : '🌾'} {diet}
      </span>
    ));
  };

  const renderWineCategory = (wines, subcategory) => {
    const filteredWines = filterItems(wines, `wines-${subcategory}`);
    
    if (filteredWines.length === 0) return null;

    return (
      <div key={subcategory}>
        <h3 style={wineSubcategoryStyle}>{subcategory} wines</h3>
        {filteredWines.map((wine, index) => (
          <div 
            key={index} 
            style={{
              ...menuItemStyle,
              ...(hoveredItem === `wines-${subcategory}-${index}` ? menuItemHoverStyle : {})
            }}
            onMouseEnter={() => setHoveredItem(`wines-${subcategory}-${index}`)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div style={itemInfoStyle}>
              <div style={itemHeaderStyle}>
                <div style={itemNameStyle}>{wine.name}</div>
                {renderBadges(wine)}
              </div>
              <div style={itemDescStyle}>{wine.desc}</div>
              {wine.vintage && (
                <div style={{fontSize: '0.8rem', color: '#8b4513', marginTop: '4px'}}>
                  <strong>Vintage:</strong> {wine.vintage} | <strong>Region:</strong> {wine.region}
                </div>
              )}
              {renderDietaryBadges(wine)}
              
              <button 
                onClick={() => toggleDetails(`wines-${subcategory}`, index)}
                style={detailsButtonStyle}
              >
                {showDetails[`wines-${subcategory}-${index}`] ? 'Hide Details' : 'More Info'}
              </button>

              {showDetails[`wines-${subcategory}-${index}`] && (
                <div style={detailsStyle}>
                  {wine.notes && (
                    <div style={detailItemStyle}>
                      <span style={detailLabelStyle}>Tasting Notes:</span>
                      <span>{wine.notes}</span>
                    </div>
                  )}
                  {wine.chef && (
                    <div style={detailItemStyle}>
                      <span style={detailLabelStyle}>Sommelier's Note:</span>
                      <span>{wine.chef}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div style={priceContainerStyle}>
              <div style={priceStyle}>{wine.price}</div>
              {wine.glass && <div style={glassPriceStyle}>Glass: {wine.glass}</div>}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderMenuItems = (items, category) => {
    const filteredItems = filterItems(items, category);
    
    if (filteredItems.length === 0) return null;

    return filteredItems.map((item, index) => (
      <div 
        key={index} 
        style={{
          ...menuItemStyle,
          ...(hoveredItem === `${category}-${index}` ? menuItemHoverStyle : {})
        }}
        onMouseEnter={() => setHoveredItem(`${category}-${index}`)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div style={itemInfoStyle}>
          <div style={itemHeaderStyle}>
            <div style={itemNameStyle}>{item.name}</div>
            {renderBadges(item)}
          </div>
          
          <div style={itemDescStyle}>{item.desc}</div>
          
          {renderDietaryBadges(item)}
          
          <button 
            onClick={() => toggleDetails(category, index)}
            style={detailsButtonStyle}
          >
            {showDetails[`${category}-${index}`] ? 'Hide Details' : 'More Info'}
          </button>

          {showDetails[`${category}-${index}`] && (
            <div style={detailsStyle}>
              {item.prepTime && (
                <div style={detailItemStyle}>
                  <span style={detailLabelStyle}>Prep Time:</span>
                  <span>{item.prepTime}</span>
                </div>
              )}
              {item.allergens && (
                <div style={detailItemStyle}>
                  <span style={detailLabelStyle}>Allergens:</span>
                  <span>{item.allergens.join(', ')}</span>
                </div>
              )}
              {item.pairing && (
                <div style={detailItemStyle}>
                  <span style={detailLabelStyle}>Wine Pairing:</span>
                  <span>{item.pairing}</span>
                </div>
              )}
              {item.chef && (
                <div style={detailItemStyle}>
                  <span style={detailLabelStyle}>Chef's Note:</span>
                  <span>{item.chef}</span>
                </div>
              )}
              {item.vintage && (
                <div style={detailItemStyle}>
                  <span style={detailLabelStyle}>Vintage:</span>
                  <span>{item.vintage}</span>
                </div>
              )}
              {item.region && (
                <div style={detailItemStyle}>
                  <span style={detailLabelStyle}>Region:</span>
                  <span>{item.region}</span>
                </div>
              )}
            </div>
          )}
        </div>
        <div style={priceContainerStyle}>
          <div style={priceStyle}>{item.price}</div>
          {item.glass && <div style={glassPriceStyle}>Glass: {item.glass}</div>}
        </div>
      </div>
    ));
  };

  return (
    <div style={menuStyle}>
      {/* Filter and Search Section */}
      <div style={filterSectionStyle}>
        <h3 style={{marginBottom: '20px', fontSize: '1.4rem'}}>🔍 Find Your Perfect Dish</h3>
        
        <input
          type="text"
          placeholder="Search menu items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchStyle}
        />
        
        <div style={{marginTop: '20px'}}>
          <button 
            style={activeFilter === 'all' ? activeFilterStyle : filterButtonStyle}
            onClick={() => setActiveFilter('all')}
          >
            All Items
          </button>
          <button 
            style={activeFilter === 'popular' ? activeFilterStyle : filterButtonStyle}
            onClick={() => setActiveFilter('popular')}
          >
            ⭐ Popular
          </button>
          <button 
            style={activeFilter === 'vegetarian' ? activeFilterStyle : filterButtonStyle}
            onClick={() => setActiveFilter('vegetarian')}
          >
            🌱 Vegetarian
          </button>
          <button 
            style={activeFilter === 'vegan' ? activeFilterStyle : filterButtonStyle}
            onClick={() => setActiveFilter('vegan')}
          >
            🌿 Vegan
          </button>
          <button 
            style={activeFilter === 'gluten-free' ? activeFilterStyle : filterButtonStyle}
            onClick={() => setActiveFilter('gluten-free')}
          >
            🌾 Gluten-Free
          </button>
          <button 
            style={activeFilter === 'seasonal' ? activeFilterStyle : filterButtonStyle}
            onClick={() => setActiveFilter('seasonal')}
          >
            🍂 Seasonal
          </button>
          <button 
            style={activeFilter === 'chef' ? activeFilterStyle : filterButtonStyle}
            onClick={() => setActiveFilter('chef')}
          >
            👨‍🍳 Chef's Choice
          </button>
        </div>
      </div>

      {/* Menu Categories */}
      {Object.entries(enhancedMenuItems).map(([category, items]) => {
        if (category === 'wines') {
          const filteredWines = Object.entries(items).some(([subcategory, wines]) => 
            filterItems(wines, `wines-${subcategory}`).length > 0
          );
          
          if (!filteredWines) return null;

          return (
            <div key={category} style={categoryStyle}>
              <h2 style={categoryTitleStyle}>🍷 Wine Selection</h2>
              {Object.entries(items).map(([subcategory, wines]) => 
                renderWineCategory(wines, subcategory)
              )}
            </div>
          );
        }

        const filteredItems = filterItems(items, category);
        if (filteredItems.length === 0) return null;

        const categoryIcons = {
          appetizers: '🥗',
          mains: '🍽️',
          desserts: '🍰',
          drinks: '🍸',
          nonAlcoholic: '☕',
          chefsSpecials: '⭐'
        };

        const categoryNames = {
          appetizers: 'Appetizers',
          mains: 'Main Courses',
          desserts: 'Desserts',
          drinks: 'Signature Cocktails',
          nonAlcoholic: 'Non-Alcoholic Beverages',
          chefsSpecials: 'Chef\'s Special Selections'
        };

        return (
          <div key={category} style={categoryStyle}>
            <h2 style={categoryTitleStyle}>
              {categoryIcons[category]} {categoryNames[category]}
            </h2>
            {renderMenuItems(filteredItems, category)}
          </div>
        );
      })}
    </div>
  );
}
