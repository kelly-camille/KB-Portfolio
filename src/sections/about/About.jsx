import AboutImage from '../../assets/about.jpg'
import resume from '../../assets/resume2022.pdf';
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
            ))  
        }
          </div>
          <p>
            Here is another paragraph that is longer about who I am and such.
          </p>
          <a href={resume} download className='btn primary'>Download Resume<HiDownload/></a>
      </div>
    </div>
    </section>
  )
}

export default About;

