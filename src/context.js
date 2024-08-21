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

  value.setInitialGoods = (data) => dispatch({ type: 'ADD INITIAL GOODS', payload: data });
  value.addItem = (item) => dispatch({type: 'ADD ITEM', payload: item});
  value.incQuantity = (id) => dispatch({ type: 'INCREMENT QUANTITY', payload: id });
  value.decQuantity = (id) => dispatch({ type: 'DECREMENT QUANTITY', payload: id });
  value.removeItem = (id) => dispatch({ type: 'REMOVE FROM CART', payload: id });
  value.resetCart = () => dispatch({ type: 'RESET CART' });
  value.showModal = () => dispatch({ type: 'SHOW MODAL' });
  value.closwModal = () => dispatch({ type: 'CLOSE MODAL' });

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ContextProvider;