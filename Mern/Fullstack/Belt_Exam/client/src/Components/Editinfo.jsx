import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
// import moment from 'moment';


const UpdateInfo = props =>{
    const [Name, setName] = useState(""); 
    const [Type, setType] = useState("");
    const [Description, setDescription] = useState("");
    const [Skill1, setSkill1] = useState("");
    const [Skill2, setSkill2] = useState("");
    const [Skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        console.log(props._id);
        axios.get(`http://localhost:8000/api/skill/${props._id}`)
            .then(res => {
                console.log(res);
                setName(res.data.Name);
                setType(res.data.Type);
                setDescription(res.data.Description);
                setSkill1(res.data.Skill1);
                setSkill2(res.data.Skill2);
                setSkill3(res.data.Skill3);
            }).catch(errors => console.log(errors))
    }, [props._id]);

    const updateSchedule = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        // const ProductItem = {    Title, Price, Description};
        axios.put(`http://localhost:8000/api/skill/${props._id}`, {
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
        <form onSubmit={updateSchedule}>
            <h2>Pet Shelter</h2>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange = {(e)=>setName(e.target.value)} value={Name}/>
                { errors.Name ? <p className="text-danger">{errors.Name.properties.message}</p>: ""}
            </p>
            <p>
                <label>Type</label><br/>
                <input type="text" onChange = {(e)=>setType(e.target.value)} value={Type}/>
                { errors.Type ? <p className="text-danger">{errors.Type.properties.message}</p>: ""}
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)} value={Description}/>
                { errors.Description ? <p className="text-danger">{errors.Description.properties.message}</p>: ""}
            </p>
            <p>
                <label>Skill 1</label><br/>
                <input type="text" onChange = {(e)=>setSkill1(e.target.value)} value={Skill1}/>
                {/* { errors.Description ? <p className="text-danger">{errors.Description.properties.message}</p>: ""} */}
            </p>
            <p>
                <label>Skill 2</label><br/>
                <input type="text" onChange = {(e)=>setSkill2(e.target.value)} value={Skill2}/>
                {/* { errors.Description ? <p className="text-danger">{errors.Description.properties.message}</p>: ""} */}
            </p>
            <p>
                <label>Skill 3</label><br/>
                <input type="text" onChange = {(e)=>setSkill3(e.target.value)} value={Skill3}/>
                {/* { errors.Description ? <p className="text-danger">{errors.Description.properties.message}</p>: ""} */}
            </p>
            <input type="submit" value="Update"/>
        </form>
    )
}

export default UpdateInfo;






