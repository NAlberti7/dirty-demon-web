import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import StoreSection from "./StoreSection";
import { data } from "../../../utils/MOCKED_DATA";
export default {
  title: "Organism | StoreSection",
  decorators: [withKnobs],
};

const mockedData = data.filter((item) => item.category === "remeras");

export const itemContainer = () => <StoreSection season={text("Season", "DROP 1 / SS2020")} title={text("Title", "T-SHIRTS")} data={mockedData} />;
