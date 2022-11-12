import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  approved: [],
};

export const approvedSlice = createSlice({
  name: "approved",
  initialState,
  reducers: {
    pushApprovedUser: (state, action) => {
      state.approved.push(action.payload);
    },
    removeApprovedUserById: (state, action) => {
      const newArray = state.approved.filter(
        (user) => user.id !== action.payload
      );
      state.approved = newArray;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushApprovedUser, removeApprovedUserById } =
  approvedSlice.actions;

export default approvedSlice.reducer;
