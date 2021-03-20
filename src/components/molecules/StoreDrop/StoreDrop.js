import React from "react";
import styles from "./StoreDrop.module.scss";
import {ReactComponent as CloseArrow } from "../../../assets/images/CloseArrow.svg"
import Text from "../../atoms/Text/Text";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const variants = {
  open: {
    rotate: -45,
  },
  closed: {
    rotate: 0,
  },
};

const StoreDrop = ({ isOpen, isOpenHandler, title = "", isBasics }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className={styles.storeDrop}>
      <div className={styles.storeDrop_title}>
        <Text size={14} priority={4} primary>
          {title}
        </Text>
        <Text size={14} priority={4} opacity={0.5}>
        &nbsp; OVERSIZE
        </Text>
      </div>
      {!isMobile && (
        <motion.button
          variants={variants}
          animate={isOpen ? "open" : "closed"}
          className={`${styles.storeDrop_drop} ${isBasics && styles.basics}`}
          onClick={() => isOpenHandler(!isOpen)}
        >
          <CloseArrow />
        </motion.button>
      )}
    </div>
  );
};

export default StoreDrop;
