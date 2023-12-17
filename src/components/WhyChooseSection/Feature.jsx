import React from 'react'

function Feature(props) {
  return (
    <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={props.imgUrl} className="img-fluid" alt="productIcon" />
                  </div>
                  <h3>{props.title}</h3>
                  <p>{props.desc}</p>
                </div>
    </div>
  )
}

export default Feature