import React from "react";
import styles from "./ItemInfo.module.scss";
import Text from "../../atoms/Text/Text";

const ItemInfo = ({ type, color, isSllpper, isPants, isNew, fromDetails, currentItem }) => {
  let title = "";
  let description1 = "";
  let description2 = "";
  if (isSllpper) {
    description1 = "PANTUFLAS";
  } else if (isPants) {
    title = `JOGGIN FRIZA ${color.toUpperCase()}`;
    description1 = "ESTAMPA BORDADA";
  } else {
    title = `${type.toUpperCase()} ${color.toUpperCase()}`;
    description1 = "ESTAMPA EN SERIGRAFIA";
  }

  const isCollection = currentItem && currentItem.tags.find((el) => el == "collection 3");
  return (
    <div className={styles.itemInfo}>
      <div className={styles.itemInfo_container}>
        <Text tag="p" size={14} opacity={0.5}>
          {isSllpper && (
            <Text tag="span" size={14} color="orange" >
              EXCLUSIVE MERCH
            </Text>
          )}
          {title}
          <br />
          {description1} <br />
          <Text tag="span" size={14}>
            {isSllpper ? "ESTILO HOTEL" : "*(NO DIGITAL)"}
          </Text>
          <br />
          {isSllpper ? "TALLE UNICO (39/43)" : "CORTE OVERSIZED"} <br />
          {!isSllpper && "100% ALGODON"}
        </Text>
      </div>
    </div>
  );
};

export default ItemInfo;
