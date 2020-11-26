import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import ActionButton from "./ActionButton";

export default {
  title: "Molecules | ActionButton",
  decorators: [withKnobs],
};

const types = {
  close: "close",
  plus: "plus",
  min: "min",
};

export const cartItem = () => <ActionButton type={select("type", types, "plus")} />;
