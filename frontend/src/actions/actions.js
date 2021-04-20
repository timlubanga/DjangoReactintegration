import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getleads = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/lead/api/lead/")
      .then((response) => {
        dispatch({
          type: actionTypes.GETLEADSSUCCESS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
