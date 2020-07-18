import React from 'react';
import { Link } from 'react-router-dom';



function Home() {
    return(
        <div className="home">
            <h1 className="title">NASA PHOTO OF THE DAY</h1>
            <Link to="/nasaphotos" className="home-link">See the stars!</Link>
        </div>
    );
}


export default Home;