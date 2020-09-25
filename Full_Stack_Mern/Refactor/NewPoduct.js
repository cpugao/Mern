import React, { useState, useEffect } from 'react'
import axios from 'axios';
import RefactorForm from './RefactorForm';


const NewProduct = (props) => {
    const {products, setProducts} = props;
    // const [products, setProducts] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect (() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setPeople(res.data)
                setLoaded(true);
            })
    }, [])

    const removeFromDom = productID => {
        setProducts(product.filter(product => product._id != productId));
    }
    const createProduct = product => {
        axios.post('http://localhost:8000/api/person', product)
            .then(res => {
                setProducts([...products, res.data])
            })
    }
    
    return (
        <div>
            <RefactorForm onSubmitProp={creadProduct}
                initialTitle="" 
                initialPrice=""
                initialDescription=""
            />
            <br></br>
            {loaded && <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default NewProduct;