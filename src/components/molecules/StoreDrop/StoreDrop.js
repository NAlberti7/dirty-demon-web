import React from "react";
import styles from "./StoreDrop.module.scss";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const variants = {
  open: {
    rotate: -90,
  },
  closed: {
    rotate: 0,
  },
};

const StoreDrop = ({ isOpen, isOpenHandler, title = "" }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className={styles.storeDrop}>
      <div className={styles.storeDrop_title}>
        <Text size={22} priority={4}>
          {title}
        </Text>
      </div>
      {!isMobile && (
        <motion.button
          variants={variants}
          animate={isOpen ? "open" : "closed"}
          className={styles.storeDrop_drop}
          onClick={() => isOpenHandler(!isOpen)}
        >
          <Icon type='arrow' customWidth='21px' />
        </motion.button>
      )}
    </div>
  );
};

export default StoreDrop;
