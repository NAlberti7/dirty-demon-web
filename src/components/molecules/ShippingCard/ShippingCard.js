import React from "react";
import styles from "./ShippingCard.module.scss";
import Text from "../../atoms/Text/Text";
import { motion } from "framer-motion";

const ShippingCard = ({ item, isSelected, setSelected, controls }) => {
  const { type, description, price } = item;
  return (
    <motion.div
      animate={controls}
      className={`${styles.shippingCard} ${isSelected && styles.selected}`}
      onClick={() => setSelected(item)}
    >
      <Text primary tag='h2' size={14} color='white' align='left'>
        {type}
      </Text>
      <Text tag='h3' size={14} color='white' opacity={isSelected ? 1 : 0.4} align='left'>
        {description}
      </Text>
      <Text primary tag='h4' size={14} color='orange' align='left'>
        {price}
      </Text>
    </motion.div>
  );
};

export default ShippingCard;
