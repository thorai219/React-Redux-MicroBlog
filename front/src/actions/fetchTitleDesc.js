import axios from "axios";
import { FETCH_TITLE_DESC } from "./types";
const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export function fetchTitleAndDesc() {
  return async function (dispatch) {
    const res = await axios.get(`${API_URL}`);
    return dispatch(getTitleDesc(res.data));
  };
}

function getTitleDesc(titles) {
  return {
    type: FETCH_TITLE_DESC,
    titles,
  };
}
