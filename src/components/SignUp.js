import React, { useState } from 'react';
// The useNavigate hook is used to programmatically navigate between different routes
// in a React application. It provides a function that can be called to navigate to
// a specific route, allowing for dynamic navigation based on application state or user actions.
// This hook is particularly useful when navigation needs to be triggered in response
// to certain events, such as form submissions or button clicks.
import { json , useNavigate } from 'react-router-dom';


// Define a functional component called SignUp
const SignUp = () => {
    // Define state variables for name, password, and email
    const [name, setName] = useState();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

   
   // Function to collect user data and initiate registration process
const collectData = async () => {
    // Log the user data to be collected (name, email, password)
    console.log(name, email, password);

    // Send a POST request to the server with user data for registration
    let result = await fetch('http://localhost:3200/register', {
        method: 'post',
        body: JSON.stringify({ name, email, password }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    // Parse the JSON response from the server
    result = await result.json();
    
    // Log the registration result
    console.log(result);

    // If registration is successful, navigate the user to the home page
    if (result) {
        navigate('/');
    }
}


    // Render the SignUp form with input fields for name, email, and password
    return (
        <div className='register'>
            <h1>Register</h1>
            {/* Input field for name ,email and password*/}
            <input className="inputBox" type='text' placeholder='Enter name' value={name} onChange={(e) => { setName(e.target.value) }} />

            
            <input className="inputBox" value={email} onChange={(e) => { setEmail(e.target.value) }} type='text' placeholder='Enter email' />

           
            <input className="inputBox" value={password} onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Enter password' />

            {/* SignUp button */}
            <button className='Appbutton' onClick={collectData} type='button'>SignUp</button>
        </div>
    )
}


export default SignUp;
