import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import NavLink from "./NavLink";
import { withProvider } from "../../../utils/decorators";

export default {
  title: "Atoms | NavLink",
  decorators: [withProvider, withKnobs],
};

export const navLink = () => (
  <NavLink path='/store' fromHome={boolean("fromHome", true)}>
    {text("Text", "SHOP")}{" "}
  </NavLink>
);
