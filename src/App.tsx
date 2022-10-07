import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import ResponsiveAppBar from "./components/AppBar/Navbar";
import {AppFooter} from "./components/AppFooter/AppFooter";



function App() {
  return (
      <BrowserRouter>
          <ResponsiveAppBar/>

          <AppFooter/>
      </BrowserRouter>

  );
}

export default App;
