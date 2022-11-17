import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { describe } from "vitest";
import { store } from "../app/store";
import SearchUser from "../pages/SearchUser";
import User from "../components/User";

describe("renders the component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <SearchUser />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("The label in search user user should be rendered", () => {
    const label = screen.getByText(
      /Insert the id of the user you want to search/i
    );
    expect(label).toBeDefined();
  });

  test("The  input in search user should be rendered", () => {
    const inputElement = screen.getByTestId("inputSearch");
    expect(inputElement).toBeDefined();
  });

  test("The button to submit the form should be rendered", () => {
    const formSubmit = screen.getByTestId("inputSearch");
    expect(formSubmit).toBeDefined();
  });

  test("Should display the response of the getById", () => {
    const formInput = screen.getByTestId("inputSearch");
    userEvent.type(formInput, 1);
    const formButton = screen.getByTestId("buttonSearch");
    userEvent.click(formButton);

    const card = screen.findByText(/User/i);
    expect(card).toBeDefined();
  });

  test("Should display the response of the delete", () => {
    const formInput = screen.getByTestId("inputSearch");
    userEvent.type(formInput, 1);
    const deleteButton = screen.getByTestId("deleteButton");
    userEvent.click(deleteButton);
    const responseElement = screen.findByText(/User deleted successfully/i);
    expect(responseElement).toBeDefined();
  });

  test("Should not render the user if it was not searched", () => {
    const container = screen.getByTestId("formUserContainer");
    expect(container).not.toContain(<User />);
  });
});
