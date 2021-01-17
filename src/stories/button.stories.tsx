import React from "react";
import { Button } from "../components/Button";

const story = {
  title: "Button",
  component: Button,
};

export default story;

export const Default = (): React.ReactNode => <Button>Regular button</Button>;

export const ButtonWithIcon = (): React.ReactNode => (
  <Button
    iconPath={
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    }
  >
    Regular button
  </Button>
);

export const ButtonMedium = (): React.ReactNode => (
  <Button variant="medium">Medium button</Button>
);

export const ButtonLarge = (): React.ReactNode => (
  <Button variant="large">Large button</Button>
);
