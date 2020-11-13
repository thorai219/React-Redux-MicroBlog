import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewPostForm = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPost({
      title: "",
      description: "",
      body: "",
    });
  };

  return (
    <div className="container">
      <h3 className="text-center">New Post</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-control"
            type="text"
            name="title"
            onChange={handleChange}
            value={post.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            onChange={handleChange}
            value={post.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            style={{ height: "300px", resize: "none" }}
            className="form-control"
            type="text"
            name="body"
            onChange={handleChange}
            value={post.body}
          />
        </div>
        <div class="d-flex justify-content-end">
          <Link to="/" className="btn btn-outline-success m-2">
            Save
          </Link>
          <Link to="/" className="btn btn-outline-danger m-2">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;
