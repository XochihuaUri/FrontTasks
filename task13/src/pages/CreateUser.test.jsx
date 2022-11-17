import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "..";
import { store } from "../app/store";
import CreateUser from "./CreateUser";

test("renders the component", () => {
  render(
    <Provider store={store}>
      <RouterProvider router={router}>
        <CreateUser />
      </RouterProvider>
    </Provider>
  );
  const linkElement = screen.getByText(/Create a user Form/i);
  expect(linkElement).toBeInTheDocument();
});
