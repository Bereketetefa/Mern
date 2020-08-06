import React, { useState } from 'react';
import axios from 'axios';
// import { set } from 'mongoose';
import {navigate} from '@reach/router';


export default () => {
    const [Title, setTitle] = useState(""); 
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            Title,
            Price,
            Description
        })
            .then(res=>{
                console.log(res);
                if(res.data.errors){
                    setErrors(res.data.errors);
                } else{
                    navigate("/");
                }
            }).catch(err=>console.log(err));
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h2>Product Manager</h2>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                { errors.Title ? <p className="text-danger">{errors.Title.properties.message}</p>: ""}
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
                { errors.Price ? <p className="text-danger">{errors.Price.properties.message}</p>: ""}
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                { errors.Description ? <p className="text-danger">{errors.Description.properties.message}</p>: ""}
            </p>
            <input type="submit"/>
        </form>
    )
}

// export default ProductForm;






// export default () => {
//     //keep track of what is being typed via useState hook
//     const [Title, setTitle] = useState(""); 
//     const [Price, setPrice] = useState("");
//     const [Description, setDescription] = useState("");
//     //handler when the form is submitted
//     const onSubmitHandler = e => {
//         //prevent default behavior of the submit
//         e.preventDefault();
//         //make a post request to create a new person
//         axios.post('http://localhost:8000/api/product', {
//             Title,
//             Price,
//             Description
//         })
//             .then(res=>console.log(res))
//             .catch(err=>console.log(err))
//     }
//     //onChange to update firstName and lastName
//     return (
//         <form onSubmit={onSubmitHandler}>
//             <h2>Product Manager</h2>
//             <p>
//                 <label>Title</label><br/>
//                 <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
//             </p>
//             <p>
//                 <label>Price</label><br/>
//                 <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
//             </p>
//             <p>
//                 <label>Description</label><br/>
//                 <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
//             </p>
//             <input type="submit"/>
//         </form>
//     )
// }
