const express = require('express');
const cors = require('cors');
require('./config');
const userfileRef = require('./users');
const Product = require('./product');
const app = express();
app.use(cors());
app.use(express.json());
// In the post route, I am adding comments to understand properly the working of route
// Handling POST requests to the '/register' endpoint for registration signup
app.post('/register/', async (req, resp) => {
    // Creating a new user instance with the data from the request body
    let userRef = new userfileRef(req.body);
    // Saving the new user to the database
    let result = await userRef.save();
    // For the sign up registration API, removing the password in response
    result = result.toObject();
    delete result.password;
    console.log(result);
    // Sending the result back as the response
    resp.send(result);
})

// Route handler for user login
app.post('/login', async (req, resp) => {
    // Find the user based on the request body which typically contains user credentials
    if (req.body.email && req.body.password) {
        let user = await userfileRef.findOne(req.body).select("-password");
        // We should not include the password in the response to enhance security so select() used
        // Respond with the request body, which typically contains user credentials
        if (user) {
            resp.send(user);
            console.log(user)
        }
        // If we don't find the user then
        else {
            resp.send({ result: "User not found" });
        }

    } else {
        // If we have only one thing email or password, this would have feature to ask for both thing
        resp.send({ result: "Provide both email and password" });
    }
})
// making API for add product
app.post('/add-product', async (req,resp)=>{
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
    
})

// Route handler for fetching all products
app.get('/products',async (req,resp)=>{
    let products = await Product.find();
    if(products.length>0){
        resp.send(products);
    }else{
        resp.send({result:"No products found"});
    }
})

// Route handler for deleting a product by ID
app.delete('/product/:id',async (req,resp)=>{
    const result = await Product.deleteOne({_id:req.params.id});   // Deleting the product by ID
    resp.send(result);
})

// Route handler for fetching a product by ID
app.get('/product/:id',async(req,resp)=>{
    let result = await Product.findOne({_id:req.params.id});       // Finding a product by ID
    if(result){
    resp.send(result);                     // Sending the product back as the response if found
    } else{
        resp.send({result: "No record found"})     // Sending a message if no product is found
    }
})

app.listen(3200);
