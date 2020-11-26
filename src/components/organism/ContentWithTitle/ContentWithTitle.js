import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./ContentWithTitle.module.scss";
import { useMediaQuery } from "react-responsive";
const ContentWithTitle = ({ title = "", children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section className={styles.content}>
      <div className={styles.content_title}>
        <Text priority={1} primary size={isMobile ? 40 : 72} color='white' align='left'>
          {title}
        </Text>
      </div>
      <div className={styles.content_children}>{children}</div>
    </section>
  );
};

export default ContentWithTitle;
