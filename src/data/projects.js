const imageModules = import.meta.glob("../assets/Project Imgs/*.png", {
  eager: true,
});

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const fileName = path.split("/").pop();
    return [fileName, mod.default];
  }),
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
    img: images["Alphabet v2.0.png"],
  },
  {
    id: 2,
    title: "First School",
    description: "Images of Animals, Birds, Tree, etc.",
    tech: ["HTML", "CSS"],
    liveLink: "https://vatsalsaxena22.github.io/first-school/",
    githubLink: "https://github.com/vatsalsaxena22/first-school",
    featured: true,
    img: images["First School.png"],
  },
  {
    id: 3,
    title: "Calculator",
    description: "A Basic Calculator",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink:
      "https://vatsalsaxena22.github.io/myPortfolio/projects/Calculator%20Web/",
    githubLink:
      "https://github.com/vatsalsaxena22/myPortfolio/blob/master/projects/Calculator%20Web/index.html",
    featured: true,
    img: images["Calculator App.png"],
  },
  {
    id: 4,
    title: "Stone Papper Scissors",
    description: "Stone Paper Scissors Web Game",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vatsalsaxena22.github.io/first-school/spsGame.html",
    githubLink:
      "https://github.com/vatsalsaxena22/first-school/blob/master/spsGame.html",
    featured: true,
    img: images["SPS.png"],
  },
  {
    id: 5,
    title: "Voting Machine",
    description: "A Web App for Voting.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink:
      "https://vatsalsaxena22.github.io/myPortfolio/projects/Voting%20Machine/",
    githubLink:
      "https://github.com/vatsalsaxena22/myPortfolio/tree/master/projects/Voting%20Machine",
    featured: true,
    img: images["Voting Machine.png"],
  },
  {
    id: 6,
    title: "Metro Ticket System",
    description: "Make Metro Ticket with discount logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink:
      "https://vatsalsaxena22.github.io/myPortfolio/projects/Metro%20Ticket%20System/",
    githubLink: "https://github.com/vatsalsaxena22/myPortfolio/tree/master/projects/Metro%20Ticket%20System",
    featured: true,
    img: images["Metro Ticket.png"],
  },
  {
    id: 7,
    title: "GitHub Pages with Jekyll",
    description: "A Guide for making a Complete Website by Markdown.",
    tech: ["Markdown"],
    liveLink: "https://vatsalsaxena22.github.io/GitHub-Pages-with-Jekyll/",
    githubLink: "https://github.com/vatsalsaxena22/GitHub-Pages-with-Jekyll",
    featured: true,
    img: images["Github-Jekyll.png"],
  },
  {
    id: 8,
    title: "HTML Complete Notes",
    description: "A Complete Notes of HTML",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vatsalsaxena22.github.io/HTML/",
    githubLink: "https://github.com/vatsalsaxena22/HTML",
    featured: true,
    img: images["HTML.png"],
  },
  {
    id: 9,
    title: "CSS Complete Notes",
    description: "A Complete Notes of CSS",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vatsalsaxena22.github.io/CSS/",
    githubLink: "https://github.com/vatsalsaxena22/CSS",
    featured: true,
    img: images["CSS.png"],
  },
  {
    id: 10,
    title: "CSS Frameworks Battle",
    description: "A Battle of CSS Frameworks",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vatsalsaxena22.github.io/css-frameworks-battle/",
    githubLink: "https://github.com/vatsalsaxena22/css-frameworks-battle",
    featured: true,
    img: images["CFB.png"],
  },
  {
    id: 11,
    title: "JavaScript",
    description: "JavaScript Exercises and Projects",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vatsalsaxena22.github.io/JavaScripts/JavaScript/",
    githubLink: "https://github.com/vatsalsaxena22/JavaScripts",
    featured: true,
    img: images["JavaScript.png"],
  },
  {
    id: 12,
    title: "JS Quiz App",
    description: "JavaScript Quiz App",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink:
      "https://vatsalsaxena22.github.io/JavaScripts/JavaScript/Basics/Project/index.html",
    githubLink: "https://github.com/vatsalsaxena22/JavaScripts",
    featured: true,
    img: images["JS Quiz App.png"],
  },
];

export default projects;
