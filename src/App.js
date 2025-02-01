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

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
