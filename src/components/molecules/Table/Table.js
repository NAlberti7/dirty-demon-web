import React from "react";
import styles from "./Table.module.scss";

const SHIRT = [
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

const HOODIE = [
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

const Table = ({ isShirt, isPants }) => {
  let DATA;

  if (isShirt) DATA = SHIRT;
  else if (isPants) DATA = PANTS;
  else DATA = HOODIE;

  const renderRows = (item) => {
    return (
      <tr>
        <td>{item.talle}</td>
        <td>{item.largo}</td>
        <td>{item.ancho}</td>
        {!isShirt && !isPants && <td>{item.manga}</td>}
      </tr>
    );
  };
  return (
    <div className={styles.table}>
      <table>
        <tr>
          <th>TALLE</th>
          <th>LARGO</th>
          <th>ANCHO</th>
          {!isShirt && !isPants && <th>MANGA</th>}
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
