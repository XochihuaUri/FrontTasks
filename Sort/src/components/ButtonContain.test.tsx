import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonContain from "./Button";

afterEach(() => {
  cleanup();
});

describe("testing buttonContain component", () => {
  test("should render the btn", () => {
    const mock = vi.fn();
    render(<ButtonContain onClick={mock} text={"name"} disable={false} />);
    const button = screen.getByTestId("buttonAble");
    expect(button).toBeDefined();
  });

  test("btn should trigger the fun", () => {
    const mock = vi.fn();
    render(<ButtonContain onClick={mock} text={"name"} disable={false} />);
    const button = screen.getByTestId("buttonAble");
    userEvent.click(button);
    expect(mock).toHaveBeenCalled().
  });

  test("btn should render the text in props", () => {
    const mock = vi.fn();
    render(<ButtonContain onClick={mock} text={"name"} disable={false} />);
    const buttonWithName = screen.getByText("name");
    expect(buttonWithName).toBeDefined();
  });

  test("btn should render the btn in disable", () => {
    const mock = vi.fn();
    render(<ButtonContain onClick={mock} text={"name"} disable={true} />);
    const button = screen.getByTestId("buttonDisable");
    expect(button).toBeDefined();
  });
  test("btn should render the text in props",async() => {
    const mock = vi.fn();
    render(<ButtonContain onClick={mock} text={"name"} disable={false} />);
    const buttonInSorting = await screen.findByText("Sorting");
    expect(buttonInSorting).toBeDefined();
  });
});
