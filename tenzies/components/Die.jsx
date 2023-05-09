import React from "react"

export default function Die(props) {

    const faceStyles = {
        backgroundColor: props.isHeld === true ? "orange" : "white"
    }

    const valueStyles = {
        color: props.isHeld === true ? "white" : "black"
    }

    return(
        <div className="die-face" 
            style={faceStyles} 
            onClick={props.handleHold}>

            <p className="die-val" style= {valueStyles}>{props.value}</p>

        </div>
    )
}