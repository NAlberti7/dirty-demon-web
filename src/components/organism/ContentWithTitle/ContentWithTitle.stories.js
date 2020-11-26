import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { withProvider } from "../../../utils/decorators";
import ContentWithTitle from "./ContentWithTitle";
export default {
  title: "Organism | ContentWithTitle",
};

export const contentWithTitle = () => <ContentWithTitle title={text("Title", "ABOUT US")} />;
