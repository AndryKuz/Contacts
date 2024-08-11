import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { addTagToContact } from "./addTagToContact";
import { addContact } from "./addContact";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3002/users");
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  reducers: {
    removeContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.contacts.push(payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addTagToContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(
          (contact) => contact.id === payload.id
        );

        if (index !== -1) {
          const existingContact = state.contacts[index];
          const updatedTags = Array.isArray(existingContact.tags)
            ? [...existingContact.tags, payload.tag]
            : [payload.tag];
          const updatedContact = {
            ...existingContact,
            tags: updatedTags,
          };
          state.contacts[index] = updatedContact;
        } else {
          const newContact = {
            ...payload,
            tags: Array.isArray(payload.tags) ? payload.tags : [payload.tag],
          };
          state.contacts.push(newContact);
        }
      });
  },
});

export const { removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;

export const useContacts = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const sortedContacts = contacts
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return sortedContacts;
};

export const useLoading = () => useSelector((state) => state.contacts.loading);
export const useError = () => useSelector((state) => state.contacts.error);
