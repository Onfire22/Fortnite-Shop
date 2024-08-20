const CartItem = ({ id, name, quantity, price, removeItem }) => {
  return (
    <li className='cart_list-item'>
      {name} x{quantity} = {quantity * price} 
      <div onClick={() => removeItem(id)} className="trash_can">
        <i className="bi bi-trash"></i>
      </div>
    </li>
  );
};

export default CartItem;