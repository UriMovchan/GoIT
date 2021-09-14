import { createSlice } from "@reduxjs/toolkit";
import { postLogin, postLogout, postRegister } from "./userAction";

const initialState = {
  isLogged: false,
  user: {
    name: "",
    email: "",
  },
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postRegister.fulfilled, (state, { payload }) => ({
        ...state,
        isLogged: !!payload.token,
        ...payload,
      }))
      .addCase(postLogin.fulfilled, (state, { payload }) => ({
        ...state,
        isLogged: !!payload.token,
        ...payload,
      }))
      .addCase(postLogout.fulfilled, () => initialState);
  },
});

export default userSlice.reducer;
