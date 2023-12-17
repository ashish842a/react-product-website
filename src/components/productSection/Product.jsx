import React from 'react'
import ProductIcon from './ProductIcon'


function Product(props) {
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="cart.html">
              <img src={props.Product} className="img-fluid product-thumbnail" alt="Product 1" />
              <h3 className="product-title">{props.ProductName}</h3>
              <strong className="product-price">{props.ProductPrice}</strong>

              <ProductIcon/>
            </a>
    </div>
  )
}

export default Product