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
            I achieved a Certificate in Web and Mobile Development with a focus in JavaScript and C# in January of 2023 and I'm thrilled to jump into the world of development. I spent most of my life building a successful career in event sales and marketing, but like so many people in our country, I was laid of in March of 2020. Although it was difficult to traverse through unprecedented times, it allowed me to take time to center my priorities. During that time, I learned that I value work that makes a positive impact on our community, and that I need to be solving complex problems in my day-to-day workload. A career in software development is the path I've chosen to help me fulful those goals.
          </p>
          <a href={resume} download className='btn primary'>Download Resume<HiDownload/></a>
      </div>
    </div>
    </section>
  )
}

export default About;

