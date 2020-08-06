import React, {useState, UseEffect, useEffect} from 'react';
import axios from 'axios';
// import Display from './Display';
import { Link, navigate } from '@reach/router';


const AdoptDisplay = props => {
    const [likes, setLikes] = useState(""); 

    const [products, setProducts] = useState([]);

    const fetchActivities = () =>{
        axios.get(`http://localhost:8000/api/skill/${props._id}`)
            .then(res =>{
                console.log(res);
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }


    useEffect(() => {
        fetchActivities();
    }, []);

    const like = (act) => {
    const temp = act.likes + 1
        axios.put(`http://localhost:8000/api/skill/${props._id}`,{"likes":temp})
            .then(res=>fetchActivities())
            .catch(err=>console.log(err))
        }

        const Remove = _id =>{
            console.log(_id);
            axios.delete(`http://localhost:8000/api/skill/${_id}`)
                .then(res =>{
                    console.log(res);
                    navigate("/");
                })
                .catch(err => console.log(err));
        }


    return (
        <div>
            
                <div className="card mb-5" key={products._id}>

                    <div className="card-header bg-primary text-light">{products.Name}</div>
                    <button className="btn btn-outline-danger"onClick={e => Remove(products._id)}>Adopt</button>
                    <div className="card-body">
                        <p>Pet Type: {products.Type}</p>
                        <p>Description: {products.Description}</p>
                        <p>Skill1: {products.Skill1}</p>
                        <p>Skill2: {products.Skill2}</p>
                        <p>Skill3: {products.Skill3}</p>
                        <Link className="btn btn-outline-primary float-right" to={`/edit/${products._id}`}>Edit</Link>
                        <button className="btn btn-success float-middle" onClick={e =>like(products)}> Like </button>
                        <p>{products.Name} has {products.likes} {products.likes==1? "like" : "likes"}</p>

                    </div>
                </div>
            
        </div>
    )
}

export default AdoptDisplay;