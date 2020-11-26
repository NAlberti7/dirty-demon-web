import React from "react";
import ModalPreviewText from "./ModalPreviewText";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
export default {
  title: "Molecules | ModalPreviewText",
  decorators: [withKnobs],
};

export const modalPreviewText = () => <ModalPreviewText type={text("Type", "OVERSIZE T-SHIRT")} itemName={text("Name", "TRAVIS WHITE")} moveText={boolean("Move", true)} />;
