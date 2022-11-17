import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { describe } from "vitest";
import { store } from "../app/store";
import Dashboard from "../pages/DashBoard";

describe("renders the component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Dashboard />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("The title in dashboard should be rendered", () => {
    const titleElement = screen.getByText(/Dash board/i);
    expect(titleElement).toBeDefined();
  });

  test("The navigation links should be rendered", () => {
    const linkElement1 = screen.getByText(/Go choose/i);
    expect(linkElement1).toBeDefined();
    const linkElement2 = screen.getByText(/Go search/i);
    expect(linkElement2).toBeDefined();
    const linkElement3 = screen.getByText(/Go create/i);
    expect(linkElement3).toBeDefined();
    const linkElement4 = screen.getByText(/Go approve/i);
    expect(linkElement4).toBeDefined();
    const linkElement5 = screen.getByText(/Go reject/i);
    expect(linkElement5).toBeDefined();
    const linkElement6 = screen.getByText(/Go home/i);
    expect(linkElement6).toBeDefined();
  });
});
