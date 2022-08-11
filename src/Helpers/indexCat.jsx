import itemsData from "../Api-data/index";


export default function getProductsCat(filterCat){
       return new Promise((resolve, reject)=>{
           let CatFilter = itemsData.filter(element => element.category === filterCat)
           if (CatFilter == undefined){
               reject(alert("No se encontro el producto solicitado"))
            }else{
                setTimeout( () => resolve(CatFilter), 3000)
            }
        })
};
