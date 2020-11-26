import React, { useRef, useEffect } from "react";
import styles from "./PreviewContainer.module.scss";
import PreviewImage from "../../atoms/PreviewImage/PreviewImage";
import { motion } from "framer-motion";
import {
  showPreviewModal,
  setPreviewModalImages,
  setPreviewModalInfo,
} from "../../../store/actions/generalActions";
import { connect } from "react-redux";
const variants = {
  in: {
    top: 50,
    right: 500,
    opacity: 1,
    scale: 1.3,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  out: {
    top: 50,
    right: -200,
    opacity: 0.3,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  initial: {
    top: 50,
    right: -200,
    opacity: 0.3,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const PreviewContainer = ({
  previewImages,
  isPreviewActive,
  setPreviewActive,
  showPreviewModal,
  setPreviewModalImages,
  currentItem,
  setPreviewModalInfo,
}) => {
  const setPreviewHandler = () => {
    if (isPreviewActive) {
      setPreviewModalImages(previewImages);
      setPreviewActive(!isPreviewActive);
    } else {
      setPreviewActive(!isPreviewActive);
    }
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setPreviewActive(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const node = useRef();

  return (
    <motion.div
      variants={variants}
      animate={isPreviewActive ? "in" : "out"}
      whileHover={{ opacity: 1 }}
      initial='ar'
      className={`${styles.previewContainer} `}
      onClick={setPreviewHandler}
      ref={node}
    >
      {previewImages && previewImages.map((img) => <PreviewImage src={img} />)}
    </motion.div>
  );
};

export default connect(null, { showPreviewModal, setPreviewModalImages, setPreviewModalInfo })(
  PreviewContainer
);
