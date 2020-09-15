import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const ProductList = (props) => {
    const {products, setProducts} = props;
    // const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log("Error: ", err))
    }, [])


    return (
        <div>
            <hr></hr>
            <h2>All Products</h2>
            {products.map((product) => {
                return(
                    <div key={product._id}>
                    <Link to={`/${product._id}`}>{product.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;