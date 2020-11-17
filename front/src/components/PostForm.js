import React, { useState } from "react";

const PostForm = ({ post, save, cancel }) => {
  const [postData, setPostData] = useState({
    title: post.title,
    description: post.description,
    body: post.body,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((post) => ({
      ...post,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    save(postData);
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
            value={postData.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            onChange={handleChange}
            value={postData.description}
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
            value={postData.body}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-success">Save</button>
          <button className="btn btn-outline-danger" onClick={cancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

PostForm.defaultProps = {
  post: { title: "", description: "", body: "" },
};

export default PostForm;
