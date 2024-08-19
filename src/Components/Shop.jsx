import { useEffect, useState } from "react";
import { link, key } from "../settings";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Cards from "./Cards";
import Cart from "./Cart";

const Shop = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(link, { headers: { Authorization: key }, })
      .then(({ data }) => {
        setLoading(false);
        setCards(data.shop);
      });
  }, []);

  const addItem = (item) => {
    const index = cart.findIndex(({ id }) => id === item.id);
    if (index < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setCart([...cart, newItem]);
    } else {
      const newOrder = cart.map((cartItem, index) => {
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
  console.log(cart)
  return (
    <main>
      <section className="container shop_section">
      <Cart count={cart.length} />
        {!loading
          ?
        <Cards addItem={addItem} cards={cards} />
          :
        <Spinner />
        }
      </section>
    </main>
  );
};

export default Shop;