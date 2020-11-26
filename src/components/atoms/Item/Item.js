import React from "react";
import styles from "./Item.module.scss";
import { motion } from "framer-motion";
import Text from "../Text/Text";
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

function isSoldOut(stock) {
  return stock.reduce((accum, item) => accum + item.stock, 0);
}

const Item = ({ item, handleClick, fromShowcase, config, isOldHoodie }) => {
  const front = item.itemPicture.front;
  const back = item.itemPicture.back;

  const sold = isSoldOut(item.stock);

  return (
    <motion.div
      className={`${styles.item} ${fromShowcase && styles.fromShowcase}`}
      onClick={() => {
        if (!fromShowcase) handleClick(item);
      }}
      variants={!fromShowcase ? thumbnailVariants : imageVariants}
      {...config}
      // initial='exit'
      // animate='enter'
      // exit='exit'
    >
      {!sold && (
        <div className={styles.old}>
          <Text size={13} priority={6} primary color="black">
            AGOTADO
          </Text>
        </div>
      )}
      <img
        src={front}
        onMouseOver={(e) => (e.currentTarget.src = back)}
        onMouseOut={(e) => (e.currentTarget.src = front)}
      />
    </motion.div>
  );
};

export default Item;
