import "./main.css";

export default function Button({onTouch, text1}){

    return(
        <div>
            <button onClick={onTouch} className="btnAdd">
                {text1}
            </button> 
        </div>
    )
}


