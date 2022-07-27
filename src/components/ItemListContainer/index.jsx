import "./main.css";

function ItemListContainer(props){
    //console.log(props.data)
    return(
        <section className="room" id="Rooms">
            <div className="maw-witch">
                <h1 className="title">{props.data.title}</h1>
            </div>
        </section>
    )
}
export default ItemListContainer ;