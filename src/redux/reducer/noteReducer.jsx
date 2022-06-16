import { createSlice } from "@reduxjs/toolkit";

const noteState = [
  { id: 1, title: "Note1", description: 'Note 1 description', color: "mavi" },
  { id: 2, title: "Note2", description: 'Note 2 description', color: "mavi" },
  { id: 3, title: "Note3", description: 'Note 3 description', color: "yesil" },
  { id: 4, title: "Note4", description: 'Note 4 description', color: "yesil" },
  { id: 5, title: "Note5", description: 'Note 5 description', color: "kirmizi" },
];

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: noteState,
    filter: '',
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      return {
        ...state,
        notes: state.notes.filter((item) => item.id !== action.payload.id),
      };
    },
    searchNote: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { addNote, deleteNote, searchNote } = noteSlice.actions;
export default noteSlice.reducer;
