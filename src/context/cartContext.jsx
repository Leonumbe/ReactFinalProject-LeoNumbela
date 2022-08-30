import React, { createContext, useState} from "react";
import { Card } from "react-bootstrap";


export const cartContext = createContext();

export function CartContextProvider({children}){
    const [cart, setCart]= useState([])

    let copyCart = [...cart];
    
    function AddToCart(item){
        //confirmamos que recibimos los elementos
        //console.log(item)
        if (IsInCard(item.id)) {
            const itemRepeated = copyCart.find((element) => element.id === item.id )
            const {count} = itemRepeated
            itemRepeated.count = item.count + count;
            const newCartArray = [...cart]
            setCart(newCartArray)
            Badge()
            console.log(copyCart)
        }else{
            setCart([...cart, item]) 
            Badge(item.count)
        }
      
    }
    function IsInCard(itemId){
        //console.log(id)
        return (cart.some((element => element.id === itemId)))
    }
    function RemoveItem(itemId){
        //console.log(itemId)
        // const item = (copyCart.find((element)=>element.id === itemId));
        // const indiceArray = (copyCart.indexOf(item));
        // copyCart.splice(indiceArray, 1)
        // setCart(copyCart)
         //otra opcion mas simple
         const removeItem = cart.filter(element=> element.id !== itemId)
         setCart(removeItem)
         console.log(cart)
    }

    function Clear(){
        setCart([])
        console.log(cart)
    }

    function Badge(){
        return cart.reduce((acum, prod)=> acum += prod.count, 0)
    }

    function TotalPrice(){
        return cart.reduce((acum, prod)=> acum = acum +( prod.count * prod.price), 0)
    }

    // function ReduceStock(item){
    // //     if(item.stock > 0){
    // //     (item.stock -= item.count )
    // //     setCart([...cart, item.stock])
    // //     }else{
    // //         alert("supera stock disponible");

    // //     }
    // }
    
    return(
        <cartContext.Provider value={{cart, AddToCart, Clear, RemoveItem, IsInCard, Badge, TotalPrice}}>
            {children}
        </cartContext.Provider>
    )

}