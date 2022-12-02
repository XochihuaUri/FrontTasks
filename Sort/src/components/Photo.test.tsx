import { cleanup, render, screen } from "@testing-library/react";
import Photo from "./Photo";

import dog1 from "../assets/img/sadDog1.png";

beforeEach(() => {
  render(<Photo height={100} width={100} src={dog1} />);
});
afterEach(cleanup);

test("loads the photo component in the screen", () => {
  const photo = screen.getByTestId("photo");
  expect(photo).toBeDefined();
});
