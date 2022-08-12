import React, {useEffect, useState} from "react";
import CardsSelected from "../ItemDetail"
import getProducts from "../../Helpers/index";


export default function ItemDetailContainer({itemId}){

    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts(itemId).then((respuesta) => {
            setData(respuesta);
        }).catch((error) =>console.log(error));
    }, []);
    return(
            <section className="title" id="Home">
                <div className="max-width ">
                    <h1 className="title">Selection</h1>
                    <div className= " d-flex flex-row flex-wrap">
                        <CardsSelected 
                           key={data.id}
                           name={data.name}
                           image={data.image}
                           rating={data.rating}
                           productType={data.productType}
                           price={data.price}
                           description={data.description}
                        />
                    </div>
                </div>
            </section>
        )

}