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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            value={comment}
            className="form-control"
            name="comment"
            placeholder="add a comment"
          />
        </div>
        <button className="btn btn-outline-primary">Add</button>
      </form>
    </div>
  );
};

export default CommentForm;
