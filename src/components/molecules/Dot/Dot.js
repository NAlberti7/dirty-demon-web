import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./Dot.module.scss";
import { ReactComponent as Selected } from "../../../assets/images/SizeSelected.svg"

const Dot = ({ value, selected, selectedStyle, handleSelect }) => {
  return (
    <div className={`${styles.dot} ${selected && styles.selected} ${selectedStyle && styles[selectedStyle]}`} onClick={() => handleSelect(value)}>
      <Selected style={{position: "absolute", top: 0, left: 0}} width="36" height="33" />
      <Text tag='span' primary size={14}>
        {value.toUpperCase()}
      </Text>
    </div>
  );
};

export default Dot;
