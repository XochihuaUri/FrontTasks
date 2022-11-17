import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { describe } from "vitest";
import { store } from "../app/store";
import Welcome from "../pages/Welcome";

describe("renders the component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Welcome />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("The title in welcome should be rendered", () => {
    const linkElement = screen.getByText(/Welcome to my page!/i);
    expect(linkElement).toBeDefined();
  });

  test("The button in welcome should be rendered", () => {
    const button = screen.getByText(/Go to dashboard/i);
    expect(button).toBeDefined();
  });

  test("The form should be rendered", () => {
    const img = screen.getAllByTestId("welcomeImg");
    expect(img).toBeDefined();
  });
});
