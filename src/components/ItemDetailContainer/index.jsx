import React, {useEffect, useState} from "react";
import CardsSelected from "../itemDetail/itemDetal"
import getProducts from "../../helpers/getProducts.jsx";
import { useParams } from "react-router-dom";
import { MrMiyagi } from '@uiball/loaders'
import Banner from "../banner/banner"

export default function ItemDetailContainer(){
    const [data, setData] = useState([]);
    const idUrl = useParams().id;
 
    useEffect(() => {
        getProducts(idUrl)
        .then((respuesta) => setData(respuesta))
        .catch((error)=> console.log(error))
    }, []);

    return(
        <div className="ContentItemListCont">
        <section className="title" id="itemDetail">
            <div className="max-width ">
                <h1 className="title">Selection</h1>
               {
               (data.length === 0)?
               <div className="loaderStile">
                    <MrMiyagi 
                        size={100}
                        lineWeight={3.5}
                        speed={0.75} 
                        color="rgb(220, 0, 240)" 
                        textAlign="center"
                    />
                </div>
                :
                <div className= "d-flex flex-row flex-wrap">
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
                }
            <Banner/>
            </div>
        </section>
        </div>

    )
}