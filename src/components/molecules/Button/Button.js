import React from "react";
import styles from "./Button.module.scss";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";

const Button = ({
  disabled,
  handleOnClick,
  children,
  isSecondary,
  type = "button",
  customStyle,
}) => {
  let color;
  if (isSecondary) color = "white";
  else if (disabled) color = "white";
  else color = "black";
  return (
    <button
      onClick={handleOnClick}
      className={`${styles.button} ${isSecondary && styles.secondary} ${customStyle}`}
      disabled={disabled}
      type={type}
    >
      <Text tag='span' size={14} color={color} primary>
        {children}
      </Text>
    </button>
  );
};

export default Button;
