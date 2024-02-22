import React, { useState } from "react";

// Functional component for adding a product
const AddProduct = () => {
    // State variables for product information and error handling
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);

    // Function to handle adding a product
    const AddProduct = async () => {
        // Logging the value of !name to check if it's empty
        console.log(!name);

        // Checking if any field is empty, if so, set error to true
        if (!name || !price || !category || !company) {
            setError(true);
            return false; // Exit function if there's an error
        }

        // Actual logic for adding product
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:3200/add-product/', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        result = await result.json();
        console.log(result); // Logging the result of the operation
    }

    // JSX rendering of the component
    return (
        <div className="product">
            <h2>Add Product</h2>
            {/* Input field for product name, product price, product company and product category with validation message */}
            <input className="inputBox" onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter product name" />
            {error && !name && <span className="invalid-input" >Enter valid name</span>}
           
            <input className="inputBox" onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Enter product price" />
            {error && !price && <span className="invalid-input">Enter valid price</span>}
           
            <input className="inputBox" onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder="Enter product category" />
            {error && !category && <span className="invalid-input">Enter valid category</span>}
           
            <input className="inputBox" onChange={(e) => { setCompany(e.target.value) }} type="text" placeholder="Enter product company" />
            {error && !company && <span className="invalid-input">Enter valid company</span>}
            {/* Button to trigger adding a product */}
            <button className="Appbutton" onClick={AddProduct} >Add Product</button>
        </div>
    )
}

export default AddProduct;
