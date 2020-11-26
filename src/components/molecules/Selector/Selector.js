import React from "react";
import Text from "../../atoms/Text/Text";
import Dot from "../Dot/Dot";
import styles from "./Selector.module.scss";
const Selector = ({ data, handleSelect, title, config, selected }) => {
  const { value, id, others } = config;
  return (
    <div className={styles.selector}>
      <Text size={14} color='white' priority={4} primary>
        {title}
      </Text>
      <div className={styles.selector_container}>
        {data &&
          data.map((item) => {
            return <Dot value={item[value]} handleSelect={handleSelect} selected={selected === item[value]} {...others} />;
          })}
      </div>
    </div>
  );
};

export default Selector;
