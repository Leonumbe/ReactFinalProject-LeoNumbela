import "./home.css"

export default function Home(){
    
    const brandMessage =[
        {text: "We don't have all the models..."},
        {text:"We only have the best!"},
        {text:"Baker.", textC2:"team"}
    ]
    return(
        <div className="home" >
            <div className="max-width">
                <div className="homeContent">
                    <div className="homeImg">
                        <img className="imgHome" src="https://i.ibb.co/Y2GR47B/frente-Nike.jpg" alt="frente-Nike"/>
                    </div>
                    <div className="homePhrases">
                        {brandMessage.map((item)=>{
                            return(
                                <>
                                    <h1 className="homeText">{item.text}<span className="homeTextSpam">{item.textC2}</span></h1>
                                </>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}