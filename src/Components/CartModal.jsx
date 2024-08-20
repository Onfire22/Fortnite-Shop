import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartList from './CartList';

const CartModal = ({ items, show, handleClose, resetCart, removeItem, incrementQuantity, decrementQuantity }) => {
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
        <Modal.Title>Корзина</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CartList incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem} items={items} />
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