import { useEffect, useState } from "react";
import { link, key } from "../settings";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Cards from "./Cards";
import Cart from "./Cart";
import CartModal from "./CartModal";

const Shop = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(link, { headers: { Authorization: key }, })
      .then(({ data }) => {
        setLoading(false);
        setCards(data.shop);
      });
  }, []);

  const addItem = (item) => { //added
    const index = cart.findIndex(({ id }) => id === item.id);
    if (index < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setCart([...cart, newItem]);
    } else {
      const newOrder = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      setCart(newOrder);
    }
  };

  const removeItem = (id) => { //added
    setCart(cart.filter((item) => item.id !== id));
  };

  const incrementQuantity = (id) => { //added
    const newOrder = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      }
      return cartItem;
    });
    setCart(newOrder);
  };

  const decrementQuantity = (id) => { //added
    const newOrder = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1 >= 0 ? cartItem.quantity - 1 : 0,
        };
      }
      return cartItem;
    });
    setCart(newOrder);
  };

  const resetCart = () => setCart([]); //added

  const handleShow = () => setShow(true); //added

  const handleClose = () => setShow(false); //added

  return (
    <main>
      <section className="container shop_section">
        <Cart handleShow={handleShow} count={cart.length} />
          {!loading
            ?
            <Cards addItem={addItem} cards={cards} />
            :
            <Spinner />
          }
          <CartModal
            resetCart={resetCart}
            handleClose={handleClose}
            show={show}
            items={cart}
            removeItem={removeItem}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
      </section>
    </main>
  );
};

export default Shop;