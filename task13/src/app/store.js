import { configureStore } from "@reduxjs/toolkit";
import userGetAllReducer from "../features/userGetAll/userGetAllSlice";
import userGetIdReducer from "../features/userGetId/userGetIdSlice";
import userDeleteReducer from "../features/userDelete/userDeleteSlice";
import userPostReducer from "../features/userPost/userPostSlice";
import approvedReducer from "../features/approved/approvedSlice";
import rejectedReducer from "../features/rejected/rejectedSlice";

const reducers = {
  userGetAll: userGetAllReducer,
  userGetId: userGetIdReducer,
  userDelete: userDeleteReducer,
  userPost: userPostReducer,
  approved: approvedReducer,
  rejected: rejectedReducer,
};

export const store = configureStore({
  reducer: reducers,
});
