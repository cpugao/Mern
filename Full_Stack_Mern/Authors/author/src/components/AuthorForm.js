import React, { useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';



const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);

    const onSubmitHandler = e => {
        e.preventDefault();

        const newAuthor = {
            name,
        }
        axios.post('http://localhost:8000/api/authors/create', newAuthor)
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
            <Link to="/">Home</Link>
            <h3>Add a new author:</h3>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    {errors?.name && (
                        <span style={{ color: "red" }}>{errors?.name?.message}</span>)}
                </p>
                <input type="submit" />
            </form>
            <button onClick={(e) => navigate("/")}>Cancel</button>
            <br></br>
        </div>
    )
}

export default AuthorForm;


