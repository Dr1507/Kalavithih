import React, { useState } from 'react';
import Navbar from './Nav_bar.js';
import ProductList from './Productlist';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="homepage">
      <Navbar />
      <main style={{ paddingTop: '80px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
          style={{
            width: '50%',
            padding: '10px',
            fontSize: '1.2em',
            borderRadius: '8px',
            border: '1px solid #ccc',
            outline: 'none',
            marginBottom: '20px'
          }}
        />

        
        <ProductList searchQuery={searchQuery} />
      </main>
    </div>
  );
};

export default HomePage;
