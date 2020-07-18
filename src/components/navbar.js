import React from 'react';
import { Link } from 'react-router-dom';



function NavBar() {
    return  (
        <div className="navbar">
            <ul>
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/nasaphotos" className="navbar-link">Photos</Link>
                <Link to="/about.js" className="navbar-link">About</Link>
            </ul>

        </div>
    )
}

export default NavBar;