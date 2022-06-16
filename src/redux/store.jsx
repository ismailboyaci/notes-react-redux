
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducer/noteReducer";



export const appStore = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
