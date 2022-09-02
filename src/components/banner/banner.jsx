import "./main.css"
import { Link } from "react-router-dom"


export default function Banner(){

    const banner =[
        {head:"Costumer Services",detail:"bakerTeam@gmail.com", url:"/contacUs"},
        {head:"Free Refund",detail:"until 30 days", url:"/"},
        {head:"Tracking Delivery",detail:"around the world", url:"/"},
        {head:"Questions?",detail:"Write us", url:"/contacUs"}
    ]
    return(
        <div className="bannerContent">
            {banner.map((data)=> 
                <div className="bannerModule">
                    <h3 className="bannerOne">{data.head}</h3>
                    <Link to={data.url} className="bannerTwo" >
                        <h5 className="bannerTwo">{data.detail}</h5>
                    </Link>
                </div>
            )}
        </div>
    )
}

