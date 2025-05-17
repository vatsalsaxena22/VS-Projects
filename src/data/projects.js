const imageModules = import.meta.glob('../assets/Project Imgs/*.png', {
  eager: true,
});

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const fileName = path.split("/").pop();
    return [fileName, mod.default];
  })
);

const projects = [
  {
    id: 1,
    title: "Alphabet Website",
    description: "Learn A to Z Visually.",
    tech: ["HTML", "CSS"],
    liveLink: "https://vatsalsaxena22.github.io/alphabet-v2.0/",
    githubLink: "https://github.com/vatsalsaxena22/alphabet-v2.0",
    featured: true,
    img: images['Alphabet v2.0.png'],
  },
  {
    id: 2,
    title: "First School",
    description: "Images of Animals, Birds, Tree, etc.",
    tech: ["HTML", "CSS"],
    liveLink: "https://github.com/vatsalsaxena22/first-school",
    githubLink: "https://vatsalsaxena22.github.io/first-school/",
    featured: true,
    img: images["First School.png"],
  },
  {
    id: 3,
    title: "NCERT Books Webpage",
    description: "CLone of NCERT Books Official Webpage.",
    tech: ["HTML", "CSS"],
    liveLink: "https://vatsalsaxena22.github.io/myPortfolio/projects/NCERT%20Clone/",
    githubLink: "",
    featured: true,
    img: images["NCERT Clone.png"],
  },
  {
    id: 4,
    title: "Netflix Homepage",
    description: "Clone of Netflix Homepage",
    tech: ["HTML", "CSS"],
    liveLink: "https://vatsalsaxena22.github.io/myPortfolio/projects/Netflix%20Clone/",
    githubLink: "",
    featured: true,
    img: images["Netflix Clone.png"],
  },
  {
    id: 5,
    title: "Calculator",
    description: "A Basic Calculator",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vatsalsaxena22.github.io/myPortfolio/projects/Calculator%20Web/",
    githubLink: "",
    featured: true,
    img: images["Calculator App.png"],
  },
  {
    id: 6,
    title: "Stone Papper Scissors",
    description: "Stone Paper Scissors Web Game",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vatsalsaxena22.github.io/first-school/spsGame.html",
    githubLink: "",
    featured: true,
    img: images["SPS.png"],
  },
  {
    id: 7,
    title: "Voting Machine",
    description: "A Web App for Voting.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vatsalsaxena22.github.io/myPortfolio/projects/Voting%20Machine/",
    githubLink: "",
    featured: true,
    img: images["Voting Machine.png"],
  },
  {
    id: 8,
    title: "Metro Ticket System",
    description: "Make Metro Ticket with discount logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vatsalsaxena22.github.io/myPortfolio/projects/Metro%20Ticket%20System/",
    githubLink: "",
    featured: true,
    img: images["Metro Ticket.png"],
  },
  {
    id: 9,
    title: "Flipkart Cart System",
    description: "Clone of Flipkart Cart System",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vatsalsaxena22.github.io/myPortfolio/projects/Flipkart%20Clone/",
    githubLink: "",
    featured: true,
    img: images["Flipkart.png"],
  },
];

export default projects;
