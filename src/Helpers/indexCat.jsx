import itemsData from "../Api-data/index";


export default function getProductsCat({filterCat}){
       return new Promise((resolve, reject)=>{
           let filtCat = itemsData.filter(element => element.category == filterCat)
           if (filtCat == undefined){
               reject(alert("No se encontro el producto solicitado"))
            }else{
                setTimeout( () => resolve(filtCat), 1000)
            }
        })
};
