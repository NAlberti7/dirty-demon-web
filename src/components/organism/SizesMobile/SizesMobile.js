import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./SizesMobile.module.scss";
import ItemInfo from "../../molecules/ItemInfo/ItemInfo";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import { connect } from "react-redux";
import { closeSizeModal } from "../../../store/actions/generalActions";
import { ReactComponent as Arrow } from "../../../assets/images/arrow2.svg";
import { motion } from "framer-motion";
import Table from "../../molecules/Table/Table";
const variants = {
  in: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 30,
      stiffness: 80,
    },
  },
  out: {
    opacity: 1,
    y: 500,
    x: "-50%",
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 30,
      stiffness: 80,
    },
  },
};
const DetailsMobile = ({ currentItem, closeSizeModal }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  let { color, stock, name, price, colors, tags } = currentItem;

  let isShirt = tags[0] === "remera";
  let isHoodie = tags[0] === "buzo";
  let isSllpper = tags[0] === "slippers";
  let isPants = tags[0] === "pants";
  let isNew = tags[2] === "drop2" || tags[1] === "drop2";

  if (isShirt) {
    name = name.split("REMERA")[1];
  } else if (isHoodie) {
    name = name.split("BUZO")[1];
  }

  const tipo = currentItem.tags[0];
  if (color === "negro") {
    color = "negra";
  } else if (color === "blanco") {
    color = "blanca";
  }
  return (
    <motion.div
      className={styles.detailsMobile}
      variants={variants}
      animate='in'
      exit='out'
      initial='out'
    >
      <div className={styles.arrow} onClick={closeSizeModal}>
        <Arrow />
      </div>
      <Text primary priority={3} size={15} color='black' align='center'>
        TABLA DE TALLES
      </Text>
      <Table isShirt={isShirt} isPants={isPants} />
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  currentItem: state.general.currentItem,
});
export default connect(mapStateToProps, { closeSizeModal })(DetailsMobile);
