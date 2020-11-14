import React, { useState } from "react";

const Comments = () => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment("");
    console.log(comment);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <h3>Leave a Comment:</h3>
        <div className="form-group">
          <textarea
            className="form-control"
            name="comment"
            value={comment}
            onChange={handleChange}
          ></textarea>
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-success mt-3">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comments;
