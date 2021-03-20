import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./ContentWithTitle.module.scss";
import { useMediaQuery } from "react-responsive";
const ContentWithTitle = ({ title = "", children, fromContact }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section className={styles.content}>
      <div className={styles.content_title}>
        <Text priority={1} primary size={isMobile ? 40 : 72} color='white' align='left'>
          {title}
        </Text>
        {fromContact && <div className={styles.contact}>
          <Text tag='p' size={14} align='left' color='white' opacity={0.5}>
          TIEMPO APROXIMADO DE RESPUESTA 2 HRS.
        </Text>
        <Text tag='h2' size={14} align='left' color='white'>
          RECOMENDAMOS CONSULTAR EL SECTOR DE <br /> <span>“FAQS“</span> (PREGUNTAS FRECUENTES) ANTES DE <br/>
          ENVIAR SU DUDA.
        </Text>
        </div>
        }
      </div>
      <div className={styles.content_children}>{children}</div>
    </section>
  );
};

export default ContentWithTitle;
