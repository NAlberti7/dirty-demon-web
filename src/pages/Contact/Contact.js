import React from "react";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ContentWithTitle from "../../components/organism/ContentWithTitle/ContentWithTitle";
import ContactForm from "../../components/organism/ContactForm/ContactForm";
import Text from "../../components/atoms/Text/Text";
const pageVariants = {
  initial: {
    opacity: 0,
    x: 0,
    scale: 1,
    transition: {
      ease: "linear",
      duration: 0.3,
      delay: 0,
    },
  },
  in: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Contact = () => {
  return (
    <motion.main
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      className={styles.contact}
    >
      <ContentWithTitle title='CONTACT'>
        <Text tag='h2' size={14} align='left' color='white' primary>
          RECOMENDAMOS CONSULTAR EL SECTOR DE <span>“FAQS“</span> (PREGUNTAS FRECUENTES) ANTES DE
          ENVIAR SU DUDA.
        </Text>
        <Text tag='h2' size={14} align='left' color='white' primary>
          POR SEGUIMIENTO O TRACKING DE SU PEDIDO CONSULTAR EL SECTOR DE <span>“TRACKING”</span> Y
          CARGAR EL CODIGO ENVIADO A SU CASILLA DE E-MAIL.
        </Text>

        <Text tag='div' size={17} align='left' color='black' primary customStyle={styles.datos}>
          DATOS DE CONTACTO
        </Text>
        <ContactForm />
      </ContentWithTitle>
    </motion.main>
  );
};

export default Contact;
