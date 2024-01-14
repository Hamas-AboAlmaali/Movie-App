import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  count: 0,
  cart_items: []
};

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    addMovieToWatchList: (state, action) => {
      state.count = state.count + 1;
      state.cart_items.push(action.payload)
      
    },
    removeMovieFromWatchList: (state, action) => {
      state.count = state.count - 1;
      state.cart_items = state.cart_items.filter((item) => item.id !== action.payload.id)
    }
  },
});

export const {
  addMovieToWatchList,
  removeMovieFromWatchList,
} = counterSlice.actions;

export default counterSlice.reducer;