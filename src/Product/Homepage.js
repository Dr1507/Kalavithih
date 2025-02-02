import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Nav_bar.js";
import MobileNavbar from "./MobileNavbar.js";
import ProductList from "./Productlist";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Detect if the screen width is less than or equal to 768px
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="homepage">
      {/* Use MobileNavbar on small screens, Navbar on larger screens */}
      {isMobile ? <MobileNavbar /> : <Navbar />}

      <main style={{ paddingTop: "80px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
          style={{
            width: "50%",
            padding: "10px",
            fontSize: "1.2em",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            marginBottom: "20px",
          }}
        />

        <ProductList searchQuery={searchQuery} />
      </main>
    </div>
  );
};

export default HomePage;
