import ItemCount from "../ItemCount"
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

//css directo
const iStar={
  color: "gold",
}

function Cards({ id, name, productType, price, rating, image, description }) {
    return (
    <div className="my-auto mx-auto">
      <Card style={{ width: '15rem' }} className="mb-4" key={id}>
        <Card.Img variant="top" src={image} />
        <Card.Body >
          <Card.Title>{productType}</Card.Title>
            <h2>{name}</h2>
            <h3>$ {price} </h3>
            <div>
              {Array(rating)
                .fill()
                .map((_,i)=>(
                  <FontAwesomeIcon style={iStar}  icon={faStar} />
                ))}
            </div>
            <ItemCount minStock={1} maxStock={5}/>
            <Link to={`/detail/${id}`}>ver seleccion</Link>
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
  