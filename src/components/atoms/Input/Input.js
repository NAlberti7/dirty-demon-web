import React from "react";
import styles from "./Input.module.scss";
const Input = ({ name, inputRef, isValid, type = "text", placeholder, ...props }) => {
  return (
    <input
      name={name}
      id={name}
      type={type}
      ref={inputRef}
      autoComplete='off'
      placeholder={placeholder}
      className={`${styles.input} ${!isValid && styles.invalid}`}
      autoComplete='new-password'
      {...props}
    />
  );
};

export default Input;
