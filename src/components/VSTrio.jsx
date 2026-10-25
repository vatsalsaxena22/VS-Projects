
import ProjectCard from "./ProjectCard";

const imageModules = import.meta.glob("../assets/VS Trio/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [
    path.split("/").pop(),
    src,
  ])
);

const projects = [
  {
    id: 1,
    title: "VS Portfolio",
    description:
      "My personal portfolio showcasing skills, experience, and development journey.",
    tech: ["HTML", "Custom CSS", "Vanilla JS"],
    liveLink: "https://vatsalsaxena22.github.io/",
    githubLink: "https://github.com/vatsalsaxena22/vatsalsaxena22.github.io",
    img: images["Portfolio.png"],
  },
  {
    id: 2,
    title: "VS Projects",
    description:
      "A curated showcase of all my personal and professional web development projects.",
    tech: ["React", "Vite", "Tailwind CSS"],
    liveLink: "https://vsprojects.vercel.app/",
    githubLink: "https://github.com/vatsalsaxena22/VS-Projects",
    img: images["Projects.png"],
  },
  {
    id: 3,
    title: "VS Works",
    description:
      "An upcoming platform focused on creative work, development experiments, and digital products.",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    liveLink: "https://vsworks.vercel.app/",
    githubLink: "https://github.com/vatsalsaxena22/VS-Works",
    img: images["Coming soon.png"],
  },
];

export default function VSTrio() {
  return (
    <section className="py-2">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
