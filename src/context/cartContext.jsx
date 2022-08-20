import React, { createContext, useState} from "react";


export const cartContext = createContext();

export function CartContextProvider({children}){
    const [cart, setCart]= useState([])

    let copyCart = [...cart];
    
    function AddToCart(item, quantity){
        let isinCart = copyCart.find((item)=>item.id == item.id)
        //confirmamos que recibimos los elementos
        //console.log(item, quantity)
        if (IsInCard(item.id)) {
        let filterCard = copyCart.filter((item)=>item.id !== isinCart.id)
        copyCart = [...filterCard,{...isinCart, quantity: isinCart.quantity + 1}]
        setCart(copyCart)
       // console.log(copyCart)
        }else{
        //copiamos los elementos del cart
        //copyCart = [...cart];
        //recordar item es un objeto
        copyCart.push({...item, quantity});
        //Ahora tenemos todo los datos en un solo []
        setCart(copyCart)
    }
    //console.log(cart)
    }
    function IsInCard(id){
        //console.log(id)
        return (cart.some((element => element.id === id)))
    }
    function RemoveItem(itemId){
        //console.log(itemId)
        const item = (copyCart.find((element)=>element.id === itemId));
        const indiceArray = (copyCart.indexOf(item));
        copyCart.splice(indiceArray,1)
        setCart(copyCart)
        ///otra opcion mas simple
    //     const removeItem = copyCart.filter((element)=>element.id !== itemId)
    //     setCart(removeItem)
    //    // console.log(cart)
    }

    function Clear(){
        setCart([])
       // console.log(cart)
    }

    function Badge(){
        return cart.reduce((acum, prod)=> acum += prod.quantity, 0)
    }
    
    function TotalPrice(){
        return cart.reduce((acum, prod)=> acum = acum +( prod.quantity * prod.price), 0)
    }

    
    return(
        <cartContext.Provider value={{cart, AddToCart, Clear, RemoveItem, IsInCard, Badge, TotalPrice}}>
            {children}
        </cartContext.Provider>
    )

}