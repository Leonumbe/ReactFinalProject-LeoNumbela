import itemsData from "../Api-data/index";


export default function getProducts({idUrl}){
       return new Promise((resolve, reject)=>{
           let itemSelected = itemsData.find(element => element.id == idUrl)
           if (itemSelected == undefined){
               reject(alert("No se encontro el producto solicitado"))
            }else{
                setTimeout( () => resolve(itemSelected), 1000)
            }
        })
};
