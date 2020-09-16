import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const UpdateProduct = (props) => {

    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then((res) => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    }, [props.id])

    const onSubmit = (e) => {
        e.preventDefault();

        const updatedProduct = {
            title,
            price,
            description
        };
        axios.put(`http://localhost:8000/api/products/${props.id}`, updatedProduct)
        .then((res) => {
            navigate("/");
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={onSubmit}>
                <p>
                    <label>Title </label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
                </p>
                <p>
                    <label>Price </label>
                    <input onChange={(e) => setPrice(e.target.value)} type="number" value={price} />
                </p>
                <p>
                    <label>Description </label>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" value={description} />
                </p>
                <input type="submit" value="Update" />
            </form>
            <br></br>
            <Link to="/">Cancel</Link>
        </div>
    )
}

export default UpdateProduct;