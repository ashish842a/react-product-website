import React from 'react'

function ProductDetails(props) {
  return (
    <div key={props.id} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <img src={`${props.imgUrl}`} alt={props.ProductName} className="img-fluid" />
            </div>
            <div className="pt-3">
              <h3>{props.ProductName}</h3>
              <p>{props.ProductDescription}</p>
              <p><a href=" ">Read More</a></p>
            </div>
          </div>
</div>
  )
}

export default ProductDetails