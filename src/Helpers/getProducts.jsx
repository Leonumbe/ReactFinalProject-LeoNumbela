import itemsData from "../api-data/index.jsx";


export default function getProducts(idUrl) {
    return new Promise((resolve, reject)=>{
        if(idUrl){
            let itemSelected = itemsData.find(element => element.id == idUrl)
            setTimeout( () => resolve(itemSelected), 1000)
        }else if(itemsData){
            setTimeout( () => resolve(itemsData), 2000)
        }else{
            reject(alert("No se encontro el producto solicitado"))
        }
    })
};


