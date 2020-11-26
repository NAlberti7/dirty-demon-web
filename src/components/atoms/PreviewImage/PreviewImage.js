import React from "react";
import styles from "./PreviewImage.module.scss";

const PreviewImage = ({ src, onClick }) => {
  return (
    <div className={styles.previewImage} onClick={onClick}>
      <img src={src} />
    </div>
  );
};

export default PreviewImage;
