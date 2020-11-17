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
    <div className="article">
      <div className="content">
        <div className="d-flex justify-content-between">
          <h3>{title}</h3>
          <div>
            <FontAwesomeIcon
              className="m-2 icon"
              onClick={toggleEdit}
              icon={faEdit}
            />
            <FontAwesomeIcon
              className="m-2 icon"
              onClick={deletePost}
              icon={faTrashAlt}
            />
          </div>
        </div>
        <div>
          <p>{description}</p>
          <hr />
          <div>{body}</div>
        </div>
        <div>
          <b>{votes} Vote:</b>
          <FontAwesomeIcon
            className="ml-3 icon"
            onClick={(e) => vote("up")}
            icon={faArrowUp}
          />
          <FontAwesomeIcon
            className="ml-3 icon"
            onClick={(e) => vote("down")}
            icon={faArrowDown}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDisplay;
