import Card from '../../components/Card'


const Project = ({project}) => {
  return (
 <div>
  <Card className="portfolio__project">
    <div className="portfolio__project-image">
      <img src={project.image} alt="Portfolio Project" />
      </div>
  </Card>
 </div>
  )
}

export default Project;