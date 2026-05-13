// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";

import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import reduxLogo from "./assets/tech_logo/redux.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import firebaseLogo from "./assets/tech_logo/firebase.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import Vitelogo from "./assets/tech_logo/Vitelogo.png";

import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";



// Education Section Logo's

import pratapcollagelogo from "./assets/education_logo/pratapcollage.jpg";
import jayyogeshlogo from "./assets/education_logo/jayyogesh.png";

// Project Section Logo's
import techspacelogo from "./assets/workLogo/techSpacelogo.png";
import foodielogo from "./assets/workLogo/foodielogo.png";
import colorschemalogo from "./assets/workLogo/colorschemalogo.png";
import todologo from "./assets/workLogo/todologo.png";
import responsivesitelogo from "./assets/workLogo/responsivesitelogo.png";

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
    title: "Languages",
    skills: [{ name: "JavaScript", logo: javascriptLogo }],
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
      { name: "Vite", logo: Vitelogo },
      { name: "Firebase", logo: firebaseLogo },
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
    title: "TechSpace — Tech E-Commerce Web App",
    description:
      "A modern and fully responsive Tech E-Commerce Web Application built using React, Firebase, and Tailwind CSS. This project delivers a smooth shopping experience where users can explore products, manage their cart, and interact with a dynamic, real-time interface.",
    image: techspacelogo,
    tags: [
      "React (Vite)",
      "React Router",
      "Firebase Authentication & Firestore",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
    github: "https://github.com/pavanpatil06459/Tech-Ecommerce",
    webapp: "https://tech-ecommerce-51939.web.app/",
  },
  {
    id: 1,
    title: "Food Delivery Cart Web App",
    description:
      "A responsive food ordering web app built with HTML, CSS, and JavaScript. Users can browse items, manage cart, and see real-time price updates.",
    image: foodielogo,
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "DOM Manipulation",
      "Event Handling",
      "Responsive Design",
    ],
    github: "https://github.com/pavanpatil06459/food-delivery-cart",
    webapp: "https://food-cart-app-js.netlify.app/",
  },
  {
    id: 2,
    title: "Color Scheme Switcher",
    description:
      "A simple and interactive web app that lets users change the background color with a single click. Built using HTML, CSS, and JavaScript, it demonstrates DOM manipulation, event handling, and smooth UI transitions for a responsive user experience.",
    image: colorschemalogo,
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "DOM Manipulation",
      "Event Handling",
      "Dynamic UI Updates",
      "Responsive Design",
    ],
    github: "https://github.com/pavanpatil06459/food-delivery-cart",
    webapp: "https://pavanpatil06459.github.io/color-scheme-switcher/",
  },

  {
    id: 3,
    title: "To-Do List Web App",
    description:
      "A distraction-free task manager built with vanilla JS — no frameworks, just clean logic and smooth UX.",
    image: todologo,
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "DOM Manipulation",
      "Event Handling",
      "Local Storage",
      "Responsive Design",
    ],
    github: "https://github.com/pavanpatil06459/Todo-web-app",
    webapp: "https://todo-web-app-two-pi.vercel.app/",
  },

  {
    id: 4,
    title: "Responsive Navbar",
    description:
      "A responsive navigation bar built with HTML, CSS, and JavaScript. It adapts seamlessly to different screen sizes, providing an intuitive user experience across devices.",
    image: responsivesitelogo,
    tags: [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript (ES6+)",
      "Responsive Design",
      "Accessibility (ARIA)",
    ],
    github: "https://github.com/pavanpatil06459/Responsive-Nevigation-Bar",
    webapp: "https://responsive-nevigation-bar.vercel.app/",
  },
];
