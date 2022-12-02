import { cleanup, render, screen } from "@testing-library/react";
import Element from "./Element";

beforeEach(() => {
  render(<Element content={8} color="info.main" />);
});
afterEach(() => {
  cleanup();
});

describe("testing the component Element", () => {
  test("should display the component", () => {
    const element = screen.getByTestId("element");
    expect(element).toBeDefined();
  });
  test("should display the content in component", () => {
    const elementContent = screen.getByText("8");
    expect(elementContent).toBeDefined();
  });
});
