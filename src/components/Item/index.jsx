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
          <ItemCount/>
        </div>
      </div>
    );
  }
  
  export default Card;