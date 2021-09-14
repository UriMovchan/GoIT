import { createSlice } from "@reduxjs/toolkit";

import { getContacts, postContact, deleteContact } from "./contactActions";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contactsData: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.contactsData = action.payload;
        }
      })
      .addCase(getContacts.rejected, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.error = action.error;
        }
      })
      .addCase(deleteContact.pending, state => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.contactsData = state.contactsData.filter(
            i => i.id !== action.payload
          );
        }
      })
      .addCase(deleteContact.rejected, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.error = action.error;
        }
      })
      .addCase(postContact.pending, state => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(postContact.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.contactsData.push(action.payload);
        }
      })
      .addCase(postContact.rejected, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.error = action.error;
        }
      });
  },
});

export default contactsSlice.reducer;
