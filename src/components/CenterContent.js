import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Quote from './Quote'



const CenterContent = () => {
    const [quote, setQuote] = useState("If you are working on something that you really care about, you don't have to be pushed.")
    const [butchered, setButchered] = useState("If you areon something, don't push.")
    const [author, setAuthor] = useState("Albert Einstein")
    const [showButchered, setShowButchered] = useState(true)

    useEffect(() => {
        getNewButcheredQuote()
    }, [])

    const getNewButcheredQuote = () => {
        fetch("https://quote-butcher-api.herokuapp.com/", {
            mode: 'cors',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setQuote(result.quote);
                    setButchered(result.butchered);
                    setAuthor(result.author);
                }
            )
    }

    return (
        <div style={{
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textShadow: "-3px 3px 7px rgba(0,0,0,0.47)"}}
        >
        <Quote quote={showButchered ? butchered : quote}/>
        <Footer author={author} showButchered={showButchered} setShowButchered={setShowButchered}/>
        </div>
    )
}

export default CenterContent
