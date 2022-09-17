import React, { createContext, useState} from "react";

export const cartContext = createContext();

export function CartContextProvider({children}){
    const [cart, setCart]= useState([])

    let copyCart = [...cart];
    
    function AddToCart(item){
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
        return (cart.some((element => element.id === itemId)))
    }

    function RemoveItem(itemId){
        const removeItem = cart.filter(element=> element.id !== itemId)
        setCart(removeItem)
    }

    function Clear(){
        setCart([])
    }

    function Badge(){
        return cart.reduce((acum, prod)=> acum += prod.count, 0)
    }

    function TotalPrice(){
        return cart.reduce((acum, prod)=> acum = acum +( prod.count * prod.price), 0)
    }
    
    return(
        <cartContext.Provider value={{cart, AddToCart, Clear, RemoveItem, IsInCard, Badge, TotalPrice}}>
            {children}
        </cartContext.Provider>
    )

}