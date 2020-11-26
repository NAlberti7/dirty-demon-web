import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import StoreDrop from "./StoreDrop";
export default {
  title: "Molecules | StoreDrop",
  decorators: [withKnobs],
};

export const storeDrop = () => <StoreDrop isOpen={boolean("isOpen", true)} title={text("Title", "T-SHIRTS")} />;
