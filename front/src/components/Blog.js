import React from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container">
      <Link to="/id">
        <Post />
      </Link>
    </div>
  );
};

export default Blog;
