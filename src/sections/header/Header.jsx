import HeaderImage from '../../assets/header.jpg'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Photo of Kelly Bruce" />
        </div>
        <h3>Kelly Bruce</h3>
        <p>
          Fullstack Developer with a passion for building and integrating APIs
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>

      </div>
      </header>
  )
}

export default Header;