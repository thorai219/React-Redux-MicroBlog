import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitleAndDesc } from "../actions/titles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { sendVoteAPI } from "../actions/posts";

const TitleList = () => {
  const titles = useSelector((st) => st.titles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTitle() {
      await dispatch(fetchTitleAndDesc());
      setIsLoading(false);
    }

    if (isLoading) {
      fetchTitle();
    }
  }, [dispatch, isLoading]);

  const vote = (direction, id) => {
    dispatch(sendVoteAPI(id, direction));
  };

  if (isLoading) return <b>Loading</b>;

  if (!isLoading && titles.length === 0) {
    return <b>Please add a post!</b>;
  }

  return (
    <div>
      {titles.map((title) => (
        <div key={title.id} className="card">
          <Link className="post" to={"/" + title.id}>
            <div className="card-body">
              <div className="card-title">
                <p>{title.title}</p>
              </div>
              <div className="card-text">
                <i>{title.description}</i>
              </div>
            </div>
          </Link>
          <div className="card-footer">
            <small>{title.votes}</small>
            <FontAwesomeIcon
              className="icon"
              onClick={() => vote("up", title.id)}
              icon={faThumbsUp}
            />
            <FontAwesomeIcon
              className="icon"
              onClick={() => vote("down", title.id)}
              icon={faThumbsDown}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitleList;
