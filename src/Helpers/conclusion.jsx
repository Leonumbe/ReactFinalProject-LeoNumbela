import itemsData from "../Api-data/index.jsx";


export default function getProducts(idUrl, filterCat){
       return new Promise((resolve, reject)=>{
        if(filterCat){
            let categoryFilter = itemsData.filter(element => element.category == filterCat)
            setTimeout( () => resolve(categoryFilter), 3000)
        }else if(idUrl !== undefined){
            let itemSelected = itemsData.find(element => element.id == idUrl)
            setTimeout( () => resolve(itemSelected), 1000)
        }else if(itemsData){
            setTimeout( () => resolve(itemsData), 2000)
        }else{
            reject(alert("No se encontro el producto solicitado"))
        }
        })
};


