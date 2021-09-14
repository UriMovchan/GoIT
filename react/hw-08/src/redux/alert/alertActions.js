import { createAction } from "@reduxjs/toolkit";

export const enableAlert = createAction("alert/setAlert");
export const disableAlert = createAction("alert/deleteAlert");

export const setAlert = message => dispatch => {
  dispatch(enableAlert(message));

  setTimeout(() => dispatch(disableAlert()), 6000);
};
