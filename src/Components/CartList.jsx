import CartItem from "./CartItem";

const CartList = ({ items = [] }) => {
  const getTotalUnmount  = items.reduce((acc, item) => {
    return acc += item.price * item.quantity;
  }, 0);

  return (
    items.length > 0
      ?
      <>
        <ul className='cart_list'>
          {items.map(({ name, quantity, price, id }) => {
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