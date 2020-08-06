import React from 'react';
import { Link } from '@reach/router';


const Hello = props => {
    return(
        <>
        <div className="jumbotron lead" style={{ backgroundColor: props.color1, color: props.color2 }}>
            <div className="val">{props.value}</div>
            <br />
        </div>
        <Link to="/home">Go back to home page</Link>
        </>
    )
}
export default Hello;