import React, { useState, useEffect } from 'react';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    //using useEffect hook to fetch products data when the component mounts

    useEffect(() => {
        getProducts();

    }, [])

    // Async function to fetch products data from the server
    const getProducts = async () => {
        let result = await fetch('http://localhost:3200/products')   // Sending a GET request to the specified URL to fetch products data
        result = await result.json();
        setProducts(result);                                        // Updating the 'products' state with the fetched data
    }
    console.log(products);
 // Rendering the list of products
    return (
        <div className='product-list'>
            <h3>Product List</h3>
            <ul>
                 <li><b>S. No</b></li>
                 <li><b>Name</b></li>
                 <li><b>Price</b></li>
                 <li><b>Category</b></li>
                 <li><b>Company</b></li>
             </ul>
    {/* Mapping through the 'products' array and rendering each product */}
            {products.map((item,index)=>
                 <ul>
                 <li>{index+1}</li>
                 <li>{item.name}</li>
                 <li>{item.price}</li>
                 <li>{item.category}</li>
                 <li>{item.company}</li>
             </ul>

            )}

        </div>
    )
}
export default ProductList;
