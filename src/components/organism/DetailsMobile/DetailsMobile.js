import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./DetailsMobile.module.scss";
import ItemInfo from "../../molecules/ItemInfo/ItemInfo";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import { connect } from "react-redux";
import { closeDetailsModal } from "../../../store/actions/generalActions";
import { ReactComponent as Arrow } from "../../../assets/images/arrow2.svg";
import { motion } from "framer-motion";

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
const DetailsMobile = ({ currentItem, closeDetailsModal }) => {
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

  console.log(color);

  const tipo = currentItem.tags[0];
  if (color === "negro") {
    if (isShirt) color = "negra";
  } else if (color === "blanco") {
    if (isShirt) color = "blanca";
  }
  return (
    <motion.div
      className={styles.detailsMobile}
      variants={variants}
      animate='in'
      exit='out'
      initial='out'
    >
      <div className={styles.arrow} onClick={closeDetailsModal}>
        <Arrow />
      </div>
      <ItemInfo
        color={color}
        type={tipo}
        isSllpper={isSllpper}
        isNew={isNew}
        fromDetails
        isPants={isPants}
      />
      <Text primary priority={3} size={15} color='black' align='center'>
        CUIDADOS DE PRENDA
      </Text>
      <Text priority={4} size={14} color='black' align='center'>
        LAVAR CON AGUA FRIA (40º O MENOS) <br />
        NO USAR CLORO <br />
        NO USAR SECARROPA <br />
        NO PLANCHAR SOBRE LA ESTAMPA <br />
      </Text>
      <div className={styles.safety}>
        <Icon type='care1' customWidth='42px' />
        <Icon type='care2' customWidth='32px' />
        <Icon type='care3' customWidth='36px' />
        <Icon type='care4' customWidth='50px' />
      </div>
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  currentItem: state.general.currentItem,
});
export default connect(mapStateToProps, { closeDetailsModal })(DetailsMobile);
