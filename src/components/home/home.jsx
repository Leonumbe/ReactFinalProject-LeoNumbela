import "./main.css"

export default function Home(){
    
    const brandMessage =[
        {textA: "We don't have all the models..."},
        {textB:"We only have the best!"},
        {textC:"Baker.", textC2:"team"}
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
                                    <h1 className="homeText">{item.textA}</h1>
                                    <h1 className="homeText">{item.textB}</h1>
                                    <h1 className="homeText">{item.textC}<spam className="homeTextSpam">{item.textC2}</spam></h1>
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