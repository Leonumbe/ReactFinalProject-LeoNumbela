import React from "react";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from "../ItemCount/itemCount";
import {Link} from "react-router-dom"
import Button from '../button/button.jsx'
//Nos conectamos al contex
import { useState, useContext } from "react";
import { cartContext } from "../../context/cartContext";

const mg={
    marginLeft: "31px",
    width:"100"
  }

export default function CardsSelected({id, name, category, price, rating, image, description, stock}){
      
    
    const cartQty = 0; 
    const [countData, setCountData] = useState(cartQty);
    const {AddToCart, IsInCard} = useContext(cartContext)
    
    function HandleAdd(count){
        setCountData(count)
        toast.success('Great! You added '+ count +' unit/s', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

        //rearmamos el objeto llamamos a la funtion del context
        const itemToCart ={id, name, category, price, rating, image, description, stock, count}    
        AddToCart(itemToCart);
        
        IsInCard(itemToCart.id)

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
                            <p className="card-text"><small className="text-muted">Stock available: {stock}</small></p>
                        
                            <p className="card-text">{description}</p>

                            {   (countData === 0)?
                                <ItemCount 
                                minStock={1} 
                                Stock={stock} 
                                onAddCart={HandleAdd}
                                />:(
                                <div>
                                <Link to="/cart">
                                    <Button text={'Go Cart'} className={"btnAdd"}></Button>
                                </Link>
                                <p className="card-text"><small className="text-muted">{`You selected: `+ countData+` unit/s`}</small></p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <Link to='/' >
                    <Button className={"btnBack"} text="Back"></Button>
                </Link>
            </div>
        </div>
        </>
    );

}