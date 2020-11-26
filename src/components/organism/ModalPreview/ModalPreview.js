import React, { useState, useRef, useEffect } from "react";
import PreviewImage from "../../atoms/PreviewImage/PreviewImage";
import ModalPreviewText from "../../molecules/ModalPreviewText/ModalPreviewText";
import { motion } from "framer-motion";
import styles from "./ModalPreview.module.scss";
import Look1 from "../../../assets/images/Look-1.png";
import Look2 from "../../../assets/images/look-2.png";
import { dismissPreviewModal } from "../../../store/actions/generalActions";
import { connect } from "react-redux";
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const variantsSecondary = {
  in: {
    y: 0,
    x: "40vw",
    transition,
  },
  out: {
    y: "90vh",
    x: "calc(100vw - 500px)",
    transition,
  },
};

const variantsPrimary = {
  in: {
    y: "90vh",
    x: 0,
    transition,
  },
  out: {
    y: 0,
    x: "33vw",
    transition,
  },
};

const variantsModal = {
  in: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: 0,
      ease: "easeInOut",
    },
  },
};

const ModalPreview = ({ dismissPreviewModal, modalPreviewImages, currentItem }) => {
  const [moveText, setMoveText] = useState(false);

  let { color, stock, name, price, colors, preview, tags } = currentItem;
  console.log(colors);
  let type;
  let isShirt = tags[0] === "remera";

  if (isShirt) {
    name = name.split("REMERA")[1];
    type = "OVERSIZE T-SHIRT";
  } else {
    name = name.split("BUZO")[1];
    type = "OVERSIZE HOODIE";
  }

  console.log(modalPreviewImages);

  const handleClick = (e) => {
    if (e.path.length === 8) dismissPreviewModal();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <>
      <div className={styles.modalPreviewOverlay} onClick={dismissPreviewModal}></div>
      <motion.div className={styles.modalPreview} variants={variantsModal} initial='out' animate='in' exit='out'>
        <ModalPreviewText type={type} itemName={name} moveText={moveText} />
        <motion.div variants={variantsPrimary} animate={moveText ? "in" : "out"} onClick={() => setMoveText(!moveText)} className={styles.modalPreview_container}>
          <PreviewImage src={preview[0]} />
        </motion.div>
        <motion.div variants={variantsSecondary} animate={moveText ? "in" : "out"} onClick={() => setMoveText(!moveText)} className={styles.modalPreview_container}>
          <PreviewImage src={preview[1]} />
        </motion.div>
      </motion.div>
    </>
  );
};

const mapStateToProps = (state) => ({
  modalPreviewImages: state.general.modalPreviewImages,
  currentItem: state.general.currentItem,
});

export default connect(mapStateToProps, { dismissPreviewModal })(ModalPreview);
