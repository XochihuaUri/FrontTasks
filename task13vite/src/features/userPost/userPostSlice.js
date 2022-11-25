import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  response: null,
  loading: false,
};

export const fetchUserPost = createAsyncThunk(
  "userPost/fetchUserPost",
  async (user, url = "https://jsonplaceholder.typicode.com/users/") => {
    const response = await axios.post(url, user);
    return response.data;
  }
);

// Then, handle actions in your reducers:
const userPostSlice = createSlice({
  name: "userPost",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserPost.fulfilled, (state, action) => {
      // Add user to the state array
      state.response = action.payload;
    });
  },
});

export default userPostSlice.reducer;
