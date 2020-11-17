import React, { useState } from "react";

const CommentForm = ({ submitComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitComment(comment);
    setComment("");
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <h4>Leave a Comment</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            type="text"
            style={{ height: "100px", resize: "none" }}
            onChange={handleChange}
            value={comment}
            className="form-control"
            name="comment"
            placeholder="add a comment"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
