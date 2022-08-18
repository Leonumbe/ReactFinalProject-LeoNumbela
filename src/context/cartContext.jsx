import React, { createContext, useState} from "react";


export const cartContext = createContext();

export function CartContextProvider({children}){
    const [cart, setCart]= useState([{detalle:"onFire!!!"}])


    function AddToCart(item, quantity){
        //console.log("OnFire!!!")
        //confirmamos que recibimos los elementos
        console.log(item, quantity)
        if (IsInCard(item.id)) {
            
        }else{
        //copiamos los elementos del cart
        let copyCart = [...cart];
        //recordar item es un objeto
        copyCart.push({...item, quantity});
        //Ahora tenemos todo los datos en un solo []
        setCart(copyCart)
        }
    }
    function IsInCard(id){
        return (cart.some((itemInCart => itemInCart.id ===id)))
    }
    function RemoveItem(itemId){
        let copyCartRemove = [...cart]
        const item = (copyCartRemove.find((element)=>element.id === itemId));
        const indiceArray = (copyCartRemove.indexOf(item));
        copyCartRemove.splice(indiceArray,1)
        setCart(copyCartRemove)

    }
    function Clear(){
        setCart([])
        console.log(cart)
    }
    





    return(
        <cartContext.Provider value={{cart, AddToCart, Clear, RemoveItem}}>
            {children}
        </cartContext.Provider>
    )

}