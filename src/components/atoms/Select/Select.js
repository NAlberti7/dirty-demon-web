import React from "react";
import styles from "./Select.module.scss";
import PROVINCIAS from "../../../utils/provinceList";

const Select = ({ name, inputRef, isValid }) => {
  return (
    <select name={name} ref={inputRef} className={`${styles.select} ${!isValid && styles.invalid}`}>
      <option value='' hidden>
        PROVINCIA
      </option>
      {PROVINCIAS.map((prov) => {
        return <option value={prov.name}> {prov.name} </option>;
      })}
    </select>
  );
};

export default Select;
