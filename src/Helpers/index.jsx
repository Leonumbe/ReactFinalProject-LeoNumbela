import itemsData from "../Api-data/index.jsx";


export default function getProducts(){
    return new Promise((resolve)=>{
        setTimeout( () => resolve(itemsData), 2000)
    })
};
