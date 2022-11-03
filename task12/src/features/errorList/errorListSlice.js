import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors: [],
};

export const counterSlice = createSlice({
  name: "errorsList",
  initialState,
  reducers: {
    addAnError: (state, action) => {
      state.errors.push(action.payload);
    },
    deleteById: (state, action) => {
      state.errors = state.errors.filter(
        (error) => error.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAnError, deleteById } = counterSlice.actions;

export default counterSlice.reducer;
