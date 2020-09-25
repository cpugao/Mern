import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const NewAthleteForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [snatch, setSnatch] = useState("");
    const [cleanAndJerk, setCleanAndJerk] = useState("");
    const [deadlift, setDeadlift] = useState("");
    const [backsquat, setBacksquat] = useState("");
    const [errors, setErrors] = useState(null);

    const onSubmitHandler = e => {
        e.preventDefault();

        const newAthlete = {
            firstName,
            lastName,
            snatch,
            cleanAndJerk,
            deadlift,
            backsquat
        }
        axios.post('http://localhost:8000/api/athletes/create', newAthlete)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response);
                setErrors(err.response.data.errors);
            });
    }

    return (
        <div>
            <Link to="/">Back to Main Page</Link>
            <h2>Enter a new athlete</h2>
            <form onSubmit={onSubmitHandler}>
                <p>(Enter weight in pounds)</p>
                <p>
                    <label>First Name:  </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    {errors?.firstName && (
                        <span style={{ color: "red" }}>{errors?.firstName?.message}</span>)}
                </p>
                <p>
                    <label>Last Name:  </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                    {errors?.lastName && (
                        <span style={{ color: "red" }}>{errors?.lastName?.message}</span>)}
                </p>
                <p>
                    <label>Snatch:  </label>
                    <input type="number" onChange={(e) => setSnatch(e.target.value)} />
                </p>
                <p>
                    <label>Clean & Jerk:  </label>
                    <input type="number" onChange={(e) => setCleanAndJerk(e.target.value)} />
                </p>
                <p>
                    <label>Deadlift:  </label>
                    <input type="number" onChange={(e) => setDeadlift(e.target.value)} />
                </p>
                <p>
                    <label>Back Squat:  </label>
                    <input type="number" onChange={(e) => setBacksquat(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewAthleteForm;