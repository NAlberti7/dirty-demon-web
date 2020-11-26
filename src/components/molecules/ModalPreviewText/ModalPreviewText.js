import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./ModalPreviewText.module.scss";
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const variantsSecondary = {
  in: {
    x: -250,
    transition,
  },
  out: {
    x: 250,
    transition,
  },
};

const variantsPrimary = {
  in: {
    x: 250,
    transition,
  },
  out: {
    x: -250,
    transition,
  },
};

const ModalPreviewText = ({ type, itemName, moveText }) => {
  return (
    <motion.div className={styles.modalPreviewText}>
      <motion.div variants={variantsPrimary} animate={moveText ? "in" : "out"}>
        <Text priority={2} size={85} customStyle={styles.stroke} align="center">
          {type}
        </Text>
      </motion.div>

      <motion.div variants={variantsSecondary} animate={moveText ? "in" : "out"}>
        <Text priority={2} size={85} customStyle={styles.stroke} align="center">
          ART. "{itemName}"
        </Text>
      </motion.div>
    </motion.div>
  );
};

export default ModalPreviewText;
