import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../actions'; // Припускаю, що ви маєте файли authActions.js з описаними діями

const initialUserState = { id: null, name: null, email: null, createdAt: null };

const user = createReducer(initialUserState, (builder) => {
  builder
    .addCase(authActions.loginSuccess, (_, { payload }) => ({
      id: payload.data.id,
      name: payload.data.name,
      picture: payload.data.picture,
      email: payload.data.email,
    }))
    .addCase(authActions.registerGoogleSuccess, (_, { payload }) => ({
      id: payload.data.id,
      name: payload.data.name,
      picture: payload.data.picture,
      email: payload.data.email,
      createdAt: payload.data.createdAt,
    }))
    .addCase(authActions.loginGoogleSuccess, (_, { payload }) => ({
      id: payload.data.id,
      name: payload.data.name,
      picture: payload.data.picture,
      email: payload.data.email,
      createdAt: payload.data.createdAt,
    }))
    .addCase(authActions.registerSuccess, (_, { payload }) => payload.data)
    .addCase(authActions.logoutSuccess, () => initialUserState)
    .addCase(authActions.getCurrentUserSuccess, (_, { payload }) => ({
      id: payload.data.id,
      picture: payload.data.picture,
      name: payload.data.name,
      email: payload.data.email,
    }));
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, (builder) => {
  builder
    .addCase(authActions.registerError, setError)
    .addCase(authActions.loginError, setError)
    .addCase(authActions.logoutError, setError)
    .addCase(authActions.getCurrentUserError, setError)
    .addCase(authActions.refreshSessionError, setError)
    .addCase(authActions.loginGoogleError, setError)
    .addCase(authActions.registerGoogleError, setError)
    .addCase(authActions.clearErrors, () => null)
    .addCase(authActions.forgottenRejected, setError)
    .addCase(authActions.resetPasswordRejected, setError)
    .addCase(authActions.loginSuccess, () => null);
});

const isLoggedIn = createReducer(false, (builder) => {
  builder
    .addCase(authActions.refreshSessionSuccess, () => true)
    .addCase(authActions.loginSuccess, () => true)
    .addCase(authActions.loginGoogleSuccess, () => true)
    .addCase(authActions.registerGoogleSuccess, () => true)
    .addCase(authActions.getCurrentUserSuccess, () => true)
    .addCase(authActions.registerError, () => false)
    .addCase(authActions.loginError, () => false)
    .addCase(authActions.getCurrentUserError, () => false)
    .addCase(authActions.logoutSuccess, () => false)
    .addCase(authActions.refreshSessionError, () => false);
});

const isFetching = createReducer(false, (builder) => {
  builder
    .addCase(authActions.getCurrentUserRequest, () => true)
    .addCase(authActions.getCurrentUserSuccess, () => false)
    .addCase(authActions.getCurrentUserError, () => false);
});

const initialEmailVerificationState = {
  email: null,
  onVerification: false,
  verificationStart: null,
};

const emailVerification = createReducer(initialEmailVerificationState, (builder) => {
  builder
    .addCase(authActions.loginSuccess, () => initialEmailVerificationState)
    .addCase(authActions.registerSuccess, (_, { payload }) => ({
      email: payload.data.email,
      onVerification: true,
      verificationStart: Date.parse(new Date()),
    }))
    .addCase(authActions.resendEmailVerification, (_, { payload }) => ({
      email: payload.email,
      onVerification: true,
      verificationStart: Date.parse(new Date()),
    }))
    .addCase(authActions.registerError, () => initialEmailVerificationState);
});

const initialForgottenState = {
  email: null,
  onReset: false,
  resetStart: null,
};

const forgotten = createReducer(initialForgottenState, (builder) => {
  builder
    .addCase(authActions.forgottenPending, () => {})
    .addCase(authActions.forgottenFulfilled, (_, { payload }) => ({
      email: payload.email,
      onReset: true,
      resetStart: Date.parse(new Date()),
    }))
    .addCase(authActions.forgottenRejected, (_, { payload }) => initialForgottenState);
});

const initialResetPasswordState = {
  success: false,
};

const resetPassword = createReducer(initialResetPasswordState, (builder) => {
  builder
    .addCase(authActions.resetPasswordFulfilled, (_, { payload }) => ({
      success: payload,
    }))
    .addCase(authActions.resetPasswordRejected, (_, { payload }) => initialResetPasswordState)
    .addCase(authActions.loginGoogleSuccess, () => initialResetPasswordState)
    .addCase(authActions.forgottenFulfilled, () => initialResetPasswordState);
});

export default combineReducers({
  user,
  isLoggedIn,
  isFetching,
  error,
  emailVerification,
  forgotten,
  resetPassword,
});
