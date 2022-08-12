import itemsData from "../Api-data/index";


export default function getProducts(itemId){
   
    return new Promise((resolve, reject)=>{
        
        if (itemId !== undefined) {
            let itemFilter = itemsData.find(element => element.id === itemId)
            setTimeout( () => resolve(itemFilter), 1000)
        }else if(itemsData !== undefined){
            setTimeout( () => resolve(itemsData), 2000)
        }else{
            reject(alert('Error'))
        }

    })
};
