import "./main.css";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/index.jsx";
import getProducts from "../../helpers/getProducts";
import { useParams } from "react-router-dom";
import itemsData from "../../api-data";
import UserForm from "../UserForm";



export default function ItemListContainer(props){
    const filterCat = useParams().category;
    const [data, setData] = useState([]);
    //console.log(useParams())    
    //console.log(filterCat)  
    
    useEffect(() => {
        getProducts().then((respuesta) => {
            if(filterCat){
            let categoryFilter = itemsData.filter(element => element.category === filterCat)
            setTimeout( () => setData(categoryFilter), 500)
            }else{
            setData(respuesta)
            }
        }).catch((error) => alert(error));
       
    }, [filterCat]);

    return(
        <section className="title" id="Home">
            <div className="max-width ">
                <h1 className="title">{props.greeting}</h1>
                <div className= " d-flex flex-row flex-wrap">
                    <ItemList data={data}/>
                </div>
                <UserForm/>
            </div>
        </section>
    )
}