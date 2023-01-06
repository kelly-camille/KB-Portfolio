import { socials} from './data'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">

        <div className="footer__socials">
          {
            socials.map(social => <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">{social.icon}</a>)
          }
        </div>
      </div>

    </footer>
  )
}

export default Footer