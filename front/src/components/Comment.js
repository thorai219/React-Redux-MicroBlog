import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Comment = ({ deleteComment, comment, id }) => {
  const handleDelete = (e) => {
    deleteComment(id);
  };

  return (
    <div className="comments-container">
      <div className="row">
        <h6 className="m-3">{comment}</h6>
        {deleteComment && (
          <FontAwesomeIcon
            className="m-3"
            onClick={handleDelete}
            icon={faTrashAlt}
          />
        )}
      </div>
      <hr />
    </div>
  );
};

export default Comment;
