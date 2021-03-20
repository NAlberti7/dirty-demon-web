import React, { useState, useEffect } from "react";
import styles from "./CheckoutFirstStep.module.scss";
import Field from "../../molecules/Field/Field";
import CheckoutTitles from "../../molecules/CheckoutTitles/CheckoutTitles";
import FieldGroup from "../../atoms/FieldGroup/FieldGroup";
import ShippingCard from "../../molecules/ShippingCard/ShippingCard";
import { motion, AnimatePresence } from "framer-motion";
const checkoutVariants = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0,
    },
  },
  out: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const free = {
  type: "RETIRO EN PUNTO DE ENTREGA",
  description:
    "LUEGO DE TU COMPRA, NOS CONTACTAMOS PARA COORDINAR LA ENTREGA (RAMOS MEJIA-NORDELTA).",
  price: "GRATIS",
};

const express = {
  type: "ENVIO EXPRESS",
  description:
    "TU PEDIDO SERA DESPACHADO AL DIA SIGUIENTE DE TU COMPRA, LOS ENVIOS SON REALIZADOS A TRAVES DE CORREO ARGENTINO",
  price: "DESDE $350",
};

const CheckoutFirstStep = ({ selected, setSelected, register, errors }) => {
  return (
    <motion.div
      className={styles.checkoutFirstStep}
      animate="in"
      exit="out"
      initial="out"
      variants={checkoutVariants}
    >
      <div className={styles.container}>
        <CheckoutTitles title="DATOS DE CONTACTO" description="" />
        <FieldGroup>
          <Field
            name="email"
            type="email"
            placeholder="E-MAIL"
            inputRef={register({
              required: "CAMPO REQUERIDO",
            })}
            error={errors.email}
          />
          <Field
            name="phone"
            type="text"
            placeholder="TELEFONO (SOLO NUMEROS)"
            inputRef={register({
              required: "CAMPO REQUERIDO",
              pattern: /^\d+$/,
            })}
            error={errors.phone}
          />
        </FieldGroup>
      </div>
      <div className={styles.container}>
        <CheckoutTitles title="TIPO DE ENTREGA" description="" />
        <ShippingCard
          item={free}
          isSelected={selected?.type === "RETIRO EN PUNTO DE ENTREGA"}
          setSelected={setSelected}
        />
        <ShippingCard
          item={express}
          isSelected={selected?.type === "ENVIO EXPRESS"}
          setSelected={setSelected}
        />
      </div>
    </motion.div>
  );
};

export default CheckoutFirstStep;
