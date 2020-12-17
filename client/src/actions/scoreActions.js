import axios from "axios";
import { GET_SCORE, SCORE_LOADING_TRUE } from "./type";

export const getScore = () => async (dispatch) => {
  dispatch(setLoadingTrue());
  axios.get("/api/py/model_score").then((res) =>
    dispatch({
      type: GET_SCORE,
      payload: res.data,
    })
  );
};

export const setLoadingTrue = () => {
  return {
    type: SCORE_LOADING_TRUE,
  };
};
