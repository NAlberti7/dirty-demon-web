import React from "react";
import styles from "./ShipImage.module.scss";
const ShipImage = ({ shipImage = "", name = "", isBig }) => {
  if (!isBig) shipImage = shipImage.replace("353", "101");
  return (
    <div className={`${styles.shipImage} ${isBig && styles.isBig}`}>
      {shipImage && <img src={shipImage} alt={name} />}
    </div>
  );
};

export default ShipImage;
