// import React from 'react';

// const SignUp = ()=>{
//     return (
//         <div className='register'>
//             <h1>Register</h1>
//         <input className="inputBox"  type='text' placeholder='Enter name' />
//         <input className="inputBox"  type='text' placeholder='Enter email'/>
//         <input className="inputBox"  type='password' placeholder='Enter password'/>
//         <button className='Appbutton' type='button'>SignUp</button>
//         </div>
//     )
// }
// export default SignUp;
import React, { useState } from 'react';
// The useNavigate hook is used to programmatically navigate between different routes
// in a React application. It provides a function that can be called to navigate to
// a specific route, allowing for dynamic navigation based on application state or user actions.
// This hook is particularly useful when navigation needs to be triggered in response
// to certain events, such as form submissions or button clicks.
import { Navigate, json , useNavigate } from 'react-router-dom';


// Define a functional component called SignUp
const SignUp = () => {
    // Define state variables for name, password, and email
    const [name, setName] = useState();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    // Define a function to collect and log user data when the SignUp button is clicked
    const collectData =async () => {
        console.log(name, email, password);
        let result =await fetch('http://localhost:3200/register',{
            method:'post',
            body:JSON.stringify({name, email, password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await result.json();
        console.log(result)
        if(result){
            navigate('/')
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
