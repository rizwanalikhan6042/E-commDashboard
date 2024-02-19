import React from "react";
import  {Link}  from "react-router-dom";

const Navbar = () =>{
return (
    <div>
        <ul className="nav-ul">
           
               <li><Link to="/">Product Component</Link></li>
               <li><Link to="/Add">Add Product Component</Link></li>
              <li> <Link to="/Update">update Product Component</Link></li>
              <li> <Link to="/Logout">logout Component</Link></li>
              <li> <Link to="/Profile">profile Component</Link></li>
              <li> <Link to="/signup">signup Component</Link></li>

              
        </ul>
    </div>
)
}

export default Navbar