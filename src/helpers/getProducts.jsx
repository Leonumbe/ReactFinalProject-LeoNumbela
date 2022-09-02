//import itemsData from "../apiData/apiData.jsx";
import firestoreDB from "../services/firebase.js";
import { getDoc,getDocs, collection, doc } from "firebase/firestore";

export default function getProducts(idUrl) {
    
    return new Promise((resolve, reject)=>{
        //llamo un solo producto
        try{
            if(idUrl){
            const apiDataCollection = collection(firestoreDB, "apiDataFull");
            const docRef = doc(apiDataCollection, idUrl);
            getDoc(docRef).then( snapshot => {
                setTimeout( () => resolve(
                    {...snapshot.data(), id: snapshot.id}
                ), 1000)
            })
            }else{
                //llamo a todos los porductos
                const apiDataCollection = collection(firestoreDB, "apiDataFull");
                getDocs(apiDataCollection).then( snapshot=>{
                const docData = snapshot.docs.map(doc => {
                    return{
                        ...doc.data(), id: doc.id 
                    }
                })
                setTimeout( () => resolve(docData), 2000)
                //console.log(docData)
                });  
            }
        }catch{ 
                reject(alert("No se encontro el producto solicitado"))
            }
    })
};


