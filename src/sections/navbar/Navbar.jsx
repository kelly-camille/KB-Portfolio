import logo from '../../assets/logo.png'
import data from './data'
import './navbar.css'


const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container"></div>
        <a href=""></a>
        <img src={logo} alt="logo" />
        <ul className='nav__menu'>
          {
            data.map(item=> <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button></button>
    </nav>
  )
}

export default Navbar;