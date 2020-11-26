import React from "react";
import styles from "./ActionButton.module.scss";
import Text from "../../atoms/Text/Text";
const typeHandler = (type) => {
  switch (type) {
    case "plus":
      return "+";
    case "close":
      return "+";
    case "min":
      return "-";
    default:
      break;
  }
};

const ActionButton = ({ type, clickHandler, customStyle }) => {
  return (
    <button
      className={`${styles.actionButton} ${type === "close" ? styles.close : ""} ${customStyle}`}
      onClick={clickHandler}
      type='button'
    >
      <Text tag='span' size={18} primary>
        {typeHandler(type)}
      </Text>
    </button>
  );
};

export default ActionButton;
