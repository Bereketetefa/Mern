import React, { useState } from 'react';
import axios from 'axios';
// import { set } from 'mongoose';
import {navigate} from '@reach/router';


export default () => {
    const [Name, setName] = useState(""); 
    const [Type, setType] = useState("");
    const [Description, setDescription] = useState("");
    const [Skill1, setSkill1] = useState("");
    const [Skill2, setSkill2] = useState("");
    const [Skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/skill', {
            Name,
            Type,
            Description,
            Skill1,
            Skill2,
            Skill3
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
        // <div>      
        // <h4>know a pet needing a home</h4>
        // </div>
        <form onSubmit={onSubmitHandler}>
            <h2>Pet Shelter</h2>
            <p>These pets are looking for a good home</p>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                { errors.Name ? <p className="text-danger">{errors.Name.properties.message}</p>: ""}
            </p>
            <p>
                <label>type</label><br/>
                <input type="text" onChange = {(e)=>setType(e.target.value)}/>
                { errors.Type ? <p className="text-danger">{errors.Type.properties.message}</p>: ""}
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                { errors.Description ? <p className="text-danger">{errors.Description.properties.message}</p>: ""}
            </p>
            <p>Skills (Optional)</p>
            <p>
                <label>Skill 1</label><br/>
                <input type="text" onChange = {(e)=>setSkill1(e.target.value)}/>
                { errors.Skill1 ? <p className="text-danger">{errors.Description.properties.message}</p>: ""}
            </p>
            <p>
                <label>Skill 2</label><br/>
                <input type="text" onChange = {(e)=>setSkill2(e.target.value)}/>
                { errors.Skill2 ? <p className="text-danger">{errors.Description.properties.message}</p>: ""}
            </p>
            <p>
                <label>Skill 3</label><br/>
                <input type="text" onChange = {(e)=>setSkill3(e.target.value)}/>
                { errors.Skill3 ? <p className="text-danger">{errors.Description.properties.message}</p>: ""}
            </p>
            <input type="submit"/>
        </form>
    )
}


