import React, { useState, useEffect } from "react";
import { useParams , useNavigate } from 'react-router-dom';
// import { listeners } from "../../../FileVideo13-20/Expressstart/DB/users";


const UpdateProduct = () => {
    const [name, setName] = useState('');
    console.log("new", name);
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();


    // useEffect(() => {
    //     //    console.log(params);
    //  getProductDetails();
    // }, [])

    useEffect(() => {
        getProductDetails();
    }, []);


    const getProductDetails = async () => {
        // console.log(params);
        let result = await fetch(`http://localhost:3200/product/${params.id}`);
        result = await result.json();
        console.log(result);
        setName(result.name);
        console.log(name);

        console.log(name)
        setPrice(result.price);
        console.log(price)

        setCategory(result.category);
        setCompany(result.company);

    }



    const updateProduct = async () => {
        let result = await fetch(`http://localhost:3200/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        navigate('/');
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