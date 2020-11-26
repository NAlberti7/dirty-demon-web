import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

addParameters({
  backgrounds: [
    { name: "white", value: "#FFFF" },
    { name: "black", value: "#000", default: true },
    { name: "dirty", value: "#ff5719" },
  ],
});

const customViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px",
    },
  },
};

addParameters({
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...customViewports },
  },
});
