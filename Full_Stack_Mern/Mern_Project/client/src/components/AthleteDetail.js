import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AthleteDetail = (props) => {
    const [ athlete, setAthlete ] = useState({});

    useEffect (() => {
        axios.get(`http://localhost:8000/api/athletes/${props.id}`)
        .then((res) => setAthlete(res.data))
        .catch((err) => console.log(err));
    }, [props.id]);

    const onClickDelete = () => {
        axios.delete(`http://localhost:8000/api/athletes/${props.id}`)
        .then((res) => {
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <Link to="/">Back to Main Page</Link>
            <br></br>
            <br></br>
            <h2>Details about: {athlete.firstName} {athlete.lastName}</h2>
            <hr></hr>
            <p>Snatch: {athlete.snatch} lbs</p>
            <p>Clean & Jerk: {athlete.cleanAndJerk} lbs</p>
            <p>Deadlift: {athlete.deadlift} lbs</p>
            <p>Back Squat: {athlete.backsquat} lbs</p>
            <br></br>
            <button onClick={onClickDelete}>Delete Athlete</button>
        </div>
    )
};

export default AthleteDetail;