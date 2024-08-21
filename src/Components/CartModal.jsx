import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartList from './CartList';
import { useContext } from 'react';
import { ShopContext } from '../context';

const CartModal = () => {
  const { show, closwModal, resetCart } = useContext(ShopContext);
  return (
    <Modal
      backdrop="static"
      keyboard={false}
      show={show}
      onHide={closwModal}
      data-bs-theme="dark"
      className='modal'
    >
      <Modal.Header closeButton>
        <Modal.Title>Корзина</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CartList />
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