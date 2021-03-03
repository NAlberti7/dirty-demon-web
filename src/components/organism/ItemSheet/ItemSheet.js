import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setColor, setItemByColor, openSizeModal } from "../../../store/actions/generalActions";
import { addItemCart } from "../../../store/actions/cartActions";
import ItemNavigation from "../../molecules/ItemNavigation/ItemNavigation";
import ItemInfo from "../../molecules/ItemInfo/ItemInfo";
import Selector from "../../molecules/Selector/Selector";
import Button from "../../molecules/Button/Button";
import styles from "./ItemSheet.module.scss";
import Text from "../../atoms/Text/Text";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import MobileItemBar from "../../molecules/MobileItemBar/MobileItemBar";
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.5, ...transition } },
};

const config = {
  value: "size",
  id: "_id",
  others: {},
};

const configColor = {
  value: "color",
  id: "id",
  others: {},
};

const ItemSheet = ({ currentItem, setItemByColor, addItemCart, openSizeModal }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [emptyStock, setEmptyStock] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  let { color, stock, name, price, colors, tags } = currentItem;

  let isShirt = tags[0] === "remera";
  let isHoodie = tags[0] === "buzo";
  let isSllpper = tags[0] === "slippers";
  let isPants = tags[0] === "pants";
  let isNew = tags[2] === "drop2" || tags[1] === "drop2";
  if (isShirt) {
    // name = name.split("REMERA")[1];
  } else if (isHoodie) {
    name = name.replace("BUZO", "HOODIE");
  }

  const tipo = currentItem.tags[0];
  if (color === "negro") {
    if (isShirt) color = "negra";
  } else if (color === "blanco") {
    if (isShirt) color = "blanca";
  }

  const colorHandler = (value) => {
    let toSet = colors.find((item) => item.color === value);
    setItemByColor(toSet.id);
    setSelectedColor(value);
  };

  useEffect(() => {
    let toSet = colors.find((item) => item.id === currentItem._id);
    setSelectedColor(toSet.color);
  }, []);

  useEffect(() => {
    if (selectedSize) {
      const itemToCheck = stock.find((stockItem) => {
        return stockItem.size === selectedSize;
      });
      let isSoldOut = itemToCheck.stock === 0;
      setEmptyStock(isSoldOut);
    }
  }, [selectedSize, currentItem]);

  return (
    <motion.div
      className={styles.itemSheet}
      variants={backVariants}
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <div className={styles.itemSheet_container}>
        <ItemNavigation title={name} isMobile={isMobile} />
        <Text size={isMobile ? 21 : 32} primary priority={1} color="orange">
          ${price}
        </Text>
      </div>
      {!isMobile && (
        <div className={styles.itemSheet_container}>
          <ItemInfo
            color={color}
            type={tipo}
            isSllpper={isSllpper}
            isNew={isNew}
            isPants={isPants}
            currentItem={currentItem}
          />
        </div>
      )}
      {!isMobile && (
        <div
          onClick={openSizeModal}
          style={{ width: "100%", cursor: "pointer", paddingBottom: "10px" }}
        >
          <Text size={14} color="orange" priority={4} primary customStyle={styles.decor}>
            TABLA DE TALLES
          </Text>
        </div>
      )}
      {/* <Button handleOnClick={openSizeModal} customStyle={styles.tabla} disabled={false}>
        TABLA DE TALLES
      </Button> */}
      <div className={`${styles.itemSheet_container} ${styles.selector}`}>
        <Selector
          data={stock}
          title="SELECCIONAR TALLE"
          config={config}
          selected={selectedSize}
          handleSelect={setSelectedSize}
        />
        <Selector
          data={colors}
          title="COLOR"
          config={configColor}
          selected={selectedColor}
          handleSelect={colorHandler}
        />
      </div>
      {isMobile && <MobileItemBar isSllpper={isSllpper} />}
      <div className={`${styles.itemSheet_container} ${styles.actionButton}`}>
        <Button
          disabled={!selectedSize || emptyStock}
          handleOnClick={() => addItemCart({ ...currentItem, size: selectedSize })}
        >
          {emptyStock ? "AGOTADO" : "AÑADIR AL CARRITO"}
        </Button>
      </div>
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  currentColors: state.general.currentColors,
});

export default connect(mapStateToProps, { setItemByColor, addItemCart, openSizeModal })(ItemSheet);
