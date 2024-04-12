import React from 'react'
import ProductIcon from './ProductIcon'
import '../productSection/Product.css'


function Product(props) {
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 product">
            <a className="product-item" href="cart.html">
              <img src={props.productImage} className="img-fluid product-thumbnail" alt="Product 1" />
              <h3 className="product-title">{props.productName}</h3>
              <strong className="product-price">{props.productPrice}</strong>

              <ProductIcon/>
            </a>
    </div>
  )
}

export default Product