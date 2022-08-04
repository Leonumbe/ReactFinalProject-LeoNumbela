import React, { useEffect, useState } from "react";
import itemsData from "../../api-data/index.jsx";

function getProducts(){
    return new Promise((resolve)=>{
        setTimeout( () => resolve(itemsData), 2000)
    })
};

export default function ItemList() {

    const [data, setData] = useState([]);
   
    useEffect(() => {
        getProducts().then((respuesta) => {
            setData(respuesta);
        });
    }, []);

    return(
        <div>
            <h2>{data.id}</h2>
            <h1>{data.name}</h1>
            <img src={data.image}/>
            <h1>{data.rating}</h1>
        </div>
    );
}