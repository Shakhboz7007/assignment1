const profile = {
  name: "Shakhboz Soliev",
  title: "Computer Programming Student",
  location: "Barrie, ON",
  email: "shakhboz@example.com",
  skills: ["JavaScript", "Node.js", "Express", "HTML", "CSS"],
};

const about = {
  summary:
    "I am a Computer Programming student building projects with JavaScript and Node.js. I enjoy learning backend development and creating APIs.",
  interests: ["Web Development", "APIs", "Databases"],
};

const projects = [
  {
    id: 1,
    name: "Portfolio API",
    description: "An Express API that serves my portfolio data.",
    technologies: ["Node.js", "Express"],
  },
  {
    id: 2,
    name: "Virtual Pet Generator",
    description: "A JavaScript project that generates random pet profiles.",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

// сюда будут добавляться контакты через POST /api/contact
const contacts = [];

module.exports = { profile, about, projects, contacts };
