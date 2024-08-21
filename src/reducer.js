const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD ITEM':
      const index = state.cart.findIndex(({ id }) => id === payload.item.id);
      if (index < 0) {
        const newItem = {
          ...payload.item,
          quantity: 1,
        };
        const newCart = [...state.cart, newItem];
        return {
          ...state,
          cart: newCart,
        };
      }
      const newOrder = state.cart.map((cartItem) => {
        if (cartItem.id === payload.item.id) {
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

    case 'INCREMENT QUANTITY':
      const newOrderWithInc = state.cart.map((cartItem) => {
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
        cart: newOrderWithInc,
      };

    case 'DECREMENT QUANTITY':
      const newOrderWithDec = state.cart.map((cartItem) => {
        if (cartItem.id === payload.id) {
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

    case 'RESET CART':
      return {
        ...state,
        cart: [],
      };

    case 'REMOVE FROM CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };

    case 'SHOW MODAL':
      return {
        ...state,
        show: true,
      };

    case 'CLOSE MODAL':
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
};

export default shopReducer;