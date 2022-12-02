import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { sleep } from "../utils/sleeper";
import Footer from "./Footer";

beforeEach(() => {
  render(<Footer />);
});
afterEach(() => {
  cleanup();
});

describe("testing footer", () => {
  test("should display the footer", () => {
    const footer = screen.getByTestId("footer");
    expect(footer).toBeDefined();
    const facebookIcon = screen.getByTestId("facebookIcon");
    const emailIcon = screen.getByTestId("emailIcon");
    const codeIcon = screen.getByTestId("codeIcon");
    expect(facebookIcon).toBeDefined();
    expect(emailIcon).toBeDefined();
    expect(codeIcon).toBeDefined();
  });

  test("btn facebook should display the alert", () => {
    const emailIcon = screen.getByTestId("emailIcon");
    userEvent.click(emailIcon);
    const alert = screen.findByText("Nope");
    expect(alert).toBeDefined();
  });
  test("btn email should display the alert", () => {
    const facebookIcon = screen.getByTestId("facebookIcon");
    userEvent.click(facebookIcon);
    const alert = screen.findByText("Tampoco");
    expect(alert).toBeDefined();
  });
  test("btn code should display the alert", async () => {
    const codeIcon = screen.getByTestId("codeIcon");
    userEvent.click(codeIcon);
    await sleep(1200);
    const footer = screen.findByTestId("footer");
    expect(footer).not.toBeDefined();
  });
});
