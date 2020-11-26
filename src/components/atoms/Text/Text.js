import React from "react";
import styles from "./Text.module.scss";
const TextPrimary = ({ priority, tag, children, customStyle, align = "left", weight, size, primary, color, opacity, ...props }) => {
  let CustomTag = priority ? `h${priority}` : tag;
  return (
    <CustomTag
      className={`${styles.TextPrimary} ${styles[color]} ${styles[weight]} ${primary ? styles.primary : styles.secondary} ${customStyle || ""}`}
      style={{ fontSize: `${size}px`, opacity: opacity || 1, textAlign: align }}
      {...props}
    >
      {children}
    </CustomTag>
  );
};

export default TextPrimary;
