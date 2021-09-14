import { createAsyncThunk } from "@reduxjs/toolkit";

// export const addContact = createAction("contacts/addContact");
// export const deleteContact = createAction("contacts/deleteContact");

// const BASE_URL = 'http://localhost:4040'
const BASE_URL =
  "https://my-json-server.typicode.com/UriMovchan/goit-react-hw-07-phonebook";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",

  async () => {
    const response = await fetch(`${BASE_URL}/contacts`, {
      headers: {
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

  async contact => {
    const response = await fetch(`${BASE_URL}/contacts`, {
      headers: {
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

  async id => {
    await fetch(`${BASE_URL}/contacts/${id}`, {
      headers: {
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
