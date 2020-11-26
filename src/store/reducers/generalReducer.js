import * as actionTypes from "../actions/types";
import { ITEM, ITEMLIST, CLOTHING_GROUPID } from "../../models/items";
import { LOOKBOOK_ITEMS } from "../../models/lookbook";

const INITIAL_STATE = {
  isAuth: false,
  currentItem: null,
  currentColors: null,
  itemList: [],
  cartItems: [],
  showCart: false,
  payMethods: [],
  lookBookItems: LOOKBOOK_ITEMS,
  isShopHover: false,
  showPreviewModal: false,
  modalPreviewImages: [],
  modalPreviewInfo: {
    type: "",
    name: "",
  },
  totalPrice: 0,
  sendValue: "INGRESA CP Y PROVINCIA PARA CALCULAR",
  totalSendValue: 0,
  mailMessage: "",
  openNav: false,
  showDetailsModal: false,
  showSizeModal: false,
  trackingResult: "",
};

const changeCurrentItemByColor = (state, _id, color) => {
  const isCurrent = state.currentItem._id === _id;
  if (isCurrent) {
    return {
      ...state,
    };
  } else if (!isCurrent) {
    const newCurrent = state.currentColors[color];
    return {
      ...state,
      currentItem: { ...newCurrent },
    };
  } else {
    return {
      ...state,
    };
  }
};

const calculatePrice = (state) => {
  let value = state.cartItems.reduce((total, currentValue) => {
    return total + currentValue.price * currentValue.quantity;
  }, 0);

  return {
    ...state,
    totalPrice: value + state.totalSendValue,
  };
};

const addQuantityHadler = (state, item) => {
  return {
    ...state,
    cartItems: state.cartItems.map((i, index) => {
      if (item.index === index) {
        return { ...i, quantity: i.quantity + 1 };
      } else {
        return i;
      }
    }),
  };
};
const removeQuantityHandler = (state, item) => {
  console.log("REMOVE");
  return {
    ...state,
    cartItems: state.cartItems.map((i, index) => {
      if (item.index === index && i.quantity > 1) {
        return { ...i, quantity: i.quantity - 1 };
      } else {
        return i;
      }
    }),
  };
};

const addItemToCartHandler = (state, item) => {
  console.log(item);
  const isInCart = state.cartItems.find((i) => {
    console.log("i:", i);
    console.log("item:", item);
    return i._id === item._id && i.size === item.size;
  });

  if (isInCart) {
    const newCartItems = state.cartItems.map((i) => {
      if (i._id === isInCart._id && i.size === isInCart.size) {
        return {
          ...i,
          quantity: i.quantity + 1,
        };
      } else {
        return i;
      }
    });
    return {
      ...state,
      cartItems: newCartItems,
      showCart: true,
    };
  } else {
    return {
      ...state,
      cartItems: state.cartItems.concat(item),
      showCart: true,
    };
  }
};

const removeItemToCartHandler = (state, item) => {
  const filterCart = state.cartItems.filter((i, index) => {
    return index !== item.index;
  });
  return {
    ...state,
    cartItems: filterCart,
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEND_TO_ITEM_VIEW:
      return {
        ...state,
        currentItem: action.payload,
        currentColors: action.payload.colorsID || null,
      };
    case actionTypes.GET_ITEMS: {
      return {
        ...state,
        itemList: action.payload,
        currentColors: action.payload[0].colorsID || null,
      };
    }
    case actionTypes.ADD_ITEM_CART:
      return addItemToCartHandler({ ...state }, action.payload);
    case actionTypes.REMOVE_ITEM_CART:
      return removeItemToCartHandler({ ...state }, action.payload);
    case actionTypes.ADD_ITEM_QUANTITY:
      return addQuantityHadler({ ...state }, action.payload);
    case actionTypes.REMOVE_ITEM_QUANTITY:
      return removeQuantityHandler({ ...state }, action.payload);
    case actionTypes.SHOW_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case actionTypes.GET_PAY_METHODS:
      return {
        ...state,
        payMethods: action.payload,
      };
    case actionTypes.CALCULATE_PRICE:
      return calculatePrice({ ...state });
    case actionTypes.SET_SHOP_HOVER: {
      return {
        ...state,
        isShopHover: true,
      };
    }
    case actionTypes.DISMISS_SHOP_HOVER: {
      return {
        ...state,
        isShopHover: false,
      };
    }
    case actionTypes.SET_COLOR: {
      const { _id, color } = action.payload;
      return changeCurrentItemByColor({ ...state }, _id, color);
    }

    case actionTypes.SET_ITEM_COLOR: {
      const toSet = state.itemList.find((item) => item._id === action.payload);

      console.log("TOSET", toSet);
      return {
        ...state,
        currentItem: toSet,
      };
    }

    case actionTypes.SHOW_PREVIEW_MODAL:
      return {
        ...state,
        showPreviewModal: true,
      };
    case actionTypes.DISMISS_PREVIEW_MODAL:
      return {
        ...state,
        showPreviewModal: false,
        modalPreviewImages: [],
      };
    case actionTypes.SET_PREVIEW_MODAL_IMAGES:
      return {
        ...state,
        showPreviewModal: true,
        modalPreviewImages: [...action.payload],
      };
    case actionTypes.SET_PREVIEW_MODAL_INFO:
      return {
        ...state,
        modalPreviewInfo: {
          ...action.payload,
        },
      };
    case actionTypes.SET_SEND_VALUE:
      console.log("PAYLOAD", action.payload);
      return {
        ...state,
        sendValue: `$${action.payload}`,
        totalSendValue: action.payload,
        isRequestingSend: false,
      };

    case actionTypes.SET_MAILING_RESULT:
      return {
        ...state,
        mailMessage: action.payload,
      };
    case actionTypes.OPEN_NAV:
      return {
        ...state,
        openNav: true,
      };
    case actionTypes.CLOSE_NAV:
      return {
        ...state,
        openNav: false,
      };
    case actionTypes.OPEN_DETAIL_MDOAL:
      return {
        ...state,
        showDetailsModal: true,
      };
    case actionTypes.CLOSE_DETAIL_MDOAL:
      return {
        ...state,
        showDetailsModal: false,
      };
    case actionTypes.OPEN_SIZE_MDOAL:
      return {
        ...state,
        showSizeModal: true,
      };
    case actionTypes.CLOSE_SIZE_MDOAL:
      return {
        ...state,
        showSizeModal: false,
      };
    case actionTypes.SET_TRACKING_RESULT:
      return {
        ...state,
        trackingResult: action.payload,
      };
    default:
      return state;
  }
};
