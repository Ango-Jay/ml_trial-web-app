import axios from "axios";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEMS, ITEMS_LOADING } from "./type";

export const getItems = () => async (dispatch) => {
  dispatch(setItemsLoading());
  axios.get("/items").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};

export const deleteItem = (id) => async (dispatch) => {
  axios.delete("/items/" + id).then((res) =>
    dispatch({
      type: DELETE_ITEMS,
      payload: id,
    })
  );
};

export const addItem = (item) => async (dispatch) => {
  axios.post("/items", item).then((res) =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
