import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  getPostAPI,
  updatePostAPI,
  sendVoteAPI,
  sendCommentAPI,
  removeCommentAPI,
  removePostAPI,
} from "../actions/posts";
import PostForm from "../components/PostForm";
import CommentList from "../components/CommentList";
import PostDisplay from "../components/PostDisplay";
import CommentForm from "../components/CommentForm";

const Post = () => {
  const [isEditing, setIsEditing] = useState(false);
  const postId = Number(useParams().postId);
  const histroy = useHistory();
  const post = useSelector((state) => state.posts[postId]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getPost() {
      dispatch(getPostAPI(postId));
    }
    if (!post) {
      getPost();
    }
  }, [dispatch, postId, post]);

  const toggleEdit = () => {
    setIsEditing((edit) => !edit);
  };

  const edit = ({ title, description, body }) => {
    dispatch(updatePostAPI(postId, title, description, body));

    toggleEdit();
  };

  const deletePost = () => {
    dispatch(removePostAPI(postId));
    histroy.push("/");
  };

  const vote = (direction) => {
    dispatch(sendVoteAPI(postId, direction));
  };

  const addComment = (comment) => {
    dispatch(sendCommentAPI(postId, comment));
  };

  const deleteComment = (commentId) => {
    dispatch(removeCommentAPI(postId, commentId));
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container">
      {isEditing ? (
        <PostForm post={post} save={edit} cancel={toggleEdit} />
      ) : (
        <PostDisplay
          post={post}
          toggleEdit={toggleEdit}
          deletePost={deletePost}
          vote={vote}
        />
      )}

      <section>
        <CommentList comments={post.comments} deleteComment={deleteComment} />
        <CommentForm submitComment={addComment} />
      </section>
    </div>
  );
};

export default Post;
