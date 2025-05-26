import React, { useState, useEffect } from 'react';
import Header from './Header';
import './RecommendedShop.css';

const RecommendedShop = () => {
  const [shops, setShops] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetch('https://http://localhost:3000//api/shops/recommeneded') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setShops(data))
      .catch(error => console.error('Error fetching shops:', error));
  }, []);

  return (
    <div>
      <Header />
      <div className="shops-container">
        <h2 className="section-title">Recommended Foods</h2>
        <p className="section-subtitle">Discover top-rated eateries near you</p>

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
                {shop.isNew && <div className="new-badge">NEW</div>}
                {shop.isPopular && <div className="popular-badge">🔥 POPULAR</div>}
                {shop.promo && <div className="promo-badge">{shop.promo}</div>}
              </div>

              <div className="shop-info">
                <h3>{shop.name}</h3>
                <div className="shop-meta">
                  <span className="rating">⭐ {shop.rating}</span>
                  <span className="type-tag">{shop.type}</span>
                </div>
                <div className="shop-details">
                  <span className="distance">{shop.distance}</span>
                  <span>•</span>
                  <span>{shop.deliveryTime || 'Est. 20–30 min'}</span>
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
