import { GET_SCORE, SCORE_LOADING_TRUE } from "../actions/type";
const initialState = {
  score: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
    case GET_SCORE:
      console.log("reduced");
      return {
        ...state,
        score: action.payload,
        loading: false,
      };
    case SCORE_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
  }
}
