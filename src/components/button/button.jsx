import "./main.css";

export default function Button({onTouch, text, className,}){

    return(
            <button onClick={onTouch} className={className ? className:"btnAdd btnAddB btnAddC btnBack btnPurchase btnRemove btnClean"}>
                {text}
            </button> 
    )
}


