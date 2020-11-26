import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./CheckoutTitles.module.scss";
const CheckoutTitles = ({ title, description }) => {
  return (
    <div className={styles.checkoutTitles}>
      <Text primary tag='h2' size={18} color='white' align='left'>
        {title}
      </Text>
      {description && (
        <Text tag='h3' size={14} color='white' opacity={0.4} align='left'>
          {description}
        </Text>
      )}
    </div>
  );
};

export default CheckoutTitles;
