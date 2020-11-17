import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendPostAPI } from "../actions/posts";
import PostForm from "../components/PostForm";

const NewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const add = ({ title, description, body }) => {
    dispatch(sendPostAPI(title, description, body));
    history.push("/");
  };

  const cancel = () => {
    history.push("/");
  };

  return (
    <main>
      <PostForm save={add} cancel={cancel} />
    </main>
  );
};

export default NewPost;
