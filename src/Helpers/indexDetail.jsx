import itemsData from "../Api-data/index";


export default function getProducts({itemId}){
    let itemFilter = itemsData
   if (itemFilter) {
       return new Promise((resolve)=>{
           itemFilter = itemsData.find(element => itemId === element.id)
           setTimeout( () => resolve(itemFilter), 1000)
       })
    
   } else{
    return new Promise((resolve)=>{
        setTimeout( () => resolve(itemsData), 2000)
    })

   }
};
