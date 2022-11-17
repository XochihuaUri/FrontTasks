import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { describe } from "vitest";
import { store } from "../app/store";
import { fetchUserPost } from "../features/userPost/userPostSlice";
import CreateUser from "../pages/CreateUser";

describe("renders the component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <CreateUser />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("The title in create user should be rendered", () => {
    const linkElement = screen.getByText(/Create a user Form/i);
    expect(linkElement).toBeDefined();
  });

  test("The form should be rendered", () => {
    const formElement = screen.getAllByTestId("form");
    expect(formElement).toBeDefined();
  });

  test("The button to submit the form should be rendered", () => {
    const formSubmit = screen.getAllByTestId("form");
    expect(formSubmit).toBeDefined();
  });

  test("Should display the response of the post", () => {
    const btn = screen.getByText("Enviar");
    userEvent.click(btn);
    const responseElement = screen.findAllByText("This field is required");
    expect(responseElement).toBeDefined();
  });

  test("Should display the response of the post successfully", () => {
    const field1 = screen.getByTestId("name");
    const field2 = screen.getByTestId("userName");
    const field3 = screen.getByTestId("email");
    const field4 = screen.getByTestId("phone");
    const field5 = screen.getByTestId("website");
    const btn = screen.getByText("Enviar");
    userEvent.type(field1, "a");
    userEvent.type(field2, "b");
    userEvent.type(field3, "c");
    userEvent.type(field4, "d");
    userEvent.type(field5, "e");
    userEvent.click(btn);
    const responseElement = screen.findByText(
      '{"name":"a","username":"b","email":"c","phone":"d","website":"e","id":11}'
    );
    expect(responseElement).toBeDefined();
  });
});
