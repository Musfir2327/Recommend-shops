import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import RecommendedShop from './Components/RecommendedShop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecommendedShop />} />
        <Route path="Header" element={<Header />} />
        
      </Routes>
    </Router>
  );
}

export default App;
