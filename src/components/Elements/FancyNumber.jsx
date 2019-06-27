import React from "react";
import PropTypes from "prop-types";

const FancyNumber = ({value, min, max}) => {
    const height = 30;
    const width = 30;
    const scale = height/(max-min);

    let a,v,b;
    if (min * max < 0) {
        v = (max-value) * scale;
        a = height/2 - v;
        b = height - a - v;
    } else {
        v = (value-min) * scale;
        a = height -v;
        b = 0;
    }

    console.error("stop me here");

    const border = (value < 0) ? {borderTop: "1px dashed black"} : {borderBottom: "1px dashed black"};

    return (
        <div style={{height, width, outline: "1px grey solid", margin: "1px"}}>
            <div className={"above"} style={{height: a, backgroundColor: 'white'}} />
            <div className={"value"} style={{height: v, backgroundColor: 'red'}} />
            <div className={"baseline"} style={{"width":"100%","height":"1px", ...border}}>&nbsp;</div>
            <div className={"below"} style={{height: b, backgroundColor: 'white'}} />
        </div>
    );
}

FancyNumber.propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
}

export default FancyNumber
