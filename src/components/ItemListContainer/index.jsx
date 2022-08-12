import "./main.css";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/index.jsx";
import getProducts from "../../Helpers/index";
import { useParams } from "react-router-dom";
import getProductsCat from "../../Helpers/conclusion";

function ItemListContainer(props){
    const filterCat = useParams().category
    console.log(filterCat)
    const [data, setData] = useState([]);
    
    useEffect(() => {
        getProducts(filterCat).then((respuesta) => {
            setData(respuesta);
        });
        // getProductsCat(filterCat).then((respuesta) => {
        //     setData(respuesta);
        // });
    }, []);

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
export default ItemListContainer;