import {
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  UPDATE_VOTE,
  FETCH_TITLE_DESC,
} from "../actions/types";

function sortByVote(posts) {
  return posts.sort((a, b) => b.votes - a.votes);
}

function makeTitleFromPost({ id, title, description, votes }) {
  return { id, title, description, votes };
}

export default function rootReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TITLE_DESC:
      return sortByVote([...action.title]);

    case ADD_POST:
      return sortByVote([...state, makeTitleFromPost(action.post)]);

    case REMOVE_POST:
      return state.filter((t) => t.id !== action.postId);

    case UPDATE_POST:
      return state.map((t) =>
        t.id === action.post.id ? makeTitleFromPost(action.post) : title
      );
    case UPDATE_VOTE:
      return sortByVote(
        state.map((t) =>
          t.id === action.postId ? { ...title, votes: action.votes } : title
        )
      );
    default:
      return state;
  }
}
