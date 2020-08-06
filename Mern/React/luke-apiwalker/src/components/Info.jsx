import { Router, navigate } from '@reach/router';
import React, { useState ,useEffect} from 'react';
import axios from 'axios';

const Info = (props) => {
    const [type, settype] = useState("");
    const [ID, setID] = useState();
    const [result, setresult] = useState({});


    useEffect(() => {        
        getData();
        props.setsearchtype(props.type);
        props.setsearchID(props.ID);
        }, [props.type, props.ID]);

    const getData = () => {
        axios.get(`https://swapi.dev/api/${props.type}/${props.ID}/`)
        .then(
            response => {
            console.log(type)
            console.log(ID)
            setresult(response.data);
        }
        ).catch(
        err => {
            navigate(`/error`);
        }
        );
    };



    return (
        <>

            <div className="text-center mt-4" >
            { 
                props.type === "people" ?
            <>
        
                <h4>{result.name}</h4>
                <p>Gender: {result.gender}</p>
                <p>Birth Year: {result.birth_year}</p>
                <p>Height: {result.height} cm</p>
                <p>Weight: {result.mass} kg</p>
                <p>Eye Color: {result.eye_color}</p>
            
            </>
            
                
        
            : ""
            }
            
            { props.type === "planets" ?
            <>
        
                <h4>{result.name}</h4>
                <p>Climate: {result.climate}</p>
                <p>Diameter: {result.diameter}</p>
                <p>Terrain: {result.terrain}</p>
                <p>Population: {result.population}</p>
            </>
            
            : ""
            
            }
            { props.type === "starships" ?
            <>
                <h4>{result.name}</h4>
                <p>Model: {result.model}</p>
                <p>Manufacturer: {result.manufacturer}</p>
                <p>Length: {result.length}</p>
                <p>Crew: {result.crew}</p>
                <p>Passengers: {result.passengers}</p>
                
            </>
            : ""
            }
            </div>
            

        </>
    );
}
export default Info;