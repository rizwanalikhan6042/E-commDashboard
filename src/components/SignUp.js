import React, { useState , useEffect } from 'react';
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

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        // if auth if is not null Or undefined it means user is logged in. 
        // Then we will navigate to homepage and do not show the sign up page
        if(auth){
            navigate('/');
        }
    })

    // Define a function to collect and log user data when the SignUp button is clicked
        const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch('http://localhost:3200/register', {
            method: 'post',                                // Including name, email, and
            body: JSON.stringify({ name, email, password }), //password in the request body                                     
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result)
        // Storing the user's data and authentication token in the browser's local storage
        localStorage.setItem('user', JSON.stringify(result.result));
        localStorage.setItem('token', JSON.stringify(result.auth));
        if (result) {
            navigate('/')       // If registration is successful, navigate to the home page
        }
    }


    // Render the SignUp form with input fields for name, email, and password
    return (
        <div className='register'>
            <h1>Register</h1>
            {/* Input field for name */}
            <input className="inputBox" type='text' placeholder='Enter name' value={name} onChange={(e) => { setName(e.target.value) }} />

            {/* Input field for email */}
            <input className="inputBox" value={email} onChange={(e) => { setEmail(e.target.value) }} type='text' placeholder='Enter email' />

            {/* Input field for password */}
            <input className="inputBox" value={password} onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Enter password' />

            {/* SignUp button */}
            <button className='Appbutton' onClick={collectData} type='button'>SignUp</button>
        </div>
    )
}


export default SignUp;
