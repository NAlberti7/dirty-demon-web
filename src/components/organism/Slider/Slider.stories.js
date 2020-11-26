import React from "react";
import Slider from "./Slider";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

const itemPicture = {
  front:
    "https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_315/v1597105646/prendas/demons2-min_pf8og8.png",
  back:
    "https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_315/v1597105644/prendas/demons1-min_viz6zp.png",
};

export default {
  title: "Organism | Slider",
  decorators: [withKnobs],
};

export const slider = () => <Slider itemPicture={itemPicture} />;
