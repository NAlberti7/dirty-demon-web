import React, { useState } from "react";
import StoreDrop from "../../molecules/StoreDrop/StoreDrop";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

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

const Item = ({ image, isOpen, config }) => {
  return (
    <motion.div
      className={`${styles.item} ${!isOpen && styles.isClosed}`}
      variants={thumbnailVariants}
      {...config}
    >
      <img src={image} />
    </motion.div>
  );
};

const variants2 = {
  exit: { transition: { staggerChildren: 0.1 } },
  enter: { transition: { staggerChildren: 0.1 } },
};

const MediaContainer = ({ data, isOpen }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/media/${data.id}`);
  };

  return (
    <div className={`${styles.itemContainer}`} onClick={handleClick}>
      <motion.section
        className={styles.itemContainer_items}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants2}
      >
        {data &&
          data.images.map((image) => (
            <Item image={image} handleClick={handleClick} isOpen={isOpen} />
          ))}
      </motion.section>
    </div>
  );
};

const StoreSection = ({ data, defaultOpen = true }) => {
  const [isOpen, isOpenHandler] = useState(defaultOpen);
  const { type, name } = data;
  return (
    <section className={styles.storeSection}>
      <StoreDrop isOpen={isOpen} isOpenHandler={isOpenHandler} title={name} type={type} />
      <MediaContainer isOpen={isOpen} data={data} />
    </section>
  );
};

export default StoreSection;
