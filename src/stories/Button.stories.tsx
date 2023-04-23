import type { Story } from "@ladle/react";
import { Button, ButtonProps } from "../components/Button";
import React from "react";

export const Submit: Story<ButtonProps> = (props: ButtonProps) => (
  <Button type={"submit"} {...props}>
    Hello
  </Button>
);

Submit.args = {
  disabled: false,
  size: "md",
  variant: "light",
};

Submit.argTypes = {
  size: {
    control: { type: "radio" },
    defaultValue: "md",
    options: ["sm", "md", "lg"],
  },
  variant: {
    control: { type: "radio" },
    defaultValue: "filled",
    options: ["filled", "light", "outline", "subtle"],
  },
};
