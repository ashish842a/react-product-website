import React from 'react';
import ProductImg1 from "../../images/product-1.png";
import ProductImg2 from "../../images/product-2.png";
import ProductImg3 from "../../images/product-3.png";
import ProductDetails from './ProductDetails';

const products = [
  {
    id: 1,
    name: 'Nordic Chair',
    image: ProductImg1,
    description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio',
  },
  {
    id: 2,
    name: 'Kruzo Aero Chair',
    image: ProductImg2,
    description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio',
  },
  {
    id: 3,
    name: 'Ergonomic Chair',
    image: ProductImg3,
    description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio',
  },
];

function PopularProduct() {
  return (
    <div className="container">
    <div className="row">
      {products.map((product) => (
        <ProductDetails id={product.id} imgUrl={product.image} ProductName={product.name} ProductDescription={product.description} />
      ))}
    </div>
  </div>
  );
}

export default PopularProduct;
