import itemsData from "../Api-data/index";


export default function getProducts({itemId}){
   
    return new Promise((resolve)=>{
        let itemFilter = itemsData.find(element => itemId === element.id)
        setTimeout( () => resolve(itemFilter), 1000)
    })
};
