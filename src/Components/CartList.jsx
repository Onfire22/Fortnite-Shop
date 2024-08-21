import CartItem from "./CartItem";
import { useContext } from "react";
import { ShopContext } from "../context";

const CartList = () => {
  const { cart = []} = useContext(ShopContext);
  const getTotalUnmount  = cart.reduce((acc, item) => {
    return acc += item.price * item.quantity;
  }, 0);
  return (
    cart.length > 0
      ?
      <>
        <ul className='cart_list'>
          {cart.map(({ name, quantity, price, id }) => {
            return <CartItem
              name={name}
              quantity={quantity}
              price={price}
              key={id}
              id={id}
            />
          })}
        </ul>
        <p>Общая стоимость: {getTotalUnmount}</p>
      </>
      :
      <h2>Ваша корзина пуста :(</h2>
    );
};

export default CartList;