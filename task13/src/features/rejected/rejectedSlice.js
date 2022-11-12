import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rejected: [],
};

export const rejectedSlice = createSlice({
  name: "rejected",
  initialState,
  reducers: {
    pushRejectedUser: (state, action) => {
      state.rejected.push(action.payload);
    },
    removeRejectedUserById: (state, action) => {
      const newArray = state.rejected.filter(
        (user) => user.id !== action.payload
      );
      state.rejected = newArray;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushRejectedUser, removeRejectedUserById } =
  rejectedSlice.actions;

export default rejectedSlice.reducer;
