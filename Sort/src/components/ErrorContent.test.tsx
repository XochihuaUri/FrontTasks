import { cleanup, render, screen } from "@testing-library/react";
import ErrorContent, { ErrorProps, ErrorRoute } from "./ErrorContent";

const errorRoute: ErrorRoute = {
  status: 404,
  statusText: "not found",
  data: "the page was not found",
};

const Error: ErrorProps = {
  errorRoute: errorRoute,
};

beforeEach(() => {
  render(<ErrorContent errorRoute={Error} />);
});
afterEach(cleanup);

describe("testing the error component", () => {
  test("render the error component in the screen", () => {
    const errorDataContainer = screen.getByTestId("errorData");
    const errorImg = screen.getByTestId("errorImg");
    expect(errorDataContainer).toBeDefined();
    expect(errorImg).toBeDefined();
  });
  test("render the error information in the screen", () => {
    const errorStatus = screen.getByText("404");
    const errorStatusText = screen.getByText("not found");
    const errorData = screen.getByText("the page was not found");
    expect(errorStatus).toBeDefined();
    expect(errorStatusText).toBeDefined();
    expect(errorData).toBeDefined();
  });
});
