import React from 'react';

import Postimg1 from "../../images/post-1.jpg"
import Postimg2 from "../../images/post-2.jpg"
import Postimg3 from "../../images/post-3.jpg"
import Blog from './Blog';

const blogPosts = [
  {
    id: 1,
    title: 'First Time Home Owner Ideas',
    author: 'Kristin Watson',
    date: 'Dec 19, 2021',
    image: Postimg1,
  },
  {
    id: 2,
    title: 'How To Keep Your Furniture Clean',
    author: 'Robert Fox',
    date: 'Dec 15, 2021',
    image: Postimg2,
  },
  {
    id: 3,
    title: 'Small Space Furniture Apartment Ideas',
    author: 'Kristin Watson',
    date: 'Dec 12, 2021',
    image: Postimg3,
  },
  // Add more blog posts as needed
];

function BlogSection() {
  return (
    <div className="container">
    <div className="row mb-5">
      <div className="col-md-6">
        <h2 className="section-title">Recent Blog</h2>
      </div>
      <div className="col-md-6 text-start text-md-end">
        <a href=" " className="more">
          View All Posts
        </a>
      </div>
    </div>

    <div className="row">
      {blogPosts.map((post,i) => (
        <Blog key={i} id={post.id} image={post.image} title={post.title} author={post.author} date={post.date} />
      ))}
    </div>
  </div>
  );
}

export default BlogSection;
