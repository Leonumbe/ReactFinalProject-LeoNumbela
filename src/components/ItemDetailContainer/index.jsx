import React, {useEffect, useState} from "react";
import CardsSelected from "../itemDetail/itemDetal"
import getProducts from "../../helpers/getProducts.jsx";
import { useParams } from "react-router-dom";


export default function ItemDetailContainer(){
    const idUrl = useParams().id;
    const [data, setData] = useState([]);
    //console.log(idUrl)
 
    useEffect(() => {
        getProducts(idUrl)
        .then((respuesta) => setData(respuesta))
        .catch((error)=> console.log(error))
    }, []);

    return(
        <section className="title" id="Home">
            <div className="max-width ">
                <h1 className="title">Selection</h1>
                <div className= " d-flex flex-row flex-wrap">
                    <CardsSelected 
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        image={data.image}
                        rating={data.rating}
                        category={data.category}
                        price={data.price}
                        description={data.description}
                        stock={data.stock}
                        />
                </div>
            </div>
        </section>
    )
}