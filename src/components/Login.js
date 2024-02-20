import React from "react";
import { useState } from "react";


const Login = () => {

 
const [email, setEmail] = useState(""); // State variable for storing email input
const [password, setPassword] = useState(""); // State variable for storing password input

// Function to handle user login process
const handleLogin = async () => {
    console.log("Email", email, "Password", password);
    
    // Sending a POST request to the login API endpoint
    let result = await fetch('http://localhost:3200/login/', {
        method: 'post',
        body: JSON.stringify({ email, password }), // Including email and password in the request body
        headers: {
            'Content-Type': 'application/json' // Setting the content type to JSON
        }
    });

    // Parsing the JSON response from the server
    result = await result.json();
    // Logging the result of the login attempt
    console.log(result);
}

// Rendering the login form
return (
    <div className="login">
        {/* Input field for entering email , password*/}
        <input type="text" className="inputBox" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        
        <input type="password" className="inputBox" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        {/* Button for initiating login process */}
        <button className='Appbutton' onClick={handleLogin} type='button'>Login</button>
    </div>
)


}
export default Login;
