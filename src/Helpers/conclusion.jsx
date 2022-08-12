import itemsData from "../Api-data/index.jsx";


export default function getProducts(id, category){
       return new Promise((resolve, reject)=>{
        if(category){
            let CatFilter = itemsData.filter(element => element.category === category)
            setTimeout( () => resolve(CatFilter), 3000)
        }else if (id){
            let itemSelected = itemsData.find(element => element.id == id)
            setTimeout( () => resolve(itemSelected), 1000)
        }else if(itemsData){
            setTimeout( () => resolve(itemsData), 2000)
        }else{
            reject(alert("No se encontro el producto solicitado"))
        }
        })
};


