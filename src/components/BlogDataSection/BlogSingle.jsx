import React from 'react'

function BlogSingle(props) {
  return (
    <div key={props.id} className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
    <div className="post-entry">
      <a href=" " className="post-thumbnail">
        <img src={props.image} alt="Image1" className="img-fluid" />
      </a>
      <div className="post-content-entry">
        <h5>
          <a href=" ">{props.title}</a>
        </h5>
        <div className="meta">
          <span>
            by <a href=" ">{props.author}</a>
          </span>{' '}
          <span>
            on <a href=" ">{props.date}</a>
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogSingle;