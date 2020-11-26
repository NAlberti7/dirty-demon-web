import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Dot from "./Dot.js";

storiesOf("Dot", module)
  .add("No Selected", () => <Dot value='XL' />)
  .add("Selected", () => <Dot value='XL' selected={true} />)
  .add("Selected White", () => <Dot value='XL' selected={true} selectedStyle='white' />);
