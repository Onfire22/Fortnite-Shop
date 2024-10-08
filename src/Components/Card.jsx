import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { ShopContext } from '../context';

const Product = ({ name, price, description, background, id }) => {
  const { addItem } = useContext(ShopContext);
  return (
    <Card className="bg-dark text-white">
      <Card.Img className='card_img' variant="top" src={background} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className='card_footer'>
        <Button onClick={() => addItem({
          name,
          description,
          price,
          id,
        })}
        variant="primary"
        >
          Купить
        </Button>
      <Card.Text>{price} токенов</Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default Product;