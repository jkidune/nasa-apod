import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home';
import NasaPhotos from './components/nasaphotos';

import './App.css';

function App() {
  return (
   <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact/>
        <Route component={NasaPhotos} path="/nasaphotos" />

      </div>
   
   </BrowserRouter>
  );
}

export default App;
