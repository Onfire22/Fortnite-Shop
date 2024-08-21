import { useEffect, useContext } from "react";
import { ShopContext } from "../context";
import { link, key } from "../settings";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Cards from "./Cards";
import Cart from "./Cart";
import CartModal from "./CartModal";

const Shop = () => {
  const { 
    cart,
    loading,
    setInitialGoods,
  } = useContext(ShopContext);

  useEffect(() => {
    axios.get(link, { headers: { Authorization: key }, })
      .then(({ data }) => {
        setInitialGoods(data.shop);
      });
      // eslint-disable-next-line
  }, []);

  return (
    <main>
      <section className="container shop_section">
        <Cart count={cart.length} />
          {!loading
            ?
            <Cards />
            :
            <Spinner />
          }
          <CartModal />
      </section>
    </main>
  );
};

export default Shop;