import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Button from "./Button";

export default {
  title: "Molecules | Button",
  decorators: [withKnobs],
};

export const button = () => (
  <Button handleOnClick={action("button-click")} isSecondary={boolean("isSecondary", false)}>
    {text("Children", "AÑADIR AL CARRITO")}{" "}
  </Button>
);
