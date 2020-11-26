import React from "react";
import styles from "./FieldGroup.module.scss";

const FieldGroup = ({ children }) => {
  return <div className={styles.fieldGroup}>{children}</div>;
};

export default FieldGroup;
