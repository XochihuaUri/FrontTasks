import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { describe } from "vitest";
import { store } from "../app/store";
import ChooseUsers from "../pages/ChooseUsers";
import userEvent from "@testing-library/user-event";

describe("renders the component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <ChooseUsers />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("The card in choose users should be rendered", () => {
    const linkElement = screen.findByText(/User/i);
    expect(linkElement).toBeDefined();
  });

  test("The btns in card in choose users should be rendered", async () => {
    const buttonApprove = await screen.findByText("Approve 1");
    expect(buttonApprove).toBeDefined();
    const buttonReject = await screen.findByText("Reject 1");
    expect(buttonReject).toBeDefined();
  });

  test("The card in choose users should disappear when press approve", async () => {
    const buttonApprove = await screen.findByText("Approve 1");
    expect(buttonApprove).toBeDefined();
    const card = await screen.findByText("Leanne Graham");
    userEvent.click(buttonApprove);
    const text = card.innerText;
    expect(text).not.toBe("Leanne Graham");
  });

  test("The card in choose users should disappear when press reject", async () => {
    const buttonReject = await screen.findByText("Reject 1");
    expect(buttonReject).toBeDefined();
    const card = await screen.findByText("Leanne Graham");
    userEvent.click(buttonReject);
    const text = card.innerText;
    expect(text).not.toBe("Leanne Graham");
  });
});
