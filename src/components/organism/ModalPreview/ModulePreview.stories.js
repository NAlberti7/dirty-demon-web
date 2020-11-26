import React from "react";
import ModalPreview from "./ModalPreview";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
export default {
  title: "Organism | ModalPreview",
  decorators: [withKnobs],
};

export const modalPreview = () => <ModalPreview />;
