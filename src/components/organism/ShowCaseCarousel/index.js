import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ShowCaseItem = ({ image, isPreview, isSlipper, isHoodie, isLast }) => {
  return (
    <div
      className={`${styles.sliderItem} ${isPreview && styles.isPreview} ${isSlipper &&
        styles.isSlipper} ${isHoodie && styles.isHoodie} ${isLast && styles.last}`}
    >
      <img src={image} />
    </div>
  );
};


const ShowCaseCarousel = ({ currentItem }) => {
  const constraintsRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const { preview, itemPicture } = currentItem;
  const { front, back } = itemPicture;
  const isSlipper = currentItem.category === "merch";
  const isPants = currentItem.category === "pants";
  const isHoodie = currentItem.category === "buzo";
  const showPreview = !isPants || !isSlipper;

  console.log("isPants", isPants);

  let previewFront;
  let previewBack;

  if (!isSlipper && !isPants) {
    previewFront = preview[0];
    previewBack = preview[1];
  }

  if (isMobile && !isSlipper && !isPants) {
    previewFront.replace("800", "600");
    previewBack.replace("800", "600");
  }

  return (
    <section className={styles.showCaseCarousel_section}>
      <motion.div className={styles.showCaseCarousel} ref={constraintsRef}>
        <motion.div
          className={styles.showCaseCarousel_container}
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.4}
        >
          <ShowCaseItem image={front} isHoodie={isHoodie} />
          <ShowCaseItem image={back} isHoodie={isHoodie} />
          <ShowCaseItem image={previewFront} isPreview />
          <ShowCaseItem image={previewBack} isPreview isLast/>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ShowCaseCarousel;
