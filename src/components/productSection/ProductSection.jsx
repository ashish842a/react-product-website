import React from 'react';
import Product from './Product';

import Product1 from "../../images/product-1.png";
import Product2 from "../../images/product-2.png";
import Product3 from "../../images/product-3.png";

function ProductSection() {
  const products = [
    { image: Product1, price: "RS 2400", name: "Nordic Chair"},
    { image: Product2, price: "RS 1400", name: "Kruzo Aero Chair"},
    { image: Product3, price: "RS 2000", name: "Ergonomic Chair"},
  ];

  return (
    <div className="container">
    <div className="row">

      {/* Start Column 1 */}
      <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
        <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
        <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
        <p><a href="shop.html" className="btn">Explore</a></p>
      </div>
      {/* End Column 1 */}

      {/* Dynamic Product Columns */}
      {products.map((product, index) => (
        <Product
          key={index}
          Product={product.image}
          ProductPrice={product.price}
          ProductName={product.name}
        />
      ))}

    </div>
  </div>
  );
}

export default ProductSection;
