import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Error from "./pages/Error";
import Welcome from "./pages/Welcome";
import { store } from "./app/store";
import { Provider } from "react-redux";
import ChooseUsers from "./pages/ChooseUsers";
import SearchUser from "./pages/SearchUser";
import CreateUser from "./pages/CreateUser";
import Reject from "./pages/Reject";
import Approved from "./pages/Approved";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <Error />,
  },
  {
    path: "dashboard",
    element: <DashBoard />,
  },
  {
    path: "choose",
    element: <ChooseUsers />,
  },
  {
    path: "search",
    element: <SearchUser />,
  },
  {
    path: "create",
    element: <CreateUser />,
  },
  {
    path: "reject",
    element: <Reject />,
  },
  {
    path: "approve",
    element: <Approved />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
