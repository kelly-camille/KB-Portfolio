import logo from '../../assets/logo.png'
import data from './data'
import dataSocial from "./dataSocial"

import './navbar.css'


const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
        <img src={logo} alt="logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item=> <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <div className="navbar__socials">
          {
            dataSocial.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
        </div>
    </nav>
  )
}

export default Navbar;