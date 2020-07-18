import React from 'react';
import { Link } from 'react-router-dom';



function Home() {
    return(
        <div>
            <Link to="/nasaphotos">See the stars!</Link>
        </div>
    );
}


export default Home;