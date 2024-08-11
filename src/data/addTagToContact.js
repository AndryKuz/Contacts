import { createAsyncThunk} from "@reduxjs/toolkit";



export const addTagToContact = createAsyncThunk(
  'tag/newTag',
  async ({id, tag}, { rejectWithValue }) => {
    try {
      const responseGet = await fetch(`http://localhost:3002/users/${id}`);
      if(!responseGet) {
        throw new Error('Network response was not ok ' + responseGet.statusText);
      }
      const contact = await responseGet.json();
      const updatedTags = [...contact.tags, tag];
      const updatedContact = {...contact, tags:updatedTags}
      const responseUpdate = await fetch(`http://localhost:3002/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedContact),
      });

      if (!responseUpdate.ok) {
        throw new Error('Network response was not ok ' + responseUpdate.statusText);
      }

      const data = await responseUpdate.json();
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
