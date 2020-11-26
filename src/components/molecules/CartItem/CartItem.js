import React from "react";
import styles from "./CartItem.module.scss";
import ShipBag from "../../../assets/images/ship-bag.png";
import Text from "../../atoms/Text/Text";
import ActionButton from "../ActionButton/ActionButton";
import ShipImage from "../../atoms/ShipImage/ShipImage";
import { connect } from "react-redux";
import {
  addItemQuantity,
  removeItemQuantity,
  removeItemCart,
} from "../../../store/actions/cartActions";

const CartItem = ({
  item,
  addItemQuantity,
  removeItemQuantity,
  removeItemCart,
  index,
  fromCheckout,
  isShipping,
  isMobile,
}) => {
  const { name, size, color, price, quantity, ship_image, shipping } = item;
  return (
    <div className={styles.cartItem}>
      {!fromCheckout && (
        <ActionButton
          type='close'
          customStyle={styles.cartItem_close}
          clickHandler={() => removeItemCart(item._id, size, index)}
        />
      )}
      {!isMobile && <ShipImage shipImage={ship_image} name={name} />}
      <div className={styles.cartItem_info}>
        <Text priority={2} primary size={15} color='black' align='left'>
          {isMobile && fromCheckout && `(${quantity})`}
          {name}
        </Text>
        {isShipping ? (
          <Text priority={3} size={15} color='black' align='left' weight='light'>
            {shipping.toUpperCase()}
          </Text>
        ) : (
          <>
            <Text priority={3} size={15} color='black' align='left' weight='light'>
              COLOR {color.toUpperCase()}
            </Text>
            <Text priority={3} size={15} color='black' align='left' weight='light'>
              TALLE {size.toUpperCase()}
            </Text>{" "}
          </>
        )}
        <div className={styles.cartItem_quantity}>
          {!fromCheckout && (
            <ActionButton type='min' clickHandler={() => removeItemQuantity(item._id, index)} />
          )}
          <div className={styles.cartItem_quantityContainer}>
            <Text priority={3} size={15} color='black' align='left' weight='light'>
              {quantity}
            </Text>
          </div>
          {!fromCheckout && (
            <ActionButton type='plus' clickHandler={() => addItemQuantity(item._id, index)} />
          )}
        </div>
        <Text priority={3} primary size={15} color='black' align='left'>
          ${price}
        </Text>
      </div>
    </div>
  );
};

export default connect(null, { addItemQuantity, removeItemQuantity, removeItemCart })(CartItem);
