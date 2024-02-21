import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    // Logout function
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div>
            <img src="https://pbs.twimg.com/profile_images/1491054304559575040/ye912bbZ_400x400.jpg"
                alt="logo" className="logo" />
            {/* Feature, if you are not log in, product menu will be hidden */}
            {auth ?
                <ul className="nav-ul">
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Products</Link></li>
                    <li> <Link to="/update">update Products</Link></li>
                    <li> <Link to="/profile">profile</Link></li>
                    <li><Link onClick={logout} to="/signup">logout ({JSON.parse(auth).name}) </Link></li>
                    {/*feature above If you are login, then your name will be appear on nav */}

                </ul> :
                <ul className="nav-ul nav-right">

                    <li><Link to="/signup">signup</Link></li>
                    <li><Link to="/login">Login</Link> </li>

                </ul>
            }
        </div>
    )
}

export default Navbar
