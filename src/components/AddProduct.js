import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const navigate =  useNavigate();

    const AddProduct = async () => {
        console.log(!name);
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }


        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:3200/add-product/', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json',
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        
        console.log(result);
        navigate('/');

    }


    return (
        <div className="product">
            <h2>Add Product</h2>
            {/* Feature of validation message in case of invalid input */}
            <input className="inputBox" onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter product name" />
            {error && !name && <span className="invalid-input" >Enter valid name</span>}
            <input className="inputBox" onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Enter product price" />
            {error && !price && <span className="invalid-input">Enter valid price</span>}
            <input className="inputBox" onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder="Enter product category" />
            {error && !category && <span className="invalid-input">Enter valid category</span>}
            <input className="inputBox" onChange={(e) => { setCompany(e.target.value) }} type="text" placeholder="Enter product company" />
            {error && !company && <span className="invalid-input">Enter valid company</span>}
            <button className="Appbutton" onClick={AddProduct} >Add Product</button>

        </div>
    )
}
export default AddProduct;