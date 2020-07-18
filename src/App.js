import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home';
import NasaPhotos from './components/nasaphotos';
import About from './components/about';

import './App.css';

function App() {
  return (
   <BrowserRouter>
      <div className="app">
        <Route component={Home} path="/" exact/>
        <Route component={NasaPhotos} path="/nasaphotos" />
        <Route component={About} path="/about.js" />
      </div>
   
   </BrowserRouter>
  );
}

export default App;
