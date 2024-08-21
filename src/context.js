import { createContext, useReducer } from "react";
import shopReducer from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  cart: [],
  show: false,
};

const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(shopReducer, initialState);

  value.setInitialGoods = (data) => dispatch({ type: 'ADD_INITIAL_GOODS', payload: data });
  value.addItem = (item) => dispatch({type: 'ADD_ITEM', payload: item});
  value.incQuantity = (id) => dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  value.decQuantity = (id) => dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
  value.removeItem = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  value.resetCart = () => dispatch({ type: 'RESET_CART' });
  value.showModal = () => dispatch({ type: 'SHOW_MODAL' });
  value.closwModal = () => dispatch({ type: 'CLOSE_MODAL' });

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ContextProvider;