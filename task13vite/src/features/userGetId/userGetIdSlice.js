import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
};

export const fetchUserById = createAsyncThunk(
  "userGetId/fetchUserById",
  async (userId, url = "https://jsonplaceholder.typicode.com/users/") => {
    const response = await axios.get(url + userId);
    return response.data;
  }
);

// Then, handle actions in your reducers:
const userGetIdSlice = createSlice({
  name: "userGetId",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.user = action.payload;
    });
  },
});

export default userGetIdSlice.reducer;
