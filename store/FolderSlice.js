import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  folders: [],
  selectedFolder: null,
  loading: false,
  hasErrors: false,
};

const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    getFolders: (state) => {
      state.loading = true;
    },
    addFolder: (state, action) => {
      state.folders.push(action.payload);
    },
    
  },
});



export const { getFolders } = foldersSlice.actions;

export const foldersSelector = (state) => state.folders;

export default foldersSlice.reducer;
