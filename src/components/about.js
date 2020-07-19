import React from 'react';

import NavBar from './navbar';



function About() {
    return (
        <div className="about">
           <NavBar/>
           <div>
               <h1>DO YOU WANT TO KNOW MORE?</h1>
               <p className="aboutme">My name is joseph Masonda, and this is my first app.<br>I think this is a begining of something great.</br></p>
           </div>
        </div>
    )
}


export default About;