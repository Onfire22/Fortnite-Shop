import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CartModal = ({ items, show, handleClose, resetCart }) => {

  const getTotalUnmount = (items) => items.reduce((acc, item) => {
    return acc += item.price;
  }, 0);

  return (
    <Modal
      backdrop="static"
      keyboard={false}
      show={show}
      onHide={handleClose}
      data-bs-theme="dark"
      className='modal'
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.length > 0 
        ?
        <>
          <ul className='cart_list'>
            {items.map(({ name, quantity, price, id }) => {
              const itemQuantity = quantity * price;
              return <li className='cart_list-item' key={id}>{name} x{quantity} = {itemQuantity}</li>
            })}
          </ul>
          <p>Общая стоимость: {getTotalUnmount(items)}</p>
        </>
        :
        <h2>Ваша корзина пуста :(</h2>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={resetCart} variant="secondary">
          Очистить корзину
        </Button>
        <Button disabled variant="primary">Купить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;