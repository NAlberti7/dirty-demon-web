import React from "react";
import { storiesOf } from "@storybook/react";
import MainHeaderContent from "./MainHeaderContent";
import { withProvider } from "../../../utils/decorators";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Molecules | MainHeaderContent",
  decorators: [withKnobs, withProvider],
};

export const defaultMode = (e) => <MainHeaderContent isShopHover={boolean("isHovered", true)} fromHome={boolean("fromHome", true)} />;
export const fromHome = () => <MainHeaderContent fromHome />;
export const fromOther = () => <MainHeaderContent />;
