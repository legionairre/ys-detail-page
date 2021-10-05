import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
  totalPrice: 0
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.ProductId === action.payload.ProductId
      );
      // Check if Item is in cart already
      const inCart = state.cart.find(
        (item) => item.ProductId === action.payload.ProductId
      );

      return {
        ...state,
        cart: inCart ?
          state.cart.map((item) =>
              item.ProductId === action.payload.ProductId ?
                {
                    ...item,
                    qty: item.qty + parseInt(action.payload.qty)
                  } :
                item
            ) :
          [
              ...state.cart,
              {
                ...item,
                qty: action.payload.qty ? parseInt(action.payload.qty) : 1
              }
            ]
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.ProductId !== action.payload.ProductId
        )
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.ProductId === action.payload.ProductId ?
            { ...item, qty: +action.payload.qty } :
            item;
        })
      };
    default:
      return state;
  }
};

export default shopReducer;
