import React, { useState } from "react";


const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");

    const AddProduct = () => {
        console.log(name, price, category, company);
    }




    return (
        <div className="product">
            <h2>Add Product</h2>
            <input className="inputBox" onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter product name" />
            <input className="inputBox" onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Enter product price" />
            <input className="inputBox" onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder="Enter product category" />
            <input className="inputBox" onChange={(e) => { setCompany(e.target.value) }} type="text" placeholder="Enter product company" />
            <button className="Appbutton" onClick={AddProduct} >Add Product</button>

        </div>
    )
}
export default AddProduct;
