import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import ShippingCard from "./ShippingCard";

export default {
  title: "Molecules | ShippingCard",
  decorators: [withKnobs],
};

export const normal = () => (
  <ShippingCard
    type={text("Type", "RETIRO EN PUNTO DE ENTREGA")}
    description={text("Description", "LUEGO DE TU COMPRA, NOS CONTACTAMOS PARA COORDINAR LA ENTREGA (RAMOS MEJIA-NORDELTA).")}
    price={text("Price", "GRATIS")}
    isSelected={boolean("isSelected", false)}
  />
);
