import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./Dot.module.scss";

const Dot = ({ value, selected, selectedStyle, handleSelect }) => {
  return (
    <div className={`${styles.dot} ${selected && styles.selected} ${selectedStyle && styles[selectedStyle]}`} onClick={() => handleSelect(value)}>
      <Text tag='span' primary size={12}>
        {value.toUpperCase()}
      </Text>
    </div>
  );
};

export default Dot;
