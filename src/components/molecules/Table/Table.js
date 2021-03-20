import React from "react";
import styles from "./Table.module.scss";

//OLD
const SHIRTOLD = [
  {
    talle: "S",
    largo: "65cm",
    ancho: "52cm",
  },
  {
    talle: "M",
    largo: "69cm",
    ancho: "55cm",
  },
  {
    talle: "L",
    largo: "73cm",
    ancho: "59cm",
  },
  {
    talle: "XL",
    largo: "77cm",
    ancho: "64cm",
  },
];

//NEW
const SHIRT = [
  {
    talle: "S",
    largo: "75cm",
    ancho: "57cm",
  },
  {
    talle: "M",
    largo: "78cm",
    ancho: "59cm",
  },
  {
    talle: "L",
    largo: "80cm",
    ancho: "62cm",
  },
  {
    talle: "XL",
    largo: "82cm",
    ancho: "64cm",
  },
];

//OLD
const HOODIEOLD = [
  {
    talle: "S",
    largo: "68cm",
    ancho: "57cm",
    manga: "54cm",
  },
  {
    talle: "M",
    largo: "71cm",
    ancho: "60cm",
    manga: "57cm",
  },
  {
    talle: "L",
    largo: "75cm",
    ancho: "62cm",
    manga: "60cm",
  },
  {
    talle: "XL",
    largo: "77cm",
    ancho: "66cm",
    manga: "62cm",
  },
];

const HOODIE = [
  {
    talle: "S",
    largo: "73cm",
    ancho: "62cm",
    manga: "54cm",
  },
  {
    talle: "M",
    largo: "75cm",
    ancho: "65cm",
    manga: "57cm",
  },
  {
    talle: "L",
    largo: "77cm",
    ancho: "68cm",
    manga: "60cm",
  },
  {
    talle: "XL",
    largo: "80cm",
    ancho: "69cm",
    manga: "62cm",
  },
];

const PANTS = [
  {
    talle: "S",
    largo: "110cm",
    ancho: "32cm (cede 45cm)",
  },
  {
    talle: "M",
    largo: "110cm",
    ancho: "35cm (cede 48cm)",
  },
  {
    talle: "L",
    largo: "113cm",
    ancho: "37cm (cede 51cm)",
  },
  {
    talle: "XL",
    largo: "113cm",
    ancho: "40cm (cede 54cm)",
  },
];

const SHORTS = [
  {
    talle: "S",
    largo: "46cm",
    ancho: "36cm",
    pierna: "32cm",
  },
  {
    talle: "M",
    largo: "49cm",
    ancho: "38cm",
    pierna: "31cm",
  },
  {
    talle: "L",
    largo: "51cm",
    ancho: "36cm",
    pierna: "33cm",
  },
  {
    talle: "XL",
    largo: "53cm",
    ancho: "42cm",
    pierna: "34cm",
  },
];

const Table = ({ isShirt, isPants, isShort, currentItem }) => {
  let DATA;

  const isNewCollection = currentItem.tags.find((item) => item === "collection 3");

  if (isShirt) DATA = isNewCollection ? SHIRT : SHIRTOLD;
  else if (isPants) DATA = PANTS;
  else if (isShort) DATA = SHORTS;
  else DATA = isNewCollection ? HOODIE : HOODIEOLD;

  const renderRows = (item) => {
    return (
      <tr className={styles.table_row}>
        <td>{item.talle}</td>
        <td>{item.largo}</td>
        <td>{item.ancho}</td>
        {!isShirt && !isPants && !isShort && <td>{item.manga}</td>}
        {!isShirt && !isPants && isShort && <td>{item.pierna}</td>}
      </tr>
    );
  };
  return (
    <div className={styles.table}>
      <table>
        <tr className={styles.table_title}>
          <th>TALLE</th>
          <th>LARGO</th>
          <th>ANCHO</th>
          {!isShirt && !isPants && !isShort && <th>MANGA</th>}
          {!isShirt && !isPants && isShort && <th>PIERNA</th>}
        </tr>
        {DATA &&
          DATA.map((item) => {
            return renderRows(item);
          })}
      </table>
    </div>
  );
};

export default Table;
