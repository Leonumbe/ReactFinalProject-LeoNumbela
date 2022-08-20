//Damos acceso a context
import React, {useContext} from "react";
import { cartContext } from "../../context/cartContext";
import UserForm from "../UserForm";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons' ;
import { Link } from "react-router-dom";


export default function CartView(){
    const {cart, RemoveItem, Clear, TotalPrice} = useContext(cartContext)
    // console.log(cart)
 
    
    return(
        <section className="title">
        <div className="max-width ">
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
                              <td>{items.quantity}</td>
                              <td><Link to={"#"} className="text-dark" onClick={()=>{RemoveItem(items.Id)}}>
                              <FontAwesomeIcon className="i" icon={faTrash} />
                              </Link></td>
                            </tr>
                            
                            <tr>
                          
                             <td>

                             </td>
                            </tr>
                          </tbody>
                             
                          </>
                      );
                    }
                   
                )
            }
            </Table>


            <ul class="list-unstyled mb-4">
                <tr>
                    <td>
                        <li class="d-flex justify-content-between py-1 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>:  $ {TotalPrice()}</strong></li>
                    </td>
                </tr>
                <tr>
                    <td>
                        <li class="d-flex justify-content-between py-1 border-bottom"><strong className="text-muted">Ship&hand</strong><strong> Free</strong></li>
                    </td>
                </tr>
                <tr>
                    <td>
                        <li class="d-flex justify-content-between py-1 border-bottom"><strong className="text-muted">Total</strong>
                        <h3 class="fw-bold">${TotalPrice()}</h3>
                        </li>
                    </td>
                </tr>
             </ul>


            <a href="#" className="text-dark" onClick={()=>{Clear()}}>
                            <FontAwesomeIcon className="i" icon={faTrash} />
            </a>
            
            <button className={"btnBack"}>Procceed to checkout</button>
     
        </div>
    </section>
    )

}