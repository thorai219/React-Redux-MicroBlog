import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments = [], deleteComment }) => {
  return comments.map((c) => (
    <Comment
      key={c.id}
      id={c.id}
      comment={c.comments}
      deleteComment={deleteComment}
    />
  ));
};

export default CommentList;
