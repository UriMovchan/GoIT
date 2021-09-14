import { createReducer } from "@reduxjs/toolkit";

import { addContact, deleteContact } from "./contactActions";

const contactsReducer = createReducer([], {
  [addContact]: (state, action) => [...state, { ...action.payload }],
  [deleteContact]: (state, action) => action.payload,
});

export default contactsReducer;
