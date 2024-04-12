import React, { useState } from 'react';
import '../ProductSectionNew/ProductSection.css'
import Product from '../productSection/Product';

import Product1 from "../../images/product-1.png";
import Product2 from "../../images/product-2.png";
import Product3 from "../../images/product-3.png";

// ProductSection component
function ProductSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const products = [
    { image: Product1, price: "RS 2400", name: "Nordic Chair", category: "category1" },
    { image: Product2, price: "RS 1400", name: "Kruzo Aero Chair", category: "category2" },
    { image: Product3, price: "RS 2000", name: "Ergonomic Chair", category: "category1" },
    { image: Product1, price: "RS 2400", name: "Nordic Chair", category: "category1" },
    { image: Product2, price: "RS 1400", name: "Kruzo Aero Chair", category: "category2" },
    { image: Product3, price: "RS 2000", name: "Ergonomic Chair", category: "category1" },
    { image: Product1, price: "RS 2400", name: "Nordic Chair", category: "category1" },
    { image: Product2, price: "RS 1400", name: "Kruzo Aero Chair", category: "category2" },
    { image: Product3, price: "RS 2000", name: "Ergonomic Chair", category: "category1" },
    { image: Product1, price: "RS 2400", name: "Nordic Chair", category: "category1" },
    { image: Product2, price: "RS 1400", name: "Kruzo Aero Chair", category: "category2" },
    { image: Product3, price: "RS 2000", name: "Ergonomic Chair", category: "category1" },
  ];

  // Filter products based on search term and filter criteria
  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === '' || product.category === filter)
    );
  });

  return (
    <>
       
    <div className="product-section">
      {/* Search Section */}
     <div className="top-section">
     <div className="search-section">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
     </div>

      {/* Product List */}
      <div className="row">
        {filteredProducts.map((product, index) => (
          <Product
            key={index}
            productImage={product.image}
            productName={product.name}
            productPrice={product.price}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default ProductSection;
