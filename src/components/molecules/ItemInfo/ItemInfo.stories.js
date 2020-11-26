import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ItemInfo from "./ItemInfo";

storiesOf("ItemInfo", module).add("With Type and Color", () => <ItemInfo type='REMERA' color='BLANCA' />);
