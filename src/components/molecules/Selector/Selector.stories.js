import React from "react";
import { storiesOf } from "@storybook/react";
import Selector from "./Selector";
import { withProvider } from "../../../utils/decorators";

const data1 = [
  { size: "s", stock: 10, _id: "5e55caf3885859009834a166" },
  { size: "m", stock: 10, _id: "5e55caf3885859009834a167" },
  { size: "l", stock: 10, _id: "5e55caf3885859009834a166" },
  { size: "xl", stock: 10, _id: "5e55caf3885859009834a167" },
];
const selected = "5e55caf3885859009834a167";

const config = {
  value: "size",
  id: "_id",
  others: {},
};

storiesOf("Selector", module)
  .addDecorator(withProvider)
  .add("Color Selector", () => <Selector title='SELECCIONAR TALLE' data={data1} config={config} selected={selected} />);
