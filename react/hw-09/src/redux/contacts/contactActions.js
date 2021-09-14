import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://connections-api.herokuapp.com";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",

  async token => {
    const response = await fetch(`${BASE_URL}/contacts`, {
      headers: {
        Authorization: token,
        Accept: "application/json;odata.metadata=full",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, DELETE",
      },
    });

    return await response.json();
  }
);

export const postContact = createAsyncThunk(
  "contacts/addContact",

  async ({ token, contact }) => {
    console.log(contact);
    const response = await fetch(`${BASE_URL}/contacts`, {
      headers: {
        Authorization: token,
        Accept: "application/json;odata.metadata=full",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, DELETE",
      },

      method: "POST",
      body: JSON.stringify(contact),
    });

    return await response.json();
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",

  async ({ token, id }) => {
    await fetch(`${BASE_URL}/contacts/${id}`, {
      headers: {
        Authorization: token,
        Accept: "application/json;odata.metadata=full",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, DELETE",
      },
      method: "DELETE",
    });

    return id;
  }
);
