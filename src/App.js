// import './App.css';
// import HomePage from "./Product/Homepage";
// import AddProduct from './Admin/Addproduct';

// function App() {
//   return (
//     <div>
//       <HomePage />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./Product/Homepage";
import AddProduct from './Product/Addproduct';
import Addcategory from './Product/Addcategory';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-product" element={<AddProduct />} />

          <Route path="/add-category" element={<Addcategory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
