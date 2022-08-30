import "./main.css";
import React, { useEffect, useState } from "react";
import ItemList from "../itemList/itemList.jsx";
import getProducts from "../../helpers/getProducts";
import { useParams } from "react-router-dom";
//import itemsData from "../../apiData/apiData.jsx";
import UserForm from "../userForm/userForm.jsx";
import { MrMiyagi } from '@uiball/loaders'
//import firebase
import firestoreDB from "../../services/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export default function ItemListContainer(props){
    const filterCat = useParams().category;
    const [data, setData] = useState([]);
    //console.log(useParams())    
    //console.log(filterCat)  

    useEffect(() => {
        
        getProducts().then((respuesta) => {
            if(filterCat){
                const apiDataCollection = collection(firestoreDB, "apiData");
                const q = query(apiDataCollection, where("category","==", filterCat))
                getDocs(q).then( snapshot=>{
                const docData = snapshot.docs.map(doc => {
                    return{
                        ...doc.data(), id: doc.id 
                    }
                })
                setTimeout( () => setData(docData), 500)
                })

            }else{
            setData(respuesta)
            }
        }).catch((error) => alert(error));
       
    }, [filterCat]);

    return(
        <section className="title" id="Home">
            <div className="max-width ">
        {
            (data.length == 0)?
            <div className="loaderStile">
                <MrMiyagi 
                size={200}
                lineWeight={3.5}
                speed={0.75} 
                color="rgb(220, 0, 240)" 
                textAlign="center"
                />
            </div>:
            <>
                <h1 className="title">{props.greeting}</h1>
                <div className= " d-flex flex-row flex-wrap">
                    <ItemList data={data}/>
                </div>
                <UserForm/>
            </>
            }
            </div>
        </section>
    )
}

