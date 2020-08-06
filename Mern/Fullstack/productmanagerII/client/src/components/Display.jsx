import React, {useState, UseEffect, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const Display = props => {
    const [products, setProducts] = useState([]);

    const fetchActivities = () =>{
        axios.get("http://localhost:8000/api/product")
            .then(res =>{
                console.log(res);
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchActivities();
    }, []);

    const Remove = _id =>{
        console.log(_id);
        axios.delete(`http://localhost:8000/api/product/${_id}`)
            .then(res =>{
                console.log(res);
                fetchActivities(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {products.map( (act, i) => 
                <div className="card mb-5" key={act._id}>
                    <div className="card-header bg-primary text-light">{act.Title}</div>
                    <div className="card-body">
                        <p>Title: {act.Title}</p>
                        <p>Price: {act.Price}</p>
                        <p>Description: {act.Description}</p>
                        <Link className="btn btn-outline-primary" to={`/edit/${act._id}`}>Edit</Link>
                        <button className="btn btn-outline-danger float-right"onClick={e => Remove(act._id)}>Remove</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Display;