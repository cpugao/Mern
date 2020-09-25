import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const UpdateAuthor = (props) => {

    const [ name, setName ] = useState("");
    const [ errors, setErrors ] =useState(null);
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then((res) => {
            setName(res.data.name);
        })
    }, [props.id])

    const onSubmit = (e) => {
        e.preventDefault();

        const updatedAuthor = {
            name,
        };
        axios.put(`http://localhost:8000/api/authors/${props.id}`, updatedAuthor)
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
            <Link to="/">Home</Link>
            <h2>Update Author</h2>
            <form onSubmit={onSubmit}>
                <p>
                    <label>Name </label>
                    <input onChange={(e) => setName(e.target.value)} type="text" value={name} />
                    {errors?.name && (
                        <span style={{ color: "red" }}>{errors?.name?.message}</span>)}
                </p>
                <input type="submit" value="Update" />
            </form>
            <br></br>
            <Link to="/">Cancel</Link>
        </div>
    )
}

export default UpdateAuthor;