import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({ name, price, description, background }) => {
  //console.log(background)
  return (
    <Card style={{ width: '18rem' }}>
      <div className="image_wrapper">
        <Card.Img className='card_img' variant="top" src={background} />
        <div className="card_details">
          <h3 className='card_details-title'>{name}</h3>
          <p className='card_details-price'>{price}</p>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Купить</Button>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;