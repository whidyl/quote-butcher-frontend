import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Quote from './Quote'
import { CSSTransition } from 'react-transition-group'


const CenterContent = () => {
    const [quote, setQuote] = useState("")
    const [butchered, setButchered] = useState("")
    const [author, setAuthor] = useState("")
    const [showButchered, setShowButchered] = useState(true)
    const [initialLoaded, setInitialLoaded] = useState(false)
    const [loadingQuote, setLoadingQuote] = useState(false)
    const [loadingRebutcher, setLoadingRebutcher] = useState(false)

    useEffect(() => {
        getNewButcheredQuote()
    }, [])

    const getNewButcheredQuote = () => {
        setLoadingQuote(true)
        fetch("https://quote-butcher-api.herokuapp.com/", {
            mode: 'cors',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setQuote(result.quote);
                    setButchered(result.butchered);
                    setAuthor(result.author);
                    setInitialLoaded(true);
                    setLoadingQuote(false);
                }
            )
    }

    const reButcher = () => {
        setLoadingRebutcher(true)
        fetch("https://quote-butcher-api.herokuapp.com/", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({quote: quote})
        })
            .then(res => res.json())
            .then(data => {
                    setButchered(data.butchered);
                    setLoadingRebutcher(false);
                }
            )

    }

    return (
        <CSSTransition in={!initialLoaded} timeout={1000} classNames="load" appear>
            <div style={{
                position: "fixed",
                display: "flex",
                flexDirection: "column",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textShadow: "-3px 3px 7px rgba(0,0,0,0.47)"}}
                
            >
                
                <Quote key={1} quote={showButchered ? butchered : quote}/>
                <Footer key={2} author={author} 
                                showButchered={showButchered} 
                                setShowButchered={setShowButchered} 
                                newQuote={getNewButcheredQuote} 
                                reButcher={reButcher}
                                loadingRebutcher={loadingRebutcher}
                                loadingQuote={loadingQuote}/>
            
            </div>
        </CSSTransition>
    )
}

export default CenterContent
