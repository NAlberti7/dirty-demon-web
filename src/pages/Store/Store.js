import React from "react";
import styles from "./Store.module.scss";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { sendToItemView } from "../../store/actions/generalActions";
import Text from "../../components/atoms/Text/Text";
import StoreSection from "../../components/organism/StoreSection/StoreSection";
import { useMediaQuery } from "react-responsive";
const pageVariants = {
  initial: {
    opacity: 0,
    y: 500,
    transition: {
      ease: "linear",
      duration: 0.3,
      delay: 0,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Store = ({ itemList, sendToItemView, history }) => {
  const handleClick = (item) => {
    sendToItemView(item);
    history.push(`/item/${item._id}`);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const shirtData = itemList && itemList.filter((item) => item.category === "remeras");
  const hoodieData = itemList && itemList.filter((item) => item.category === "buzo");
  const merchData = itemList && itemList.filter((item) => item.category === "merch");
  const pantsData = itemList && itemList.filter((item) => item.category === "pants");
  return (
    <motion.main
      initial='initial'
      animate='in'
      exit='out'
      variants={isMobile ? null : pageVariants}
      className={styles.store}
    >
      <div className={styles.store_container}>
        <Text priority={1} primary size={42}>
          CLOTHING
        </Text>
        {hoodieData && (
          <StoreSection data={hoodieData} title='HOODIES' season='DROP 1 / SS2020' isHoodie />
        )}
        {shirtData && <StoreSection data={shirtData} title='T-SHIRTS' season='DROP 1 / SS2020' />}
        {pantsData && (
          <StoreSection data={pantsData} title='PANTS' season='DROP 2 / SS2020' isPants />
        )}
        {merchData && <StoreSection data={merchData} title='MERCH' season='DROP 2 / SS2020' />}
        {/* {itemList &&
          itemList.slice(0, 3).map((item) => {
            return <Item item={item} key={item.name} handleClick={handleClick} />;
          })}
      </div>
      <div className={styles.store_container}>
        {itemList &&
          itemList.slice(3, 6).map((item) => {
            return <Item item={item} key={item.name} handleClick={handleClick} />;
          })}
      </div>
      <div className={styles.store_container}>
        {itemList &&
          itemList.slice(6, itemList.length).map((item) => {
            return <Item item={item} key={item.name} handleClick={handleClick} />;
          })} */}
      </div>
    </motion.main>
  );
};
const mapStateToProps = (state) => {
  return {
    itemList: state.general.itemList,
  };
};
export default connect(mapStateToProps, { sendToItemView })(Store);
