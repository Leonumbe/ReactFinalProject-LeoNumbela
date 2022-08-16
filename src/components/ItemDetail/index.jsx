import React from "react";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from "../ItemCount";
import {Link} from "react-router-dom"

const mg={
    marginLeft: "31px",
    width:"100"
  }

export default function CardsSelected({id, name, category, price, rating, image, description, Stock}){

    function handleAdd(count){
        toast.success('Great! You added '+ count +' unit/s', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

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
                            <ItemCount minStock={1} Stock={5} onAddCart={handleAdd}/>
                            <p className="card-text"><small className="text-muted">End your purchase</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contBtnBack">
                <Link to='/' className="btnBack">Back</Link>
            </div>
        </div>
        </>
    );

}