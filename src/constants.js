// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";

import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import reduxLogo from "./assets/tech_logo/redux.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";

import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";

import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";

import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

import mongoose from "./assets/tech_logo/mongoose.png";

// Education Section Logo's

import pratapcollagelogo from "./assets/education_logo/pratapcollage.jpg";
import jayyogeshlogo from "./assets/education_logo/jayyogesh.png";

// Project Section Logo's
import foodplacelogo from "./assets/work_logo/foodplace.png";
import techiecartlogo from "./assets/work_logo/techiecart.png";
import techspacelogo from "./assets/work_logo/techspace.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Mongoose", logo: mongoose },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: pratapcollagelogo,
    school: " Pratap College, Amalner",
    date: "August 2023 - April 2025",
    grade: "7.40 CGPA",
    desc: "I have completed my Bachelor’s degree (BCA) in Computer Applications. During my BCA program, I built a strong foundation in programming, software development, and computer science concepts. I studied courses such as Programming in C & Python, Data Structures, Database Management Systems, Web Development (HTML, CSS, JavaScript, React), and Software Testing. During this time, I developed a strong interest in web development. My BCA journey has been instrumental in enhancing my technical abilities and preparing me for a career in software development and web technologies.",
    degree: "Bachelor of Computer Applications - BCA",
  },
  {
    id: 1,
    img: jayyogeshlogo,
    school: "Jay Yogeshwar college Amalner",
    date: "Sept 2018 - Aug 2021",
    grade: "71.67%",
    desc: "I completed my 11th–12th education in the Science stream (Physics, Chemistry, Mathematics). During this period, I developed strong analytical and problem-solving skills and built a solid foundation in mathematics and logical thinking, which later supported my interest in computer applications and technology.",
    degree: "11th-12th Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "The Food Place Restaurant Landing Page",
    description:
      "A responsive restaurant website featuring a modern hero section, special menu filtering, and visually appealing food cards designed to enhance user experience.",
    image: foodplacelogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/pavanpatil06459/Food-Place",
    webapp: "https://pavanpatil06459.github.io/Food-Place/",
  },
  {
    id: 1,
    title: "TechieCart Modern E-Commerce Platform",
    description:
      "TechieCart is a responsive e-commerce website with a modern interface for browsing technology products. The project is currently under active development, focusing on improving functionality, responsiveness, and overall user experience.",
    image: techiecartlogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/pavanpatil06459/ProjectDay-techEcommerce",
    webapp: "https://pavanpatil06459.github.io/ProjectDay-techEcommerce/",
  },
  {
    id: 2,
    title: "TechSpace E-Commerce Website for Tech Gadgets",
    description:
      "Users can securely register and log in, with password validation during signup. Visitors can browse products with images, descriptions, and prices, while only logged-in users can add items to their cart. Firebase ensures real-time updates for carts and user data. The site offers easy navigation with category filters and intuitive, user-friendly forms with validations and feedback.",
    image: techspacelogo,
    tags: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "Firebase (Authentication, Firestore, Realtime Database, Hosting",
      "Github",
    ],
    github: "https://github.com/pavanpatil06459/Tech-Ecommerce",
    webapp: "https://tech-ecommerce-51939.web.app/",
  },
];
