const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_INITIAL_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    
    case 'ADD_ITEM':
      const index = state.cart.findIndex(({ id }) => id === payload.id);
      if (index < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        const newCart = [...state.cart, newItem];
        return {
          ...state,
          cart: newCart,
        };
      }
      const newOrder = state.cart.map((cartItem) => {
        if (cartItem.id === payload.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: newOrder,
      };

    case 'INCREMENT_QUANTITY':
      const newOrderWithInc = state.cart.map((cartItem) => {
        if (cartItem.id === payload) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: newOrderWithInc,
      };

    case 'DECREMENT_QUANTITY':
      const newOrderWithDec = state.cart.map((cartItem) => {
        if (cartItem.id === payload) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1 >= 0 ? cartItem.quantity - 1 : 0,
          };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: newOrderWithDec,
      };

    case 'RESET_CART':
      return {
        ...state,
        cart: [],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };

    case 'SHOW_MODAL':
      return {
        ...state,
        show: true,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
};

export default shopReducer;