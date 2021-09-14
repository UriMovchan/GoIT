import { createReducer } from "@reduxjs/toolkit";

import { enableAlert, disableAlert } from "./alertActions";

export const alertReducer = createReducer(false, {
  [enableAlert]: (state, { payload }) => ({ alert: payload }),
  [disableAlert]: state => ({ alert: null }),
});

export default alertReducer;
