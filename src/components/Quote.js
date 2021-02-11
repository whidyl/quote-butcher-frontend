import React from 'react'

const Quote = ({quote}) => {
    return (
        <div style={{marginBottom: "20px", textShadow: "-3px 3px 7px rgba(0,0,0,0.47)"}}>
            <h2 style={{color: "white"}}>"{quote}"</h2>
        </div>
    )
}

export default Quote
