import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  responseDelete: null,
  loading: false,
};

export const fetchUserDelete = createAsyncThunk(
  "userDelete/fetchUserDelete",
  async (userId) => {
    const response = await axios.delete(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
    return response.data;
  }
);

// Then, handle actions in your reducers:
const userDeleteSlice = createSlice({
  name: "userDelete",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserDelete.fulfilled, (state, action) => {
      // Add user to the state array
      state.responseDelete = "User deleted successfully";
    });
  },
});

export default userDeleteSlice.reducer;
