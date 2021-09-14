import { createReducer } from "@reduxjs/toolkit";

import { setAlert, deleteAlert } from "./alertActions";

export const alertReducer = createReducer(false, {
  [setAlert]: (state, action) => ({ ...state, alert: action.payload }),
  [deleteAlert]: (state, action) => ({ ...state, alert: action.payload }),
});

export default alertReducer;
