import React from 'react';
import { Link } from '@reach/router';


const Four = props => {
    return(
        <>
        <div>
            <Link to="/home">Go to back home page</Link>
        </div>

        {
        (props.value.isNan) 
            ? <div className="val mt-5">{props.value}</div>
            : <div className="val mt-5">{props.value}</div>
        }
        </>
    )
}
export default Four;