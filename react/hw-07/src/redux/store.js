import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import contactsSlice from "./contacts/contactsReducer";
import alertReducer from "./alert/alertReducer";
import filterReducer from "./filter/filterReducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    alert: alertReducer,
    filter: filterReducer,
  },
  middleware: [logger, thunk],
});

export default store;
