import React from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'

const Footer = ({author, showButchered, setShowButchered, newQuote, reButcher, loadingRebutcher, loadingQuote}) => {
    const handleButcheredChange = (val) => {
        setShowButchered(val)
    }
    return (
        <div>
            <ToggleButtonGroup type="radio" name="butchergroup" defaultValue={true} style={{float:"left", marginLeft: "20px"}} onChange={handleButcheredChange}>
                <ToggleButton variant="outline-light" size="sm" value={true} checked={showButchered} >
                    Butchered
                </ToggleButton>
                <ToggleButton variant="outline-light" size="sm" value={false} checked={!showButchered}>
                    Original
                </ToggleButton>
            </ToggleButtonGroup>
            <Button variant="outline-light" style={{float: "left", marginLeft: "20px"}} size="sm" onClick={() => {reButcher()}} disabled={loadingRebutcher}>
                {loadingRebutcher ? "loading... " : "Re-Butcher"}
            </Button>
            <Button variant="outline-light" style={{float: "left", marginLeft: "20px"}} size="sm" onClick={() => {newQuote()}} disabled={loadingQuote}>
                {loadingQuote ? "loading... " : "New Quote"}
            </Button>
            
            <h3 style={{float: "right", color:"white"}}> ~ {author}</h3>
        </div>

    )
}

export default Footer
