import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const ProductList = (props) => {
    const {products, setProducts} = props;
    // const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log("Error: ", err))
    }, [setProducts])

    const onClickDelete = (delId) => {
        axios.delete(`http://localhost:8000/api/products/${delId}`)
        .then((res) => {
            const filteredProducts = products.filter((product) => {
                return product._id !== delId;
            });
            setProducts(filteredProducts);
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return (
        <div>
            <hr></hr>
            <h2>All Products</h2>
            {products.map((product) => {
                return(
                    <div key={product._id}>
                        <p>
                            <Link to={`/${product._id}`}>{product.title}</Link>  |  <button onClick={(e) => onClickDelete(product._id)}>Delete Product</button>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;