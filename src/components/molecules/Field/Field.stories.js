import React from "react";
import { withKnobs, number, select, text, boolean, object } from "@storybook/addon-knobs";
import Field from "./Field";
import { action } from "@storybook/addon-actions";

const types = {
  None: "",
  "Text (text)": "text",
  "For email (email)": "email",
  "For password (password)": "password",
};

const error = {
  message: "Validar el contenido",
};

export const normal = () => {
  const props = {
    name: text("Name", "Nombre"),
    placeholder: text("Placeholder", "Ingresa tu Nombre"),
    onClick: action("onClick"),
    onChange: action("onChange"),
    type: select("Type", types, "text"),
  };

  return <Field {...props} />;
};

export const withError = () => {
  const props = {
    name: text("Name", "Nombre"),
    placeholder: text("Placeholder", "Ingresa tu Nombre"),
    error: object("Error", error, "message"),
    onClick: action("onClick"),
    onChange: action("onChange"),
    type: select("Type", types, "text"),
  };

  return <Field {...props} />;
};

export default {
  title: "Molecules | Field",
  component: Field,
  decorators: [withKnobs],
};
