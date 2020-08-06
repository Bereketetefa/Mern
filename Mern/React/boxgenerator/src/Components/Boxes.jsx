import React from 'react';

const Boxes = props => {
    return(
        <div className="box border" style={{backgroundColor: props.color}}> {props.children} </div>
    )
}


export default Boxes;