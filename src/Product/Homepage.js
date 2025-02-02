import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from './Nav_bar.js';
import MobileNavbar from './MobileNavbar.js';
import ProductList from './Productlist';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="homepage">
      {isMobile ? <MobileNavbar /> : <Navbar />}
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
            marginBottom: '20px',
          }}
        />

        <ProductList searchQuery={searchQuery} />
      </main>
    </div>
  );
};

export default HomePage;
