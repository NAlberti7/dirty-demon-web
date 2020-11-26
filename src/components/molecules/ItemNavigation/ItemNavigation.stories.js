import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ItemNavigation from "./ItemNavigation";

storiesOf("ItemNavigation", module).add("With Title", () => <ItemNavigation title='TRAVIS BLANCA' />);
