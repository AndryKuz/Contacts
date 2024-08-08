
import { createAsyncThunk} from "@reduxjs/toolkit";



export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3002/users', {
        method:'POST',
         headers: {'Content-Type': 'aplication/json'},
         body: JSON.stringify(contactData),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
