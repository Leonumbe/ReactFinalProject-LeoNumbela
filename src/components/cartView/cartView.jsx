//Damos acceso a context
import React, {useContext, useState} from "react";
import { cartContext } from "../../context/cartContext";
import CheckOutForm from "../checkOut/checkOutForm";
import { Link } from "react-router-dom";
import  "./main.css";
//componente
import CartItem from "./cartItem";
import Button from "../button/button";
import Banner from "../banner/banner";
//Modal
import Modal from 'react-bootstrap/Modal';


export default function CartView(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {cart, RemoveItem, Clear, TotalPrice, Badge} = useContext(cartContext)
    return(
        <div className="ContentItemListCont">
        <section className="title">
            <div className="max-width ">
            {
             (cart.length === 0)?
                <>
                    <div className="emptyCartContent">
                    <img src="https://i.ibb.co/fqDvSdf/Empty-Cart.png" alt="Empty-Cart" border="0" />
                        <h1 className="title">Your Cart is Empty!!!!</h1>
                        <h3 className="textAdapt">Look like you have not added anything to your Cart</h3>
                        <h3 className="textAdapt">Go ahead & explore our Categories</h3>
                        <Link to="/home"  >
                            <Button className={"btnBack"} text={"Back to Home"}></Button>
                        </Link>
                    </div>
                </>:
                <>
                <h1 className="title">Your Cart: {Badge()} product/s</h1>
                <div className="cartViewContent">
                    <div>
                        { cart.map((items)=>{
                            return(
                                <CartItem
                                key={items.id}
                                id={items.id}
                                name={items.name}
                                image={items.image}
                                stock={items.stock} 
                                price={items.price}
                                count={items.count}
                                Indice={cart.indexOf(items)+1}
                                RemoveItem={()=>RemoveItem(items.id)}
                                />
                            );
                            })
                        }
                    </div>
                    <div className="cartViewSumery">
                        <ul className="cartViewSumeryUl">
                            <li className="cartViewSumeryHead"><strong className="text-muted">Purchase Summary</strong></li>
                            <li className="cartViewSumeryDetail"><strong className="text-muted">Order Subtotal:</strong><strong>u$s  {TotalPrice()}.-</strong></li>
                            <li className="cartViewSumeryDetail"><strong className="text-muted">Shipping&Handle:</strong><strong> Free  </strong></li>
                            <li className="cartViewSumeryTotal"><strong className="text-muted">Total:</strong><strong>u$s {TotalPrice()}.-</strong></li>
                        </ul>
                        <Link to="/cart" className="cartClean" onClick={()=>{Clear()}}>
                            <button className="btnClean">
                            Empty Cart
                            </button>
                        </Link>
                        <button onClick={handleShow} className={"btnPurchase"} text={"Procceed to checkout"}>
                            Proceed checkout
                        </button>
                    </div>
                    <Modal show={show} onHide={handleClose} size="md">
                        <Modal.Header closeButton>
                            <Modal.Title className="title">
                                Proceed to checkout
                            </Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                                <CheckOutForm/>
                            </Modal.Body>
                        <Modal.Footer>
                            <button  onClick={handleClose} className={"btnBackP"}>
                                Close
                            </button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <Banner/>
            </>
            }
            </div>
        </section>
        </div>
    )
}


