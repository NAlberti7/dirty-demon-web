import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import CheckoutTitles from "./CheckoutTitles";

export default {
  title: "Molecules | CheckoutTitles",
  decorators: [withKnobs],
};

export const normal = () => <CheckoutTitles title={text("Title", "DATOS DE CONTACTO")} description={text("Description", "INGRESA TUS DATOS PERSONALES")} />;
