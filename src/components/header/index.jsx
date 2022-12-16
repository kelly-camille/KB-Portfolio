import React from 'react';
import './header.css'
import kelly from './kelly.jpg'
import Title from './Title'

const Header = () => {
return(
  <div className='header'>
    <img src={kelly} alt="Kelly Bruce"/>
    <Title/>
  </div>
)
}

export default Header;