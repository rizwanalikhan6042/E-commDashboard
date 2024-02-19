import React from 'react';

const SignUp = ()=>{
    return (
        <div className='register'>
            <h1>Register</h1>
        <input className="inputBox"  type='text' placeholder='Enter name' />
        <input className="inputBox"  type='text' placeholder='Enter email'/>
        <input className="inputBox"  type='password' placeholder='Enter password'/>
        <button className='Appbutton' type='button'>SignUp</button>
        </div>
    )
}
export default SignUp;