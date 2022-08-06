import ItemCount from "../ItemCount"
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';



function Cards({ name, productType, price, rating, image, description }) {
    return (
    <div className="my-auto mx-auto">
      <Card style={{ width: '18rem' }} className="mb-2" >
          <Card.Img variant="top" src={image} />
          <Card.Body >
          <Card.Title>{productType}</Card.Title>
            <h2>{name}</h2>
            <h3>$ {price} </h3>
            <icon> Value:{rating} </icon>
            <ItemCount minStock={1} maxStock={5}/>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1" className="mt-3">
              <Accordion.Header>Description:</Accordion.Header>
                <Accordion.Body className="fs-5 fw-light ">{description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </Card.Body>
      </Card>
     
      </div>


    );
  }

  

      
       
  
export default Cards;
  