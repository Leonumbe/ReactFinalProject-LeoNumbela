import React from "react";
import "./main.css"

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


export default function CardsSelected({id, name, category, price, rating, image, description, stock}){
      
    const cartQty = 0; 
    const [countData, setCountData] = useState(cartQty);
    const {AddToCart, IsInCard, ReduceStock} = useContext(cartContext)
    
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
        //ReduceStock(itemToCart)
    }

    return (
        <div>
            <div className="itemDetailContainer" key={id}>
                    <div className="imgDetailBox" >
                        <img src={image} className="itemDetailtImg" alt="Sneaker"/>
                    </div>
                    <div className="itemDetailBox">
                            <h3 className="cardDetailtitle">{name}</h3>
                            <h5 className="cardDetailSub">{category}</h5>
                            <div className="cardDetailRating">
                                {Array(rating)
                                    .fill()
                                    .map((_,i)=>(
                                    <FontAwesomeIcon   icon={faStar} />
                                    ))}
                            </div>
                            <h3 className="cardDetailPrice">u$s {price}.00-</h3>
                            <p className="cardDetailSub"><small className="text-muted">Stock available: {stock}</small></p>
                            <p className="cardDetailtext">{description}</p>

                            {   (countData === 0)?
                                <ItemCount
                                minStock={1} 
                                Stock={stock} 
                                onAddCart={HandleAdd}
                                />:
                                (
                                <div className="addCartCont">
                                    <Link to="/cart">
                                        <Button text={'Go Cart'} className={"btnAdd"}></Button>
                                    </Link>
                                    <p className="card-text"><small className="text-muted">{`You selected: `+ countData+` unit/s`}</small></p>
                                </div>
                                )
                            }
                    </div>
            </div>
            <div className="itemDetailBtnBack">
                <Link to='/' >
                    <Button className={"btnBackC"} text="Back"></Button>
                </Link>
            </div>
        </div>
    );

}

