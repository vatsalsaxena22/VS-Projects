import {
  Card,
  Button,
  Badge,
} from "react-bootstrap";

import {
  ArrowUpRight,
  Github,
} from "react-bootstrap-icons";

const ProjectCard = ({
  id,
  title,
  description,
  tech,
  liveLink,
  githubLink,
  img,
}) => {
  return (
    <Card
      key={id}
      className="
        h-100
        border-0
        shadow-sm
        rounded-4
        overflow-hidden
      "
    >

      {/* IMAGE */}
      <div className="bg-light border-bottom">

        <Card.Img
          variant="top"
          src={img}
          alt={title}
          className="img-fluid"
          style={{
            height: "220px",
            objectFit: "cover",
          }}
        />

      </div>

      {/* CONTENT */}
      <Card.Body className="p-4 d-flex flex-column">

        {/* TECH STACK */}
        <div className="d-flex flex-wrap gap-2 mb-3">

          {tech.map((tag, idx) => (
            <Badge
              key={idx}
              bg="none"
              className="main-badge fw-normal"
            >
              {tag}
            </Badge>
          ))}

        </div>

        {/* TITLE */}
        <Card.Title className="fw-bold fs-4 mb-3">
          {title}
        </Card.Title>

        {/* DESCRIPTION */}
        <Card.Text className="text-body-secondary small mb-4">
          {description}
        </Card.Text>

        {/* BUTTONS */}
        <div className="mt-auto d-flex gap-2 flex-wrap">

          <Button
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              main-btn
              d-inline-flex
              align-items-center
              gap-2
            "
          >
            Live
            <ArrowUpRight size={15} />
          </Button>

          {githubLink && (
            <Button
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                main-btn
                btn-white
                d-inline-flex
                align-items-center
                gap-2
              "
            >
              <Github size={15} />
              Code
            </Button>
          )}

        </div>

      </Card.Body>

    </Card>
  );
};

export default ProjectCard;