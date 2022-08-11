import itemsData from "../Api-data/index";


export default function getProducts(){
   
    return new Promise((resolve)=>{
        let itemFilter = itemsData.find(element => element.id === itemId)
        if (itemFilter != undefined) {
            setTimeout( () => resolve(itemFilter), 1000)
        }else{
            setTimeout( () => resolve(itemsData), 2000)
        }
    })
};
