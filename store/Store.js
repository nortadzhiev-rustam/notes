import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from "./NoteSlice";
import routeSlice from "./RouteSlice";
const store = configureStore({
  reducer: {
    routes: routeSlice,
  },
});

export default store;