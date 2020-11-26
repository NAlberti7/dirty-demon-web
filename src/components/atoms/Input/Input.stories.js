import React from "react";
import { withKnobs, number, select, text, boolean } from "@storybook/addon-knobs";
import Input from "./Input";
import { action } from "@storybook/addon-actions";

const types = {
  None: "",
  "Text (text)": "text",
  "For email (email)": "email",
  "For password (password)": "password",
};

export const normal = () => {
  const props = {
    name: "test",
    placeholder: text("Placeholder", "Ingresa tu Nombre"),
    isValid: boolean("IsValid", false),
    onClick: action("onClick"),
    onChange: action("onChange"),
    type: select("Type", types, "text"),
  };

  return <Input {...props} />;
};

export default {
  title: "Atoms | Input",
  component: Input,
  decorators: [withKnobs],
};
