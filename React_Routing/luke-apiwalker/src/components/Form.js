import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Form = (props) => {
    const { inputs, setInputs } = props;

    const resourceChange = (e) => {
        setInputs({...inputs, resource: e.target.value})
    }

    const idChange = (e) => {
        setInputs({...inputs, id: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setInputs({...inputs, resource: e.target.resource.value, id: e.target.id.value});
        navigate(`/${inputs.resource}/${inputs.id}`)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="resource">Search For: </label>
            <select name="resource" onChange={resourceChange}>
                <option value="people" selected={inputs.resource == 'people'}>People</option>
                <option value="planets" selected={inputs.resource == 'planets'}>Planets</option>
            </select>
            <label htmlFor="id">ID: </label>
            <input type="number" name="id" onChange={idChange} value={inputs.id} /> 
            <button>Search</button>
        </form>
    );
};

export default Form;

