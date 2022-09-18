import React from "react";
import { useState, useContext } from "react";
import { cartContext } from "../../context/cartContext";
//Import to firebase
import firestoreDB from "../../services/firebase";
import {addDoc, collection, writeBatch, where, query, documentId, getDocs} from "firebase/firestore";
//Boostrap
import Form from 'react-bootstrap/Form';
//Sweet Alert
import swal from 'sweetalert';

//styles
const contButtons={
    display: "flex",
    justifyContent: "space-between"
}

export default function CheckOutForm(){

    const [userData, setUserData]= useState({
        Name:"", Surname:"", Email:"", Phone:""
    });

    const {cart, Clear,  TotalPrice} = useContext(cartContext)

    const [purchaseSucess, setPurchaseSucess] = useState({
        id:"", 
        status:"false",
    })

    const purchaseTicket = {
        buyer: {...userData},
        items:[...cart],
        total: TotalPrice(),
        date: new Date()
    }

    async function  handleSubmit(event){
         event.preventDefault();
         console.log(purchaseTicket);
         setUserData({Name:"", Surname:"", Email:"", Phone:"",});

         const collectionRef = collection(firestoreDB, "purchaseOrders") ;
         const docRef = await  addDoc(collectionRef, purchaseTicket);
         setPurchaseSucess({id: docRef.id, status: true})
         
         //ajuste de stock por batch
         const collectionApiDataFull = collection(firestoreDB, "apiDataFull") ;
         const dataIds = cart.map((item)=>item.id);
         const q = query(collectionApiDataFull, where(documentId(), "in", dataIds));
         let batch = writeBatch(firestoreDB)

         getDocs(q).then((response)=>{
            response.docs.forEach((doc)=>{
                const itemUpDate = cart.find((item)=>item.id === doc.id)
                if(doc.data().stock >= itemUpDate.count){
                   batch.update(doc.ref,{
                    stock: doc.data().stock - itemUpDate.count
                   })     
                }
            batch.commit()
            })
        })
    }

    function handleReset(e){
        e.preventDefault();
        setUserData({Name:"", Surname:"", Email:"", Phone:"",
        });
    }

    function handleOnChange(evt){
        const inputOnchange = evt.target

        const value= inputOnchange.value;
        const inputName = inputOnchange.name 
 
        let copyUserData= {...userData}
        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }
    if(purchaseSucess.status === true){
        return(
            swal({
                icon: "success",
                title:`Thanks You! Your purchase was successfully processed`,
                text: `Your PurchaseCode is: ${purchaseSucess.id} `,
                button:`confirm`,
            }),
            Clear()
        )
    }
    return(
        <>
            <Form onSubmit={handleSubmit} onReset={handleReset}>
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Name" value={userData.Name} type="text" placeholder="Warren" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label >Surname</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Surname" value={userData.Surname} type="text" placeholder="Buffet" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Email" value={userData.Email} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Phone" value={userData.Phone} type="number" placeholder="112334455" />
                </Form.Group>
                <div style={contButtons} >
                    <button className="btnBackB" type="reset">
                        Reset
                    </button>
                    <button className="btnAddB" type="submit">
                        Submit
                    </button>
                </div>
            </Form>
        </>
    );
}



