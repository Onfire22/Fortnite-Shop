import Product from "./Card";
import { useContext } from 'react';
import { ShopContext } from '../context';

const Cards = () => {
  const { goods = [] } = useContext(ShopContext);
  return (
    <div className="shop">
      {goods.length > 0 && goods.map(({ displayName, section, price, displayAssets, offerId }) => {
        return (
        <Product 
          key={offerId}
          id={offerId}
          name={displayName}
          price={price.regularPrice}
          description={section.category}
          background={displayAssets[0].full_background}
        />
      )})}
    </div>
  );
};

export default Cards;