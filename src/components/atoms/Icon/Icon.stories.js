import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Icon from "./Icon";

export const types = ["danger", "dirty", "guide", "qr", "tracking", "world"];
storiesOf("Icons", module).add("icons", () => types.map((type) => <Icon type={type} />));
