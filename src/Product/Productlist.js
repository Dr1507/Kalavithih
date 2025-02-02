import React, { useState } from 'react';
import Product from './Product';

const products = [
  {
    image:'./Images/wall_clock.jpg',
    title: 'Photo wall clock',
    description: 'Size : 12 inch circle .Different Color and design available.',
    price: 'starting from 1699rs.',
    category: 'Clocks'
  },
  {
    image:'./Images/wall_clock1.jpg',
    title: 'Photo wall clock',
    description: 'Size : 12 inch circle .Different Color and design available.',
    price: 'starting from 1699rs.',
    category: 'Clocks'
  },
  {
    image: './Images/varmala_presevation.jpg',
    title: 'Varmala preservation in resin with name date and quote',
    description: 'Size : 12 inch circle , customization available.',
    price: 'starting from 2999rs',
    category: 'Varmala Resin Accessories'
  },
  {
    image: './Images/varmala_preservation_1.jpg',
    title: 'Varmala preservation in resin with name date and quote',
    description: 'Size : 12 inch circle , customization available.',
    price: 'starting from 2999rs',
    category: 'Varmala Resin Accessories'
  },
];

const ProductList = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter(product =>
    (selectedCategory === 'All' || product.category === selectedCategory) &&
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="category-filter">
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Clocks')}>Clocks</button>
        <button onClick={() => setSelectedCategory('Varmala Resin Accessories')}>Varmala Resin Accessories</button>
        <button onClick={() => setSelectedCategory('Paintings')}>Paintings</button>
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;


// import React, { useState } from 'react';
// import Product from './Product';
// import AddProduct from './AddProduct'; // Import the AddProduct component

// const ProductList = ({ searchQuery }) => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [productList, setProductList] = useState([
//     {
//       image: '/Images/wall_clock.jpg',
//       title: 'Photo wall clock',
//       description: 'Size : 12 inch circle .Different Color and design available.',
//       price: 'starting from 1699rs.',
//       category: 'Clocks'
//     },
//     {
//       image: '/Images/wall_clock1.jpg',
//       title: 'Photo wall clock',
//       description: 'Size : 12 inch circle .Different Color and design available.',
//       price: 'starting from 1699rs.',
//       category: 'Clocks'
//     },
//     {
//       image: '/Images/varmala_presevation.jpg',
//       title: 'Varmala preservation in resin with name date and quote',
//       description: 'Size : 12 inch circle , customization available.',
//       price: 'starting from 2999rs',
//       category: 'Varmala Resin Accessories'
//     },
//     {
//       image: '/Images/varmala_preservation_1.jpg',
//       title: 'Varmala preservation in resin with name date and quote',
//       description: 'Size : 12 inch circle , customization available.',
//       price: 'starting from 2999rs',
//       category: 'Varmala Resin Accessories'
//     },
//   ]);

//   // Handle adding new product
//   const handleAddProduct = (newProduct) => {
//     setProductList([...productList, newProduct]);
//   };

//   // Filter products based on search query and selected category
//   const filteredProducts = productList.filter(product =>
//     (selectedCategory === 'All' || product.category === selectedCategory) &&
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       {/* Add Product Form */}
//       <AddProduct onAddProduct={handleAddProduct} /> {/* Pass handleAddProduct to AddProduct component */}

//       {/* Category Filter */}
//       <div className="category-filter">
//         <button onClick={() => setSelectedCategory('All')}>All</button>
//         <button onClick={() => setSelectedCategory('Clocks')}>Clocks</button>
//         <button onClick={() => setSelectedCategory('Varmala Resin Accessories')}>Varmala Resin Accessories</button>
//         <button onClick={() => setSelectedCategory('Paintings')}>Paintings</button>
//       </div>

//       {/* Displaying filtered products */}
//       <div className="product-list">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product, index) => (
//             <Product
//               key={index}
//               image={product.image}
//               title={product.title}
//               description={product.description}
//               price={product.price}
//             />
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
