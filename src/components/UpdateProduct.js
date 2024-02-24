import React, { useState } from "react";


const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");

    const updateProduct = () =>{
        console.log(name,price,category,company);
    }
       

    return (
        <div className="product">
            <h2>Update Product</h2>
            {/* Feature of validation message in case of invalid input */}
            <input className="inputBox" onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Update product name" />
            <input className="inputBox" onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Update product price" />
            <input className="inputBox" onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder="Enter product category" />
            <input className="inputBox" onChange={(e) => { setCompany(e.target.value) }} type="text" placeholder="Enter product company" />
            <button className="Appbutton"  onClick={updateProduct} >Update Product</button>

        </div>
    )
}
export default UpdateProduct;