import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AthleteEdit = (props) => {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [snatch, setSnatch] = useState("");
    const [cleanAndJerk, setCleanAndJerk] = useState("");
    const [deadlift, setDeadlift] = useState("");
    const [backsquat, setBacksquat] = useState("");
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/athletes/${props.id}`)
        .then((res) => {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setSnatch(res.data.snatch);
            setCleanAndJerk(res.data.cleanAndJerk);
            setDeadlift(res.data.deadlift);
            setBacksquat(res.data.backsquat);
        })
    }, [props.id])

    const onSubmit = (e) => {
        e.preventDefault();
        
        const updatedAthlete = {
            firstName,
            lastName,
            snatch,
            cleanAndJerk,
            deadlift,
            backsquat
        };
        axios.put(`http://localhost:8000/api/athletes/${props.id}`, updatedAthlete)
        .then((res) => {
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response);
            setErrors(err.response.data.errors);
        })
    }

    return (
        <div>
            <Link to="/">Back to Main Page</Link>
            <br></br>
            <br></br>
            <h2>Edit {firstName} {lastName}'s Details</h2>
            <form onSubmit={onSubmit}>
            <p>(Enter weight in pounds)</p>
                <p>
                    <label>First Name:  </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                    {errors?.firstName && (
                        <span style={{ color: "red" }}>{errors?.firstName?.message}</span>)}
                </p>
                <p>
                    <label>Last Name:  </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    {errors?.lastName && (
                        <span style={{ color: "red" }}>{errors?.lastName?.message}</span>)}
                </p>
                <p>
                    <label>Snatch:  </label>
                    <input type="number" onChange={(e) => setSnatch(e.target.value)} value={snatch} />
                </p>
                <p>
                    <label>Clean & Jerk:  </label>
                    <input type="number" onChange={(e) => setCleanAndJerk(e.target.value)} value={cleanAndJerk} />
                </p>
                <p>
                    <label>Deadlift:  </label>
                    <input type="number" onChange={(e) => setDeadlift(e.target.value)} value={deadlift} />
                </p>
                <p>
                    <label>Back Squat:  </label>
                    <input type="number" onChange={(e) => setBacksquat(e.target.value)} value={backsquat} />
                </p>
                <input type="submit" value="Edit Athlete" />
            </form>
        </div>
    )
}

export default AthleteEdit;