import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (state.items) {
        for (let item of state.items) {
          if (item.id === action.payload.id) {
            item.count = item.count + 1;
            return;
          }
        }
        state.items.push(action.payload);
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    deleteItem: (state, action) => {
      state.items.forEach((item) => {
        if (item.id === action.payload) {
          if (item.count === 1) {
            state.items = state.items.filter(
              (item) => item.id !== action.payload
            );
            return;
          }
          item.count--;
          return;
        }
      });
    },
    clearItem: (state) => {
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearItem, deleteItem } = cartSlice.actions;
