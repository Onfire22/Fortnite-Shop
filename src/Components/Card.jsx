import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({ name, price, description, background, id, addItem }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='card_img' variant="top" src={background} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button onClick={() => addItem({
          name,
          description,
          price,
          id,
        })} variant="primary">Купить</Button>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;