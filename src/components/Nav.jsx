import React from 'react';
import Logo from '../img/logoHenry.ico'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from "react-router-dom"


function Nav({onSearch}) {

return (

<div id="nav">

<Link to='/'>
  <div>
    <img id= "tamaño" src={Logo} alt="img not found" />
    <span>ClimApp</span>
  
  </div>
  </Link>

  <div id="about">
    <Link to='/about'>
    <span> About</span>
    </Link>
  </div>

  <div id="help">
    <Link to ="/help">
    <span>Help</span>
    </Link>
  </div>

  
    <SearchBar onSearch={onSearch} />
  
    
  

</div>
  
  
    
  





);
};

export default Nav;
