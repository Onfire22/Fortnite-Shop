import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ShopContext } from '../context';

const CartItem = ({ id, name, quantity, price, removeItem, incrementQuantity, decrementQuantity }) => {
  const {example} = useContext(ShopContext);
  console.log(example);
  return (
    <li className='cart_list-item'>
      {name} x{quantity} = {quantity * price} 
      <div className="controls_container">
        <Button onClick={() => incrementQuantity(id)}>
          <i className="bi bi-plus-square-dotted"></i>
        </Button>
        <Button onClick={() => decrementQuantity(id)}>
          <i className="bi bi-dash-square-dotted"></i>
        </Button>
      </div>
      <div onClick={() => removeItem(id)} className="trash_can">
        <i className="bi bi-trash"></i>
      </div>
    </li>
  );
};

export default CartItem;