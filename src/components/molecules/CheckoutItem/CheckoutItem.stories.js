import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import CheckoutItem from "./CheckoutItem";
import { data } from "../../../utils/MOCKED_DATA";
import { withProvider } from "../../../utils/decorators";
export default {
  title: "Molecules | CheckoutItem",
  decorators: [withKnobs, withProvider],
};

export const checkoutItem = () => (
  <CheckoutItem
    item={{
      ...data[0],
      itemPicture: {
        front:
          "https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_315/v1597105642/prendas/Travis01-min_s4ffve.png",
        back:
          "https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_315/v1597105642/prendas/Travis02-min_bggvlt.png",
      },
      quantity: 1,
      size: "M",
      index: 1,
      ship_image:
        "https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_353/v1597102676/Ships/DemonsNegr_lcgwaz.png",
    }}
  />
);
