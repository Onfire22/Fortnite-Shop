import { useContext } from "react";
import { ShopContext } from "../context";

const Cart = ({ count = 0 }) => {
  const { showModal } = useContext(ShopContext);
  return (
    <div onClick={showModal} className="cart_icon">
      <i className="bi bi-bag text-white h2">{count}</i>
    </div>
  );
};

export default Cart;