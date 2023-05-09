import memesData from "./memesData"
import { useState, useEffect } from "react"

export default function MemeForm() {


    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imgUrl:""
    })

    function handleChange(event) {
        const {name ,value} = event.target
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))

    }

    const [allMeme, setAllMeme] = useState([])

    useEffect( ()=> {
        console.log("fetch")
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res  => res.json())
        .then(data => setAllMeme(data.data.memes))
    
    }, [])

    const generateMeme = () => {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        console.log(randomNumber)
        setMeme(prevState => ({
            ...prevState,
            imgUrl:allMeme[randomNumber].url
         }
        ))
    }

    return (
        <div>

        <div action="" className="meme-form">
            <input type="text" 
            className="mform-one" 
            placeholder="top-text" 
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />


            <input type="text" className="mform-one" placeholder="bottom-text" 
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}/>
            <button onClick={generateMeme} 
            className="get-meme-button">Get a new meme image  🖼 </button>
        </div>
        <div className="meme">
        {meme.imgUrl !== "" && <img src={meme.imgUrl} alt="" className="meme-img" />}
        <h2 className="meme-text meme-top">{meme.topText}</h2>
        <h2 className="meme-text meme-bottom">{meme.bottomText}</h2>
        </div>
        
        </div>
        
    )
}


