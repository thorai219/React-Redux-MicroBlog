import React from "react";
import Post from "./Post";
import Comments from "./Comments";

const ShowPost = () => {
  return (
    <div className="container">
      <Post />
      <Comments />
    </div>
  );
};

export default ShowPost;
