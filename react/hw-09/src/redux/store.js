import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import userSlice from "./user/userSlice";
import contactsSlice from "./contacts/contactsReducer";
import alertReducer from "./alert/alertReducer";
import filterReducer from "./filter/filterReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserSlice = persistReducer(persistConfig, userSlice);

const store = configureStore({
  reducer: {
    user: persistedUserSlice,
    contacts: contactsSlice,
    alert: alertReducer,
    filter: filterReducer,
  },
  middleware: [logger, thunk],
});

export default store;
