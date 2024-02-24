import React, { useState, useEffect } from 'react';


const ProductList = () => {
    const [products, setProducts] = useState([]);
// useEffect hook to fetch products when the component mounts
    useEffect(() => {
        getProducts();

    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:3200/products')   // Sending a GET request to the specified URL to fetch products data
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        console.log(id);
        // Send a DELETE request to the server to delete the product with the specified ID
        let result = await fetch(`http://localhost:3200/product/${id}`, {
            method: 'delete',     // Specify the http method as delete
        })
        result = await result.json();
        if (result) {               // After successful deletion,        
            getProducts();           //update the list of products by fetching them again
        }

        console.log(result);
    }
    //in above delete api we r making the URL dynamically to target the specific product's endpoint for deletion
    return (
        <div className='product-list'>
            <h3>Product List</h3>             {/* Header row */}
            <ul>
                <li><b>S. No</b></li>
                <li><b>Name</b></li>
                <li><b>Price</b></li>
                <li><b>Category</b></li>
                <li><b>Company</b></li>
                <li><b>Operations</b></li>
            </ul> 
            {/* Rendering each product */}
            {products.map((item, index) =>
                <ul key={item._id} >            {/* Product details */}
                    <li>{index + 1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li><button onClick={() => { deleteProduct(item._id) }} >Delete</button> </li>  {/* Button to delete the product */}

                </ul>

            )}

        </div>
    )
}
export default ProductList;
