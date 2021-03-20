import React from "react";
import Input from "../../atoms/Input/Input";
import Select from "../../atoms/Select/Select";
import TextArea from "../../atoms/TextArea/TextArea";
import Text from "../../atoms/Text/Text";
import styles from "./Field.module.scss";

const Field = ({ name, placeholder, inputRef, type, error, isSelect, isTextArea }) => {
  let isValid = !error;

  const inputHandler = () => {
    if (isSelect) return <Select name={name} inputRef={inputRef} isValid={isValid} />;
    else if (isTextArea) return <TextArea name={name} inputRef={inputRef} isValid={isValid} />;
    else
      return (
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          isValid={isValid}
          inputRef={inputRef}
        />
      );
  };

  return (
    <div className={`${styles.field} ${isTextArea && styles.isTextArea}`}>
      {inputHandler()}
      <Text tag='span' size={12} weight='semibold' align='center' color='white'>
        {error && error.message}
      </Text>
    </div>
  );
};

export default Field;
