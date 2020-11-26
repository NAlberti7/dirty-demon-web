import * as actionTypes from "../actions/types";
import { ITEM, ITEMLIST } from "../../models/items";
const INITIAL_STATE = {
  isAuth: false,
  showCart: false,
  isLoading: false,
  isRequestingSend: false,
  chooseSendValue: "A CALCULAR",
  sendType: "",
  userInfo: null,
  isSubmitting: false,
  errorMessage: "",
};

const addItemToCartHandler = () => {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEMS:
      return {
        ...state,
      };

    case actionTypes.SHOW_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case actionTypes.IS_REQUESTING_SEND: {
      return {
        ...state,
        isRequestingSend: true,
      };
    }
    case actionTypes.SET_CHOOSE_SEND_VALUE:
      return {
        ...state,
        chooseSendValue: action.payload,
      };
    case actionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: { ...action.payload },
      };
    case actionTypes.SET_SEND_TYPE:
      return {
        ...state,
        sendType: action.payload,
      };
    case actionTypes.SET_SUBMIT:
      return {
        ...state,
        isSubmitting: true,
      };
    case actionTypes.DISMISS_SUBMIT:
      return {
        ...state,
        isSubmitting: false,
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case actionTypes.CLEAN_ERROR:
      return {
        ...state,
        errorMessage: "",
      };
    default:
      return state;
  }
};
