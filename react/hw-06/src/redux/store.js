import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/contactsReducer";
import alertReducer from "./alert/alertReducer";
import filterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  alert: alertReducer,
  filter: filterReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
