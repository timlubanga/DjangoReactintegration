import * as actionTypes from "../actions/actionTypes";

const initialState = {
  leads: [],
};

const leadReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDLEADSINIT:
      return { ...state, loading: true };

    case actionTypes.GETLEADSSUCCESS:
      return { ...state, leads: [...action.payload] };
    default:
      return { ...state };
  }
};

export default leadReducer;
