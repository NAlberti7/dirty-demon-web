import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import CartItem from "./CartItem";
import { data } from "../../../utils/MOCKED_DATA";
import { withProvider } from "../../../utils/decorators";
export default {
  title: "Molecules | CartItem",
  decorators: [withKnobs, withProvider],
};

export const cartItem = () => (
  <CartItem
    item={{
      ...data[0],
      quantity: 1,
      size: "M",
      index: 1,
      ship_image:
        "https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_353/v1597102676/Ships/DemonsNegr_lcgwaz.png",
    }}
  />
);
export const cartItemCheckout = () => (
  <CartItem
    item={{
      ...data[0],
      quantity: 1,
      size: "M",
      index: 1,
      ship_image:
        "https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_353/v1597102676/Ships/DemonsNegr_lcgwaz.png",
    }}
    fromCheckout
  />
);

export const cartItemCheckoutMobile = () => (
  <CartItem
    item={{
      ...data[0],
      quantity: 1,
      size: "M",
      index: 1,
      ship_image:
        "https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_353/v1597102676/Ships/DemonsNegr_lcgwaz.png",
    }}
    fromCheckout
    isMobile
  />
);

export const cartItemShipping = () => (
  <CartItem
    item={{
      shipping: "CONSTITUCION 1475, 1704 RAMOS MEJIA, BUENOS AIRES",
      name: "ENVIO EXPRESS",
      quantity: 1,
      index: 1,
      price: 400,
    }}
    fromCheckout
    isShipping
  />
);
