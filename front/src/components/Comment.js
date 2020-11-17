import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Comment = ({ deleteComment, comments, id }) => {
  const handleDelete = (e) => {
    deleteComment(id);
  };

  return (
    <div>
      <div>
        <p>{comments}</p>
        {deleteComment && (
          <FontAwesomeIcon onClick={handleDelete} icon={faTrashAlt} />
        )}
      </div>
    </div>
  );
};

export default Comment;
