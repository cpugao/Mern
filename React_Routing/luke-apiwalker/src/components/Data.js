import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, Redirect } from '@reach/router';
import { navigate } from '@reach/router';

const Data = (props) => {
    
    const { resource, id } = props;
    const {data, setData} = props;

    useEffect(()=>{
        axios.get(`https://swapi.py4e.com/api/${resource}/${id}`)
        .then(response=>{setData(response.data)})
        .catch(err => navigate("/error"))
    }, [resource, id]);

    if (resource === 'people') {
        return (
            <>
                <h2>{data.name}</h2>
                <p>Height: {data.height} cm</p>
                <p>Mass: {data.mass}</p>
                <p>Hair Color: {data.hair_color}</p>
                <p>Gender: {data.gender}</p>
            </>
        )
    }
    else if (resource === 'planets') {
        return (
            <>
                <h2>{data.name}</h2>
                <p>Climate: {data.climate}</p>
                <p>Rotation Period: {data.rotation_period}</p>
                <p>Terrain: {data.terrain}</p>
                <p>Population: {data.population}</p>
            </>    
        )
    }

}

export default Data;
