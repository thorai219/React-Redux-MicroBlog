import {
  FETCH_POSTS,
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  UPDATE_VOTE,
  POST_COMMENT,
  REMOVE_COMMENT,
} from "../actions/types";

export default function rootReducer(state = {}, action) {
  let p = state[action.postId];

  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, [action.post.id]: action.post };

    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };

    case UPDATE_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          comments: state[action.post.id].comments,
        },
      };

    case REMOVE_POST:
      let posts = { ...state };
      delete posts[action.postId];
      return posts;

    case UPDATE_VOTE:
      return { ...state, [action.postId]: { ...p, votes: action.votes } };

    case POST_COMMENT:
      return {
        ...state,
        [action.postId]: { ...p, comments: [...p.comments, action.comment] },
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...p,
          comments: p.comments.filter((c) => c.id !== action.commentId),
        },
      };

    default:
      return state;
  }
}
