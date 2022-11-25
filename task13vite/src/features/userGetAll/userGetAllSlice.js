import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk(
  "userGetAll/fetchUsers",
  async (url = "https://jsonplaceholder.typicode.com/users") => {
    const response = await axios.get(url);
    return response.data;
  }
);

// Then, handle actions in your reducers:
const userGetAllSlice = createSlice({
  name: "userGetAll",
  initialState,
  reducers: {
    deleteUserById: (state, action) => {
      const newArray = state.users.filter((user) => user.id !== action.payload);
      state.users = newArray;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.users = action.payload;
    });
  },
});

export const { deleteUserById } = userGetAllSlice.actions;

export default userGetAllSlice.reducer;
