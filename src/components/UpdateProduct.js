import React, { useState } from "react";


const UpdateProduct = () => {
    // State variables to manage input field values
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    
    // Function to handle product update
    const updateProduct = () =>{
        console.log(name,price,category,company);
    }
       

    return (
        <div className="product">
            <h2>Update Product</h2>
           {/* Input fields for updating product details */}
            <input className="inputBox" onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Update product name" />
            <input className="inputBox" onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Update product price" />
            <input className="inputBox" onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder="Enter product category" />
            <input className="inputBox" onChange={(e) => { setCompany(e.target.value) }} type="text" placeholder="Enter product company" />
            <button className="Appbutton"  onClick={updateProduct} >Update Product</button> {/* Button to update product details */}

        </div>
    )
}
export default UpdateProduct;
