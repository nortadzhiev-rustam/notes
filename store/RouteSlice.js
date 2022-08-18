import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routesName: "",
};

const routeSlice = createSlice({
    name: "routes",
    initialState,
    reducers: {
        setRoutesName: (state, action) => {
            state.routesName = action.payload;
        }
    }
});

export const { setRoutesName } = routeSlice.actions;
export default routeSlice.reducer;
