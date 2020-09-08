import React, { useState } from 'react';

const BoxDisplay = (props) => {
    const {color, dimension} = props.box;

    const inlineStyles = {
        backgroundColor: color,
        width: parseInt(dimension),
        height: parseInt(dimension),
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "10px",
        marginRight: "10px",
    }

    return(
        <div style={inlineStyles}></div>
    )
}
 
export default BoxDisplay;