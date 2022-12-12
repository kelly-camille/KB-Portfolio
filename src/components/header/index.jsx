import React from 'react';
import './header.css'
import kelly from './kelly.jpg'

const Header = () => {
return(
  <div className='header'>
    <img src={kelly} alt="Kelly Bruce"/>
    <h1 className='main-title'>Kelly Bruce Portfolio</h1>
  </div>
)
}

export default Header;