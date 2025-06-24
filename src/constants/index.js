import project1 from "../assets/projects/projeect 1.png";
import project2 from "../assets/projects/Project 2.png";
import project3 from "../assets/projects/project 3.png";
import bitsnip from "../assets/projects/bitsnip.png";

export const HERO_CONTENT = `I'm a frontend developer turning ideas into sleek, interactive web experiences. With a passion for clean code and bold design, I build fast, responsive interfaces that leave a lasting impact. Let's create something remarkable together..`;

export const ABOUT_TEXT = `I'm a frontend developer skilled in HTML5, CSS, JavaScript, React, and Tailwind CSS. I love crafting user-friendly, high-performance interfaces and thrive in collaborative, problem-solving environments. Outside of coding, I explore tech trends and stay creatively active.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

const EXPERIENCES = [
  {
    experience: "null",
  },
];

export const PROJECTS = [
  {
    title: "bitSnip — Simplify, Share & Track URLs in Seconds",
    image: bitsnip,
    description:
      "bitSnip is a sleek URL shortener that lets you trim long links, generate QR codes, and track link analytics — all in one place. Built with React and Supabase, it's fast, responsive, and user-friendly.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "React JS",
      "Supabase",
      "Shadcn UI",
      "React Router",
      "Context API",
    ],
    link: "https://bitsnip.vercel.app/",
  },
  {
    title: "Blog-app",
    image: project3,
    description:
      "A sleek and intuitive blog app designed for effortless content creation and sharing. Write, edit, and publish posts with ease while enjoying a clean, user-friendly interface.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "React JS",
      "Appwrite",
      "React Router",
      "Redux Toolkit",
    ],
    link: "https://bloga-app.netlify.app",
  },
  {
    title: "Manage ToDo's Website",
    image: project1,
    description:
      "A managed todo website serve tool for individuals to create,edit, track, and complete tasks in a structured manner. ",
    technologies: ["HTML", "Tailwind CSS", "React JS"],
    link: "https://manaage-todos.netlify.app",
  },
  // {
  //   title: "Tic Tac Toe Game",
  //   image: project2,
  //   description:
  //     "Tic Tac Toe is a classic two-player game typically played on a 3x3 grid. The game is straightforward yet engaging, requiring players to strategically place their marks.",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   link: "https://tictactoe232fs.netlify.app",
  // },
];

export const CONTACT = {
  address: "Mumbai,Maharashtra",
  phoneNo: "+91-9004000953",
  email: "kashidanirudha@gmail.com",
};
