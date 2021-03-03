import React, { useState } from "react";
import StoreDrop from "../../molecules/StoreDrop/StoreDrop";
import ItemContainer from "../../molecules/ItemContainer/ItemContainer";
import styles from "./StoreSection.module.scss";

const StoreSection = ({
  data,
  title = "",
  season = "",
  defaultOpen = true,
  isHoodie,
  isPants,
  newCollection,
}) => {
  const [isOpen, isOpenHandler] = useState(defaultOpen);
  data = !newCollection
    ? data.filter((item) => !item.tags.find((el) => el == "collection 3"))
    : data;

  let newHoodies;
  let oldHoodies;

  if (isHoodie) {
    newHoodies = data.filter((item) => item.tags.find((tag) => tag === "drop2"));
    oldHoodies = data.filter((item) => !item.tags.find((tag) => tag === "drop2"));
  }

  return (
    <section className={styles.storeSection}>
      <StoreDrop isOpen={isOpen} isOpenHandler={isOpenHandler} title={title} />
      {!isHoodie && <ItemContainer isOpen={isOpen} data={data} season={season} isPants={isPants} />}
      {isHoodie && (
        <div className={styles.storeSection_hoodies}>
          <ItemContainer isOpen={isOpen} data={newHoodies} season={"DROP 2 / FW2020"} isHoodie />
          <ItemContainer isOpen={isOpen} data={oldHoodies} season={season} isHoodie isOldHoodie />
        </div>
      )}
    </section>
  );
};

export default StoreSection;
