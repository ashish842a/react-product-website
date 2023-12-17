import React from 'react';
import Postimg1 from "../../images/post-1.jpg"
import Postimg2 from "../../images/post-2.jpg"
import Postimg3 from "../../images/post-3.jpg"
import BlogSingle from './BlogSingle';


const blogData = [
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
  {
    id: 4,
    title: 'First Time Home Owner Ideas',
    author: 'Kristin Watson',
    date: 'Dec 19, 2021',
    image: Postimg1,
  },
  {
    id: 5,
    title: 'How To Keep Your Furniture Clean',
    author: 'Robert Fox',
    date: 'Dec 15, 2021',
    image: Postimg2,
  },
  {
    id: 6,
    title: 'Small Space Furniture Apartment Ideas',
    author: 'Kristin Watson',
    date: 'Dec 12, 2021',
    image: Postimg3,
  },
  {
    id: 7,
    title: 'First Time Home Owner Ideas',
    author: 'Kristin Watson',
    date: 'Dec 19, 2021',
    image: Postimg1,
  },
  {
    id: 8,
    title: 'How To Keep Your Furniture Clean',
    author: 'Robert Fox',
    date: 'Dec 15, 2021',
    image: Postimg2,
  },
  {
    id: 9,
    title: 'Small Space Furniture Apartment Ideas',
    author: 'Kristin Watson',
    date: 'Dec 12, 2021',
    image: Postimg3,
  },
  // Add more blog posts as needed
];

function BlogDataSection(){
  return (
    <div className="container">
    <div className="row">
      {blogData.map((post) => (
        <BlogSingle id={post.id} image={post.image} title={post.title} author={post.author} date={post.date} />
      ))}
    </div>
  </div>
  );
};

export default BlogDataSection;
