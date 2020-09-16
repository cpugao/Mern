import React, { useState } from 'react'
import axios from 'axios';
import ProductList from '../components/ProductList';


const NewProductForm = (props) => {
    const {products, setProducts} = props;
    // const [products, setProducts] = useState([]);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description
        }
        axios.post('http://localhost:8000/api/products/create', newProduct)
        .then(res => setProducts([...products, res.data]))
        .catch(err => console.log(err));

    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title: </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price: </label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
            <br></br>
            <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}

export default NewProductForm;