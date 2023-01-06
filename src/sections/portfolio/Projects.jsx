import Project from "./Project"

// pass in the projects prop from portfolio.jsx
const Projects = ({projects}) => {
  return (
 <div className="portfolio__projects">
  {/* mapping through data array */}
  {
    projects.map(project => (
      <Project key={project.id} project={project} />
    ))
  }
 </div>
  )
}

export default Projects;

// display Project component for each project in the data array