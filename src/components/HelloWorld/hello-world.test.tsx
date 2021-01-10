import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import HelloWorld from "./hello-world";

it('should display a "Hello World" message', () => {
  const { getByText } = render(<HelloWorld />);
  expect(getByText("Hello World")).toBeInTheDocument();
});
