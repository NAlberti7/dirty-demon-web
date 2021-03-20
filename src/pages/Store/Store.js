import React, { useEffect } from "react";
import styles from "./Store.module.scss";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { sendToItemView } from "../../store/actions/generalActions";
import Text from "../../components/atoms/Text/Text";
import StoreSection from "../../components/organism/StoreSection/StoreSection";
import Filters from "../../components/organism/FiltersStore/FiltersStore"
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

const Store = ({ itemList, sendToItemView, history, secondaryFilter, mainFilter }) => {
  const handleClick = (item) => {
    sendToItemView(item);
    history.push(`/item/${item._id}`);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  let shirtData = itemList && itemList.filter((item) => item.category === "remeras");
  const hoodieData = itemList && itemList.filter((item) => item.category === "buzo");
  const merchData = itemList && itemList.filter((item) => item.category === "merch");
  const pantsData = itemList && itemList.filter((item) => item.category === "pants");
  const shortsData = itemList && itemList.filter((item) => item.category === "short");
  const newCollection =
    itemList && itemList.filter((item) => item.tags.find((el) => el == "collection 3"));
  console.log("new", shirtData);
  
  const getShirtData = () => {
    if(mainFilter){
      return mainFilter === "basics" ? shirtData.filter((item) => item.tags.find((el) => el == "basics")) : shirtData.filter((item) => !item.tags.find((el) => el == "basics"))
    }else{
      return shirtData
    }
  }

  let finalShirtData = getShirtData()
  
  useEffect(() => {
    if(mainFilter === "basics"){
      document.documentElement.style.setProperty("--main-white", "#000");
      document.documentElement.style.setProperty("--main-black", "#fff");
    }else{
      document.documentElement.style.setProperty("--main-white", "#fff");
      document.documentElement.style.setProperty("--main-black", "#000");
    }
  }, [mainFilter])

  useEffect(() => {
    return () => {
      document.documentElement.style.setProperty("--main-white", "#fff");
      document.documentElement.style.setProperty("--main-black", "#000");
    }
  }, [])

  const isBasics = mainFilter === "basics"
  console.log("final", finalShirtData)

  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={isMobile ? null : pageVariants}
      className={styles.store}
    >
      {isMobile && <Filters isMobile={isMobile} isBasics={isBasics} />}
     {!isMobile && <div className={styles.filter_container}>
      <Text priority={1} primary size={71}>
          SHOP
        </Text>
       {!isMobile && <Filters isMobile={isMobile}/>}
      </div>}
      <div className={styles.store_container}>
        {finalShirtData && (!secondaryFilter || secondaryFilter === "tshirts") && <StoreSection data={finalShirtData} title="T-SHIRTS" season="DROP 1 / SS2020" newCollection isBasics={isBasics}/>}
        {!isBasics && hoodieData && (!secondaryFilter || secondaryFilter === "hoodies") && (
          <StoreSection data={hoodieData} title="HOODIES" season="DROP 1 / SS2020" isHoodie />
        )}
        {!isBasics && pantsData && (!secondaryFilter || secondaryFilter === "pants") &&  (
          <StoreSection data={pantsData} title="PANTS" season="DROP 2 / SS2020" isPants />
        )}
        {!isBasics && shortsData && (!secondaryFilter || secondaryFilter === "shorts") &&  (
          <StoreSection data={shortsData} title="SHORTS" season="DROP 2 / SS2020" isPants />
        )}
      </div>
    </motion.main>
  );
};
const mapStateToProps = (state) => {
  return {
    itemList: state.general.itemList,
    mainFilter: state.general.mainFilter,
    secondaryFilter: state.general.secondaryFilter
  };
};
export default connect(mapStateToProps, { sendToItemView })(Store);
