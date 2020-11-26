import React from "react";
import styles from "./SliderItem.module.scss";
const SliderItem = ({ image, isPreview, isSlipper, isHoodie }) => {
  return (
    <div
      className={`${styles.sliderItem} ${isPreview && styles.isPreview} ${isSlipper &&
        styles.isSlipper} ${isHoodie && styles.isHoodie}`}
    >
      <img src={image} />
    </div>
  );
};

export default SliderItem;
