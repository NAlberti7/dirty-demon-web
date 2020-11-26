import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { withProvider } from "../../../utils/decorators";
import CartModal from "./CartModal";
export default {
  title: "Organism | CartModal",
  decorators: [withKnobs, withProvider],
};

export const cartModal = () => <CartModal />;
export const cartModalCheckout = () => <CartModal fromCheckout />;
