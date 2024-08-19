import Product from "./Card";

const Cards = ({ cards = [], addItem }) => {
  return (
    <div className="shop">
      {cards.length > 0 && cards.map(({ displayName, section, price, displayAssets, offerId }) => {
        return (
        <Product 
          key={offerId}
          id={offerId}
          name={displayName}
          price={price.regularPrice}
          description={section.category}
          background={displayAssets[0].full_background}
          addItem={addItem}
        />
      )})}
    </div>
  );
};

export default Cards;