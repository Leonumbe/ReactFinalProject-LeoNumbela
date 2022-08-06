import ItemList from "../ItemList/index.jsx";
import "./main.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemListContainer(props){
    //console.log(props.data)
    return(
        <section className="title" id="Home">
            <div className="max-width ">
                <h1 className="title">{props.greeting}</h1>
                <div className= " d-flex flex-row flex-wrap">
                    <ItemList/>
                </div>
            </div>
        </section>
    )
}
export default ItemListContainer;