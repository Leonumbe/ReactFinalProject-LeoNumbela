//Damos acceso a context
import React, {useContext, useState} from "react";
import { cartContext } from "../../context/cartContext";
import userForm from "../userForm/userForm.jsx";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons' ;
import { Link } from "react-router-dom";
import Button from "../button/button";
import  "./main.css";


export default function CartView(){
    const {cart, RemoveItem, Clear, TotalPrice} = useContext(cartContext)
    return(
        <section className="title">
        <div className="max-width ">
        {
            (cart.length == 0)
            ?
            <>
            <div className="emptyCartContent">
            <img src="https://i.ibb.co/fqDvSdf/Empty-Cart.png" alt="Empty-Cart" border="0" />
                <h1 className="title">Your Cart is Empty!!!!</h1>
                <h3 className="textAdapt">Look like you have not added anything to your Cart</h3>
                <h3 className="textAdapt">Go ahead & explore our Categories</h3>
                <Link to="/"  >
                    <Button className={"btnBack"} text={"Back to Home"}></Button>
                </Link>
                </div>
            </>
            :
            <>
            <h1 className="title">End your Purchase</h1>
            <Table striped="columns">
                <thead>
                    <tr>
                        <th>Nro</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                { cart.map((items)=>{
                        return(
                            <>
                            {/* rating={items.rating}
                            category={items.category}
                            description={items.description}
                            stock={items.stock} */}
                          <tbody key={items.id}>
                            <tr>
                              <td>{cart.indexOf(items)+1}</td>
                              <td>
                                <img src={items.image} className="img-fluid mx-auto d-block width-100px" alt="Sneaker"/>
                              </td>
                              <td>{items.name}</td>
                              <td>u$s{items.price}.-</td>
                              <td>{items.count}</td>
                              <td><Link to={"#"} className="text-dark" onClick={()=>{RemoveItem(items.Id)}}>
                                <FontAwesomeIcon className="i" icon={faTrash} />
                              </Link></td>
                            </tr>
                          </tbody>
                          </>
                        );
                    })
                }
            </Table>


            <ul className="list-unstyled mb-1">
                        <li className="d-flex justify-content-start py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>:  $ {TotalPrice()}</strong></li>
                        <li className="d-flex justify-content-start py-3 border-bottom"><strong className="text-muted">Ship&Hand</strong><strong>: Free</strong></li>
                        <li className="d-flex justify-content-start py-3 border-bottom"><strong className="text-muted">Total </strong>
                            <h3 className="fw-bold">: ${TotalPrice()}</h3>
                        </li>
            </ul>


            <Link to="/cart" className="text-dark" onClick={()=>{Clear()}}>
                <FontAwesomeIcon className="i" icon={faTrash} />
            </Link>
            
            <Button className={"btnBack"} text={"Procceed to checkout"}></Button>
            </>

            }
        </div>
    </section>
    )

}