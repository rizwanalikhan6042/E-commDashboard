import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div>
            <ul className="nav-ul">

                <li><Link to="/">Product Component</Link></li>
                <li><Link to="/Add">Add Product Component</Link></li>
                <li> <Link to="/Update">update Product Component</Link></li>

                <li> <Link to="/Profile">profile Component</Link></li>
                {/* The feature of " if user is logged in , sign up button will not show and logout will show and if user is not logged in then sign up button will show ,logout will not show */}
                <li> {auth ? <Link onClick={logout} to="/signup">logout</Link> :
                    <Link to="/signup">signup</Link>}</li>
                <li><Link to="/login">Login</Link> </li>


            </ul>
        </div>
    )
}

export default Navbar
