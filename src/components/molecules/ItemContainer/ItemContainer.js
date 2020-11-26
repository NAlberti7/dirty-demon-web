import React from "react";
import styles from "./ItemContainer.module.scss";
import Text from "../../atoms/Text/Text";
import Item from "../../atoms/Item/Item";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import { sendToItemView } from "../../../store/actions";
import { useHistory } from "react-router-dom";

const variants2 = {
  exit: { transition: { staggerChildren: 0.1 } },
  enter: { transition: { staggerChildren: 0.1 } },
};

const variants = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 },
};

const transition = { duration: 1, ease: "easeInOut" };

const ItemContainer = ({
  season = "",
  data,
  isOpen,
  sendToItemView,
  isHoodie,
  isOldHoodie,
  isPants,
}) => {
  const history = useHistory();

  const handleClick = (item) => {
    sendToItemView(item);
    history.push(`/item/${item._id}`);
  };

  return (
    <div className={`${styles.itemContainer} ${isHoodie || isPants ? styles.hoodie : ""}`}>
      <Text size={15} priority={5} primary opacity={0.3} customStyle={styles.itemContainer_title}>
        {season}
      </Text>
      {isOpen && (
        // <motion.section variant={variants} transition={transition} initial='collapsed' animate='open' exit='collapsed' className={styles.itemContainer_items}>
        <motion.section
          className={styles.itemContainer_items}
          initial='initial'
          animate='enter'
          exit='exit'
          variants={variants2}
        >
          {data &&
            data.map((item) => (
              <Item item={item} handleClick={handleClick} isOldHoodie={isOldHoodie} />
            ))}
        </motion.section>
      )}
    </div>
  );
};

export default connect(null, { sendToItemView })(ItemContainer);
