import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
// import { listeners } from "../../../FileVideo13-20/Expressstart/DB/users";


const UpdateProduct = () => {
    const [name, setName] = useState('');
    console.log("new", name);
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    // Fetch product details when the component mounts
    useEffect(() => {
        getProductDetails();
    }, []);

    // Function to fetch product details
    const getProductDetails = async () => {
        // console.log(params);    // Fetch product details from the server
        let result = await fetch(`http://localhost:3200/product/${params.id}`, {
            headers: {                   // Authorization header with bearer token
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.log(result);
        // Set product details to state variables
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);

    }


    // Function to update product details
    const updateProduct = async () => {
        // Send a PUT request to update the product with the specified ID
        let result = await fetch(`http://localhost:3200/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json', // Authorization header with bearer token
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json();
        console.log(result);
        navigate('/');           // Navigate back to the home page after updating the product
    }


    return (
        <div className="product">
            <h2>Update Product</h2>
            {/* Input fields for updating product details */}
            <input className="inputBox" value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Update product name" />
            <input className="inputBox" value={price} onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Update product price" />
            <input className="inputBox" value={category} onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder="Enter product category" />
            <input className="inputBox" value={company} onChange={(e) => { setCompany(e.target.value) }} type="text" placeholder="Enter product company" />
            <button className="Appbutton" onClick={updateProduct} >Update Product</button>

        </div>
    )
}
export default UpdateProduct;