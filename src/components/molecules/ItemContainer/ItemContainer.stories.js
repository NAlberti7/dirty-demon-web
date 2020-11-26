import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import ItemContainer from "./ItemContainer";
import { data } from "../../../utils/MOCKED_DATA";
export default {
  title: "Molecules | ItemContainer",
  decorators: [withKnobs],
};

const mockedData = data.filter((item) => item.category === "remeras");

export const itemContainer = () => <ItemContainer season={text("Season", "DROP 1 / SS2020")} data={mockedData} isOpen={boolean("isOpen", true)} />;
