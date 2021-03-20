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
  isBasics,
}) => {
  const [isOpen, isOpenHandler] = useState(defaultOpen);
  return (
    <section className={styles.storeSection}>
     <StoreDrop isOpen={isOpen} isOpenHandler={isOpenHandler} title={title} isBasics={isBasics}/>
     <ItemContainer isOpen={isOpen} data={data} season={season} isPants={isPants} />
    </section>
  );
};

export default StoreSection;
