import axios from "axios";
import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  POST_COMMENT,
  UPDATE_VOTE,
  REMOVE_COMMENT,
  FETCH_POSTS,
} from "./types";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

function getPost(post) {
  return {
    type: FETCH_POSTS,
    post,
  };
}

export function getPostAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`${API_URL}/${id}`);
    return dispatch(getPost(res.data));
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function sendPostAPI(title, description, body) {
  return async function (dispatch) {
    const res = await axios.post(`${API_URL}`, {
      title,
      description,
      body,
    });
    return dispatch(addPost(res.data));
  };
}

function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId,
  };
}

export function removePostAPI(id) {
  return async function (dispatch) {
    const res = await axios.delete(`${API_URL}/${id}`);
    return dispatch(removePost(id));
  };
}

function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  };
}

export function updatePostAPI(id, title, description, body) {
  return async function (dispatch) {
    const res = await axios.put(`${API_URL}/${id}`, {
      title,
      description,
      body,
    });
    return dispatch(updatePost(res.data));
  };
}

function vote(postId, votes) {
  return {
    type: UPDATE_VOTE,
    postId,
    votes,
  };
}

export function sendVoteAPI(id, direction) {
  return async function (dispatch) {
    const res = await axios.post(`${API_URL}/${id}/vote/${direction}`);
    return dispatch(vote(id, res.data.votes));
  };
}

function removeComment(postId, commentId) {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  };
}

export function removeCommentAPI(postId, commentId) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
    return dispatch(removeComment(postId, commentId));
  };
}

function addComment(postId, comment) {
  return {
    type: POST_COMMENT,
    postId,
    comment,
  };
}

export function sendCommentAPI(postId, text) {
  return async function (dispatch) {
    const res = await axios.post(`${API_URL}/${postId}/comments`, { text });
    return dispatch(addComment(postId, res.data));
  };
}
