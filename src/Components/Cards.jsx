import Product from "./Card";
import { useContext } from 'react';
import { ShopContext } from '../context';

const Cards = () => {
  const { goods = [] } = useContext(ShopContext);
  return (
    <div className="shop">
      {goods.length > 0 && goods.map(({ displayName, displayType, price, displayAssets, offerId }) => {
        return (
        <Product 
          key={offerId}
          id={offerId}
          name={displayName}
          price={price.regularPrice}
          description={displayType}
          background={displayAssets[0].full_background}
        />
      )})}
    </div>
  );
};

export default Cards;