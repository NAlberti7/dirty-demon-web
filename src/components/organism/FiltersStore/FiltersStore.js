import React, { useEffect, useState } from 'react'
import {ReactComponent as CloseArrow } from "../../../assets/images/CloseArrow.svg"
import Text from "../../atoms/Text/Text";
import { motion } from "framer-motion";
import styles from "./FiltersStore.module.scss"
import { setMainFilter, setSecondaryFilter, clearMainFilter, clearSecondaryFilter } from "../../../store/actions/generalActions"
import { useDispatch, useSelector } from "react-redux"

const variants = {
    open: {
      rotate: -45,
    },
    closed: {
      rotate: 0,
    },
  };

  const variants2 = {
    exit: { transition: { staggerChildren: 0.1 } },
    enter: { transition: { staggerChildren: 0.1 } },
  };

const FilterDrop = ({children, isBasics}) => {
    const [isOpen, isOpenHandler] = useState(false);
    return (
    <div className={styles.filterDrop}>
        <div className={`${styles.storeDrop} ${isBasics && styles.basics}`}>
      <div className={styles.storeDrop_title}>
        <Text size={14} priority={4} primary>
          FILTER BY
        </Text>
      </div>
        <motion.button
          variants={variants}
          animate={isOpen ? "open" : "closed"}
          className={`${styles.storeDrop_drop}`}
          onClick={() => isOpenHandler(!isOpen)}
        >
          <CloseArrow />
        </motion.button>
    </div>
    {isOpen && <motion.section
          className={styles.itemContainer_items}
          initial='initial'
          animate='enter'
          exit='exit'
          variants={variants2}
        >{children}
    </motion.section>}
    </div>    
    
  );
}

const FilterDesktop = ({children, isBasics}) => {
    return (
        <div className={styles.filters}>
            {children}
        </div>
    )
}


const FiltersStore = ({isMobile, isBasics}) => {
    const { mainFilter, secondaryFilter } = useSelector(state => state.general)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(clearMainFilter())
            dispatch(clearSecondaryFilter())
        }
    }, [])
    const onMainFilter = (filter) => {
        if(mainFilter === filter) dispatch(clearMainFilter())
        else dispatch(setMainFilter(filter))
    }

    const onSecondaryFilter = (filter) => {
        if(secondaryFilter === filter) dispatch(clearSecondaryFilter())
        else dispatch(setSecondaryFilter(filter))
    }

    const Wrapper = isMobile ? FilterDrop : FilterDesktop
    return (
    <Wrapper isBasics={isBasics}>
   {!isMobile && <Text priority={2} primary size={14}>
        FILTER BY
    </Text>}
    <div className={styles.filters_main}>
        <div onClick={() => onMainFilter("collections")}>
        <Text tag="p" primary size={28} opacity={mainFilter === "collections" ? 1 : 0.2}>
            COLLECTIONS
        </Text>
        </div>
        <div onClick={() => onMainFilter("basics")}>
        <Text tag="p" primary size={28} opacity={mainFilter === "basics" ? 1 : 0.2}>
            BASICS&trade;
        </Text>
        </div>
    </div>
    <div>
        <div onClick={() => onSecondaryFilter("tshirts")}>
        <Text tag="p" primary size={28} opacity={secondaryFilter === "tshirts" ? 1 : 0.2}>
            T-SHIRTS
        </Text>
        </div>
        <div onClick={() => onSecondaryFilter("hoodies")}>
        <Text tag="p" primary size={28} opacity={secondaryFilter === "hoodies" ? 1 : 0.2}>
            HOODIES
        </Text>
        </div>
        <div onClick={() => onSecondaryFilter("pants")}>
        <Text tag="p" primary size={28} opacity={secondaryFilter === "pants" ? 1 : 0.2}>
            PANTS
        </Text>
        </div>
        <div onClick={() => onSecondaryFilter("shorts")}>
        <Text tag="p" primary size={28} opacity={secondaryFilter === "shorts" ? 1 : 0.2}>
            SHORTS
        </Text>
        </div>
    </div>
    </Wrapper>
    )
}

export default FiltersStore
