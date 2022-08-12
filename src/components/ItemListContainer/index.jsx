import "./main.css";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/index.jsx";
<<<<<<< HEAD
import getProducts from "../../Helpers/index";
import itemsData from "../../Api-data";


function ItemListContainer(props){
=======
import getProducts from "../../Helpers/getProducts";
import { useParams } from "react-router-dom";
>>>>>>> desafio07B

export default function ItemListContainer(props){
    const filterCat = useParams().category;
    const [data, setData] = useState([]);
    console.log(useParams())    
    console.log(filterCat)  
      
    
    useEffect(() => {
<<<<<<< HEAD
        getProducts().then((respuesta) => {
            setData(respuesta);
        })
        .catch((error) =>console.log(error));
    }, []);
=======
        getProducts(filterCat)
        .then((respuesta) => setData(respuesta));
       
    }, [filterCat]);
>>>>>>> desafio07B

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