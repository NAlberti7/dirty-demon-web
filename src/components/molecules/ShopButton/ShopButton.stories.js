import React from "react";
import ShopButton from "./ShopButton";
import { withProvider } from "../../../utils/decorators";
export default {
  title: "Molecules | ShopButton",
  decorators: [withProvider],
};
export const shopButton = () => <ShopButton />;
