import React from 'react'
import ImgUrl from "../../images/cross.svg"

function ProductIcon(props) {
  return (
    <span className="icon-cross">
            <img src={ImgUrl} className="img-fluid" alt="Cross" />
    </span>
  )
}

export default ProductIcon