const Cart = ({ count = 0 }) => {
  return (
    <div className="cart_icon">
      <i className="bi bi-bag h2">{count}</i>
    </div>
  );
};

export default Cart;