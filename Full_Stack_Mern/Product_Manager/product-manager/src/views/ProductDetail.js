import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const OneProduct = (props) => {
    const [ product, setProduct ] = useState({});

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    }, [props.id]);

    const onClickDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${props.id}`)
        .then((res) => {
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/${props.id}/update`}>Update Product</Link>
            <br></br>
            <br></br>
            <button onClick={onClickDelete}>Delete Product</button>
            <br></br>
            <br></br>
            <Link to="/">Back to Main Page</Link>
        </div>
    )
};

export default OneProduct;