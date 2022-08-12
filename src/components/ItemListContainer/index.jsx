import "./main.css";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/index.jsx";
import getProducts from "../../Helpers/index";
import { useParams } from "react-router-dom";
import getProductsCat from "../../Helpers/indexCat";

export default function ItemListContainer(props){
    const [data, setData] = useState([]);
    const filterCat = useParams().category
    console.log(filterCat)
    
    useEffect(() => {
        getProducts()
        .then((respuesta) => {setData(respuesta)
        
        });
        getProductsCat(filterCat).then((respuesta) => {
            setData(respuesta);
        });
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