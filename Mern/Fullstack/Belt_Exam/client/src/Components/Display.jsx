import React, {useState, UseEffect, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const Display = props => {
    const [products, setProducts] = useState([]);

    const fetchActivities = () =>{
        axios.get("http://localhost:8000/api/skill")
            .then(res =>{
                console.log(res);
    const data = res.data.sort((a,b) =>{
            if (a.Type.toLowerCase() < b.Type.toLowerCase()){
                return -1;
            }
            return 1;
        })
        setProducts(data);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchActivities();
    }, []);
    


    return (
        <div>
            <div>      
                <h4>These pets are looking for a good home</h4>
            </div>
            {products.map( (act, i) => 
                <div className="card mb-5" key={act._id}>
                    <div className="card-header bg-primary text-light">Pet Name: {act.Name}</div>
                    <div className="card-body">
                        <p>Name: {act.Name}</p>
                        <p>Type: {act.Type}</p>
                        <Link className="btn btn-outline-primary" to={`/edit/${act._id}`}>Edit</Link>
                        {/* <Link className="btn btn-outline-primary float-right" to={`/details/${act.Display}`}>Details</Link> */}
                        <Link className="btn btn-outline-primary float-right" to={`/details/${act._id}`}>details</Link>
                        {/* <Link to={`/edit/${act._id}`}>edit</Link> */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Display;
