import React from 'react';
import { Link } from '@reach/router';


const Home = props => {
    return(
        <div>
            <div className="jumbotron bg-info text-light">Welcome!</div>
            <ul>
                <br /><p className="text-muted">Type in any word you want after localhost:3000/ to display, then select the background color and text color. Or, select from below:</p>
                <Link to="/hello/red/blue" className="text-primary">Go to hello page with blue and red (/hello/red/blue)</Link><br />
                <Link to="/hello/black/red" className="text-danger">Go to hello page with black and red (/hello/black/red)</Link><br />
                <Link to="/goodbye/green/blue" className="text-success">Go to hello page with green and blue (/hello/green/blue)</Link>
            </ul>
        </div>
    )
}




export default Home;