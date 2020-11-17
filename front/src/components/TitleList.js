import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitleAndDesc } from "../actions/fetchTitleDesc";
import { Link } from "react-router-dom";
import { sendVoteAPI } from "../actions/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const TitleList = () => {
  const titles = useSelector((state) => state.titles);
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

  if (isLoading) return <p>Loading...</p>;
  if (!isLoading && titles.length === 0) {
    return <p>Add a Post</p>;
  }

  const titlesList = titles.map((t) => (
    <li className="row" key={t.id}>
      <FontAwesomeIcon
        className="text-success"
        onClick={(e) => vote("up", t.id)}
        icon={faArrowUp}
      />
      <FontAwesomeIcon
        className="text-danger"
        onClick={(e) => vote("down", t.id)}
        icon={faArrowDown}
      />
      <Link to={"/" + t.id}>{t.title}</Link>
      <p>{t.description}</p>
    </li>
  ));

  return <ul>{titlesList}</ul>;
};

export default TitleList;
