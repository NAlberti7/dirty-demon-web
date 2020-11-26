import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import ItemSheet from "../../components/organism/ItemSheet/ItemSheet";
import ItemShowCase from "../../components/atoms/Item/Item";
import PreviewContainer from "../../components/molecules/PreviewContainer/PreviewContainer";
import styles from "./Item.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Text from "../../components/atoms/Text/Text";
import StoreSection from "../../components/organism/StoreSection/StoreSection";
import ModalPreview from "../../components/organism/ModalPreview/ModalPreview";
import DetailsMobile from "../../components/organism/DetailsMobile/DetailsMobile";
import SizeMobile from "../../components/organism/SizesMobile/SizesMobile";
import Slider from "../../components/organism/Slider/Slider";
import Look1 from "../../assets/images/Look-1.png";
import Look2 from "../../assets/images/look-2.png";
import { getItem } from "../../store/actions/generalActions";
import { useMediaQuery } from "react-responsive";
const pageVariants = {
  initial: {
    opacity: 0,
    x: 0,
    scale: 1,
    transition: {
      ease: "linear",
      duration: 0.3,
      delay: 0,
    },
  },
  in: {
    opacity: 1,
    scale: 1,
    x: 0,
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

const recommendVariants = {
  in: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.5,
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

const images = [Look1, Look2];

const Item = ({
  currentItem,
  itemList,
  showPreviewModal,
  match,
  history,
  getItem,
  showDetailsModal,
  showSizeModal,
}) => {
  const recommendData =
    currentItem &&
    itemList &&
    itemList.filter((item) => item.category === "remeras" && item._id !== currentItem._id);
  const [isPreviewActive, setPreviewActive] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (!currentItem) {
      getItem(match.params.id, history);
    }
  }, []);

  return (
    <>
      <motion.main
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        className={styles.item}
      >
        {currentItem ? (
          <motion.div className={styles.item_container} initial='exit' animate='enter' exit='exit'>
            <AnimatePresence exitBeforeEnter>
              {!isPreviewActive && (
                <>
                  <ItemSheet currentItem={currentItem} key='itemsheet' />
                  {isMobile ? (
                    <Slider currentItem={currentItem} />
                  ) : (
                    <ItemShowCase
                      item={currentItem}
                      fromShowcase
                      key='itemshowcae'
                      config={{ initial: "exit", animate: "enter", exit: "exit" }}
                    />
                  )}
                </>
              )}
            </AnimatePresence>
            {!isMobile && (
              <PreviewContainer
                previewImages={currentItem.preview}
                currentItem={currentItem}
                isPreviewActive={isPreviewActive}
                setPreviewActive={setPreviewActive}
              />
            )}
          </motion.div>
        ) : null}
        {!isMobile && (
          <motion.div
            className={styles.item_recommend}
            variants={recommendVariants}
            initial='out'
            exit='out'
            animate='in'
          >
            <Text priority={2} primary size={42}>
              RECOMENDADO PARA TI
            </Text>
            {recommendData && (
              <StoreSection data={recommendData} title='T-SHIRTS' season='DROP 1 / SS2020' />
            )}
          </motion.div>
        )}
      </motion.main>
      {isMobile && (
        <>
          <AnimatePresence exitBeforeEnter>
            {showSizeModal && <SizeMobile key='sizeMobile' />}
            {showDetailsModal && <DetailsMobile key='detailsmobile' />}
          </AnimatePresence>
        </>
      )}
      {showPreviewModal && <ModalPreview />}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentItem: state.general.currentItem,
  itemList: state.general.itemList,
  showPreviewModal: state.general.showPreviewModal,
  showDetailsModal: state.general.showDetailsModal,
  showSizeModal: state.general.showSizeModal,
});

export default connect(mapStateToProps, { getItem })(Item);
