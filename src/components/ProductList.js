import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UpdateProduct from './UpdateProduct';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();

    }, [])

    // Function to fetch products from the server with authorization token
    const getProducts = async () => {
        // Sending a GET request to fetch products data, including authorization token in the header
        let result = await fetch('http://localhost:3200/products', {
            headers: {                  // Authorization header with bearer token
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProducts(result);
    }


    const deleteProduct = async (id) => {
        // console.log(id);
        // Send a DELETE request to the server to delete the product with the specified ID
        let result = await fetch(`http://localhost:3200/product/${id}`, {

            method: 'delete',     // Specify the http method as delete
            headers: {            // Authorization header with bearer token
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json();
        if (result) {               // After successful deletion,        
            getProducts();           //update the list of products by fetching them again
        }

        console.log(result);
    }
    //in above delete api we r making the URL dynamically to target the specific product's endpoint for deletion


    // Function to handle searching for products.
    const searchHnadle = async (e) => {
        // Takes an event object as a parameter representing the input change event.
        let key = e.target.value;

        if (key) {
            let result = await fetch(`http://localhost:3200/search/${key}`, {
                headers: {               // Authorization header with bearer token
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if (result) {               // If the response is not empty (i.e., if products are found matching the search key), 
                setProducts(result);    // it updates the state with the fetched products.                        
            }
        }
        // If no search key is provided, it fetches all products again.
        else {
            getProducts()
        }
    }
    //working of searchHandle
    // If a search key is provided, it fetches the filtered list of products based on the key.
    // If no search key is provided, it fetches all products again.
    return (
        <div className='product-list'>
            <h3>Product List</h3>
            <input className='search-product-box' onChange={searchHnadle} type='text' placeholder='Search product' />
            <ul>
                <li><b>S. No</b></li>
                <li><b>Name</b></li>
                <li><b>Price</b></li>
                <li><b>Category</b></li>
                <li><b>Company</b></li>
                <li><b>Operations</b></li>
            </ul>
            {products.length > 0 ? products.map((item, index) =>
                <ul key={item._id} >


                    <li>{index + 1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li><button onClick={() => { deleteProduct(item._id) }} >Delete</button>
                        {/* <Link to={{
                            pathname: `/update/${item._id}`,
                            state: { product: item }
                        }}>Update</Link> */}

                        <Link to={`/update/${item._id}`}>Update</Link>
                        {/* <Link to={"/update/"+item._id}>Update</Link>   Normal way & Above mentioned way is template literal way and modern way*/}
                    </li>
                </ul>

            )
                : <h2>No Product Found !</h2>
            }

        </div>
    )
}
export default ProductList;