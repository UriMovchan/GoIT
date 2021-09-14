import { createAsyncThunk } from "@reduxjs/toolkit";

import call from "utils/call";

import { setAlert } from "redux/alert/alertActions";

const URL = "https://connections-api.herokuapp.com";

export const postRegister = createAsyncThunk(
  "user/postRegister",

  async (data, { dispatch, getState }) => {
    const r = await call.post(`${URL}/users/signup`, data);

    if (r.ok) {
      return await r.json();
    } else {
      const rJson = await r.json();

      if (rJson?.keyPattern?.email) {
        dispatch(setAlert("Email already registered"));
      } else if (rJson?.errors?.password?.kind === "minlength") {
        dispatch(setAlert("Password too short "));
      }

      return getState();
    }
  }
);

export const postLogin = createAsyncThunk(
  "user/postLogin",

  async (data, { dispatch, getState }) => {
    const r = await call.post(`${URL}/users/login`, data);

    if (r.ok) {
      return await r.json();
    } else {
      dispatch(setAlert("Wrong email or password"));

      return getState();
    }
  }
);

export const postLogout = createAsyncThunk("user/postLogout", () => {});
