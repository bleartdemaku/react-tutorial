import React, { useState } from "react";
import BlogList from "../components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website!",
      body: "lorem ipsum...",
      author: "bleart",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "jon",
      id: 2,
    },
    {
      title: "Web dev top tips!",
      body: "lorem ipsum...",
      author: "rina",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "bleart")}
        title="Bleart's Blogs!"
      />
    </div>
  );
};

export default Home;