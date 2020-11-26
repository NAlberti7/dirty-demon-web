import React from "react";
import styles from "./TextArea.module.scss";
const TextArea = ({ name, inputRef, isValid, type = "text", placeholder, ...props }) => {
  return (
    <textarea
      name={name}
      id={name}
      ref={inputRef}
      placeholder={placeholder}
      className={`${styles.textarea} ${!isValid && styles.invalid}`}
      {...props}
    ></textarea>
  );
};

export default TextArea;
