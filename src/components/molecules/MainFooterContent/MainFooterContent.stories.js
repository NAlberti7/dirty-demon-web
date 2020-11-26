import React from "react";
import { storiesOf } from "@storybook/react";
import MainFooterContent from "./MainFooterContent";
import { withProvider } from "../../../utils/decorators";

storiesOf("MainFooterContent", module)
  .addDecorator(withProvider)
  .add("fromHome", () => <MainFooterContent fromHome />)
  .add("fromHomeShop", () => <MainFooterContent fromHome isShopHover />)
  .add("fromOther", () => <MainFooterContent />);
