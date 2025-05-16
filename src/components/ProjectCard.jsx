import { Card, Button, Badge } from "react-bootstrap";

const ProjectCard = ({
  id,
  title,
  description,
  tech,
  liveLink,
  githubLink,
  featured,
  img,
}) => {
  return (
    <Card className="h-100 shadow-sm" key={id}>
      <Card.Body>
        <img className="border" src={img} alt={title} width={"100%"} />
        <Card.Title className="my-2">{title}</Card.Title>
        <div className="my-2">
          {tech.map((tag, idx) => (
            <Badge key={idx} bg="none" className="main-badge">
              {tag}
            </Badge>
          ))}
        </div>
        <Card.Text>{description}</Card.Text>
        <Button href={liveLink} target="_blank" className="main-btn">
          Live
        </Button>
        {githubLink && (
          <Button
            href={githubLink}
            target="_blank"
            className="main-btn btn-white"
          >
            Code
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
