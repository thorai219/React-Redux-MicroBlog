import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const PostDisplay = ({ vote, toggleEdit, deletePost, post }) => {
  const { title, description, body, votes } = post;

  return (
    <div>
      <h3>{title}</h3>
      <div className="d-flex justify-content-end">
        <FontAwesomeIcon onClick={toggleEdit} icon={faEdit} />
        <FontAwesomeIcon onClick={deletePost} icon={faTrashAlt} />
      </div>
      <div>
        <p>{description}</p>
        <div>{body}</div>
      </div>
      <div>
        <b>{votes} Vote:</b>
        <FontAwesomeIcon onClick={(e) => vote("up")} icon={faArrowUp} />
        <FontAwesomeIcon onClick={(e) => vote("down")} icon={faArrowDown} />
      </div>
    </div>
  );
};

export default PostDisplay;
