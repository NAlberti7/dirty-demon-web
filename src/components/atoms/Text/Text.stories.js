import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Text from "./Text";

export const textConfig = {
  size: 76,
  priority: 1,
  primary: true,
};

storiesOf("Text", module)
  .add("normal", () => (
    <Text {...textConfig} priority={1}>
      NORMAL
    </Text>
  ))
  .add("orange", () => (
    <Text {...textConfig} color='orange'>
      NARANJA
    </Text>
  ))
  .add("black", () => (
    <Text {...textConfig} color='black'>
      NEGRO
    </Text>
  ));
