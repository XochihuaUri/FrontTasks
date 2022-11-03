import { configureStore } from "@reduxjs/toolkit";
import errorListReducer from "../features/errorList/errorListSlice";

export const reducers = {
  errors: errorListReducer,
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
