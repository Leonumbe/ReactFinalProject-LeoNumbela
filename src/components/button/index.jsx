import "./main.css";

export default function Button({onTouch, text}){

    return(
            <button onClick={onTouch} className="btnAdd btnBack">
                {text}
            </button> 
    )
}


