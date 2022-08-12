import "./main.css";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/index.jsx";
import getProducts from "../../Helpers/getProducts";
import { useParams } from "react-router-dom";



export default function ItemListContainer(props){
    const filterCat = useParams().category;
    const [data, setData] = useState([]);
    console.log(useParams())    
    console.log(filterCat)  
      
    
    useEffect(() => {
        getProducts(filterCat)
        .then((respuesta) => setData(respuesta));
       
    }, [filterCat]);

    return(
        <section className="title" id="Home">
            <div className="max-width ">
                <h1 className="title">{props.greeting}</h1>
                <div className= " d-flex flex-row flex-wrap">
                    <ItemList data={data}/>
                </div>
            </div>
        </section>
    )
}