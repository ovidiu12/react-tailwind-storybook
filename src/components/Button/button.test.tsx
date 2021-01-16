import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

it("should render the button", () => {
  const { getByText } = render(<Button>Test</Button>);
  expect(getByText("Test")).toBeInTheDocument();
});
