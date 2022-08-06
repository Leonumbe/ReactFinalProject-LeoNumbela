import ItemCount from "../ItemCount"

function Card({ name, productType, price, rating, image, description }) {
    return (
      <div className="card">
        <div className="card-img">
          <img src={image} alt="imagen" />
        </div>
        <div className="card-detail">
          <h2>{name}</h2>
          <p>{productType}</p>
          <h3>$ {price}</h3>
          <h3>Value: {rating}</h3>
          <h3> {description}</h3>
          <ItemCount minStock={1} maxStock={5}/>
        </div>
      </div>
    );
  }

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
  
//export default Card;
  