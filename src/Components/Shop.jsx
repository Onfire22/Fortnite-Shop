import { useEffect, useState } from "react";
import { link, key } from "../settings";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Cards from "./Cards";

const Shop = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(link, { headers: { Authorization: key }, })
      .then(({ data }) => {
        setLoading(false);
        setCards(data.shop);
      });
  }, []);
console.log(cards)
  return (
    <main>
      <section className="container shop_section">
        {!loading
          ?
        <Cards cards={cards} />
          :
        <Spinner />
        }
      </section>
    </main>
  );
};

export default Shop;