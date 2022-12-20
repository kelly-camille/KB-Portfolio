import'./portfolio.css'
import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import data from './data'
import{useSate, useState} from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  return (
    <section id="portfolio"><h2>Recent Projects</h2>
    <p>Check out some of the Projects I've built recently.</p>
    <div className="container portfolio__container">
      <ProjectsCategories/>
      <Projects projects={projects}/>
    </div>
    </section>
  )
}

export default Portfolio;