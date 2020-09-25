import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

import RefactorForm from './RefactorForm';

const UpdateProduct = (props) => {

    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then((res) => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setLoaded(true);
        })
    }, [props.id])

    const updatedProduct = product => {
        axios.put(`http://localhost:8000/api/products/${props.id}`, product)
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
            {loaded && (
                <RefactorForm
                    onSubmitPropr={updatedProduct}
                    initialTitle={title}
                    initialPrice={price}
                    initialDescription={description}
                />
            )}
            <br></br>
            <Link to="/">Cancel</Link>
        </div>
    )
}

export default UpdateProduct;