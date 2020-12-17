import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import scoreReducer from "./scoreReducer";

export default combineReducers({
  item: itemReducer,
  reducerScore: scoreReducer,
});
