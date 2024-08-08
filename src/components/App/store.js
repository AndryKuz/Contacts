import { configureStore } from "@reduxjs/toolkit";

import contactSlice from '../../data/contactSlice';

export const store = configureStore({
    reducer:{
        contacts: contactSlice,
    },
})