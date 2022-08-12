import itemsData from "../Api-data/index.jsx";


export default function getProducts(){
    if (itemsData != undefined) {
        return new Promise((resolve)=>{
            setTimeout( () => resolve(itemsData), 2000)
        
        })
    } else {
        console.log("error")
    }
};
