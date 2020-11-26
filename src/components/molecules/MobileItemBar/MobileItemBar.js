import React from "react";
import styles from "./MobileItemBar.module.scss";
import Button from "../../molecules/Button/Button";
import { connect } from "react-redux";
import { openDetailsModal, openSizeModal } from "../../../store/actions/generalActions";

const MobileItemBar = ({ openDetailsModal, openSizeModal, isSllpper }) => {
  return (
    <div className={styles.mobileItemBar}>
      <Button
        handleOnClick={openSizeModal}
        customStyle={styles.mobileItemBar_button}
        disabled={isSllpper}
      >
        TABLA DE TALLES
      </Button>
      <Button handleOnClick={openDetailsModal} customStyle={styles.mobileItemBar_button}>
        DETALLES
      </Button>
    </div>
  );
};

export default connect(null, { openDetailsModal, openSizeModal })(MobileItemBar);
