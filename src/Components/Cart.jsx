const Cart = ({ count = 0 }) => {
  return (
    <div>
      <i className="bi bi-bag">{count}</i>
    </div>
  );
};

export default Cart;