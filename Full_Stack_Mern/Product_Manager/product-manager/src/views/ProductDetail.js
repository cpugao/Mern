import React, { useEffect, useState } from 'react';
import axios from 'axios';


const OneProduct = (props) => {
    const [ product, setProduct ] = useState({});

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
};

export default OneProduct;