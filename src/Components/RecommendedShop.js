import React, { useState } from 'react';
import Header from './Header';
import './RecommendedShop.css';

const shops = [
  {
    name: 'Spicy Bites',
    image: '/spicy-bites.jpg',
    rating: 4.5,
    type: 'Indian',
    distance: '2 km',
    promo: '20% OFF',
   
    isNew: true
  },
  {
    name: 'Burger Factory',
    image: '/burger-factory.jpg',
    rating: 4.2,
    type: 'Fast Food',
    distance: '1.2 km',
    promo: 'FREE DELIVERY',
    
  },
  {
    name: 'Green Leaf',
    image: '/green leaf.jpg',
    rating: 4.8,
    type: 'Vegan',
    distance: '3.1 km',
    promo: '10% OFF $30+',
   
    isPopular: true
  },
  {
    name: 'Pasta Paradise',
    image: '/Pasta Paradise.jpg',
    rating: 4.6,
    type: 'Italian',
    distance: '2.8 km',
    promo: 'Buy 1 Get 1',
    isPopular: true
  },
  {
    name: 'Sushi Zen',
    image: '/Sushi Zen.jpg',
    rating: 4.9,
    type: 'Japanese',
    distance: '3.5 km',
    promo: '15% OFF',
    isNew: true
  },
  {
    name: 'Taco Town',
    image: '/Taco Town.jpg',
    rating: 4.3,
    type: 'Mexican',
    distance: '1.5 km',
    promo: 'Free Drink',
  },
{
    name: 'Grill Master',
    image: '/Grill Master.jpg',
    rating: 4.7,
    type: 'BBQ',
    
    
   
  },
  {
    name: 'Smoothie Spot',
    image: '/Smoothie Spot.jpg',
    rating: 4.4,
    type: 'Beverage',
    distance: '1.8 km',
    promo: '10% OFF on First Order',
    isNew: true
  }



];

const RecommendedShop = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>
      <Header />
      
      <div className="shops-container">
        <h2 className="section-title">Recommended Foods</h2>
       
        
        <div className="shops-grid">
          {shops.map((shop, index) => (
            <div 
              className="shop-card" 
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="image-container">
                <img src={shop.image} alt={shop.name} className="shop-image" />
               
               
              </div>
              
              <div className="shop-info">
                <h3>{shop.name}</h3>
                <div className="shop-meta">
                  <span className="rating">⭐ {shop.rating}</span>
                  <span className="type-tag">{shop.type}</span>
                </div>
                
                  
                  
                 
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedShop;