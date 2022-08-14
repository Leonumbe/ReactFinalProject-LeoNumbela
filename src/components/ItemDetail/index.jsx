import React from "react";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemCount from "../ItemCount";
import {Link} from "react-router-dom"

const mg={
    marginLeft: "31px",
    width:"100"
  }

export default function CardsSelected({id, name, category, price, rating, image, description}){

    return (
        <>
        <div>
            <div className="card" style={mg} >
                <div className="row g-5">
                    <div className="col-md-4" key={id}>
                        <img src={image} className="img-fluid rounded-start" alt="Sneaker"/>
                    </div>
                    <div className="col-md-8 col-xl-8">
                        <div className="card-body my-3">
                            <h2 className="card-title">{name}</h2>
                            <h5 className="card-subtitle">{category}</h5>
                            <div>
                                {Array(rating)
                                    .fill()
                                    .map((_,i)=>(
                                    <FontAwesomeIcon   icon={faStar} />
                                    ))}
                            </div>
                            <h1 className="card-title">u$s {price}.00-</h1>
                            <p className="card-text">{description}</p>
                            <ItemCount minStock={1} maxStock={5}/>
                            <p className="card-text"><small className="text-muted">End your purchase</small></p>
                        </div>
                    </div>
                </div>
            </div>
        <Link to='/' className="btnBack">Back</Link>
        </div>
        </>
    );

}