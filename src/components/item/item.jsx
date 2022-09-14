import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from '../button/button.jsx';
import "./main.css"


function Cards({ id, name, category, price, rating, image, description, stock}) {
  return (
    <div className="cardStile">
      <Card style={{ width: '13rem' }} className="mb-4" key={id}>
        <Card.Img variant="top" className="cardImage" src={image} />
        <Card.Body >
          <Card.Title>{category}</Card.Title>
            <h3 className='titleCardName'>{name}</h3>
            <h4>u$s {price}.-</h4>
            <div className='cartRating'>
              {Array(rating)
                .fill()
                .map((_,i)=>(
                  <FontAwesomeIcon   icon={faStar} />
                ))}
            </div>
            <div className='cartButton'>
              <Link to={`/detail/${id}`} >
                <Button className="btnAdd" text="view more"></Button>
              </Link>
            </div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1" className="mt-3 leo">
                <Accordion.Header className="descripTitle">Description:</Accordion.Header>
                <Accordion.Body className="descripCard">{description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
  