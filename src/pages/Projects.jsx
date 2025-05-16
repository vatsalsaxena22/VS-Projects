import { Container, Row, Col } from 'react-bootstrap';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = ()=>{
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.slice().reverse().map(project => (
            <Col md={6} lg={4} className="mb-4">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
