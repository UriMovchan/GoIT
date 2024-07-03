import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../actions';

const session = createReducer(null, (builder) => {
  builder
    .addCase(authActions.loginSuccess, (_, { payload }) => payload.data.headers)
    .addCase(authActions.refreshSessionSuccess, (_, { payload }) => payload.data.headers)
    .addCase(authActions.registerGoogleSuccess, (_, { payload }) => payload.data.headers)
    .addCase(authActions.loginGoogleSuccess, (_, { payload }) => payload)
    .addCase(authActions.logoutSuccess, () => null);
});



export default session;
