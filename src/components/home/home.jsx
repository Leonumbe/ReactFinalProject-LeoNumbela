import "./main.css"



export default function Home(){
    return(
        <div className="home" >
        <div className="max-width">
            <div className="homeContent">
            <div className="homeImg">
                <img className="imgHome" src="https://i.ibb.co/Y2GR47B/frente-Nike.jpg" alt="frente-Nike" border="0" />
            </div>
            <div className="homePhrases">
                <h1 className="homeText">We don't have all the models...</h1>
                <h1 className="homeText">We only have the best!</h1>
                <h1 className="homeText">Baker. <spam className="homeTextSpam"> team</spam></h1>
            </div>
        </div>
        </div>
        </div>
    )
}