import React from "react";
import DirtyMainInfo from "./DirtyMainInfo";
import { withProvider } from "../../../utils/decorators";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Molecules | DirtyMainInfo",
  decorators: [withKnobs, withProvider],
};

export const defaultMode = (e) => <DirtyMainInfo />;
