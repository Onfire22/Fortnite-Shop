import Product from "./Card";

const Cards = ({ cards = [] }) => {
  return (
    <div className="shop">
      {cards.length > 0 && cards.map(({ displayName, section, price, displayAssets }, index) => {
        return (
        <Product 
          key={index}
          name={displayName}
          price={price.regularPrice}
          description={section.category}
          background={displayAssets[0].background} 
        />
      )})}
    </div>
  );
};

export default Cards;