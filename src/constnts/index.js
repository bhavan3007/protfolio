import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Science",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Rascade Hackathon",
    company_name: "VIT College Chennai",

    iconBg: "#383E56",
    date: "November 2024 ",
    points: [
      "Developed a voice-assisted web application to help visually impaired users fill out forms independently.",
      "Integrated Python for speech recognition and backend processing to interpret user inputs accurately.",
      "Used HTML, CSS, and SQL to create an accessible interface with dynamic form handling and data storage.",
      "Designed with accessibility-first principles to enhance usability and independence for blind users.",
    ],
  },
  {
    title: "KI Hacks",
    company_name: "Anna University,Chennai",

    iconBg: "#E6DEDD",
    date: "January 2025",
    points: [
      "Built a voice-controlled coding assistant to help visually impaired users learn and write C programs hands-free.",
      "Enabled users to write, run, and debug C code using speech recognition powered by Python.",
      "Designed an interactive audio-guided interface to teach programming concepts step-by-step.",
      "Focused on accessibility and inclusivity to support blind students in coding education",
    ],
  },
  {
    title: "OpenHack 2025",
    company_name: "Indian Institute of Science (IISc), Bangalore",
    icon: shopify,
    iconBg: "#383E56",
    date: "February 2025",
    points: [
      "Developed an AI-powered chatbot focused on the Probability unit for 12th-grade students.",
      "Enabled students to ask and receive answers to questions related to probability concepts.",
      "Implemented using HTML, PHP, and SQL for front-end interaction, logic handling, and data management.",
      "Designed to support self-learning and improve understanding of complex math topics in an interactive way.",
    ],
  },
  {
    title: "EXPLOIT-X KPR CTF",
    company_name: "KPR Institute Of Science and Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2025",
    points: [
      "Participated in a Capture The Flag (CTF) competition focused on cybersecurity and ethical hacking challenges.",
      "Solved real-world problems involving cryptography, reverse engineering, and web vulnerabilities.",
      "Strengthened skills in logic, problem-solving, and secure coding practices.",
      "Gained hands-on experience in identifying and exploiting security flaws in simulated environments.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Way To Day",
    description:
      "WayToDay is a simple desktop application that allows users to input any date and instantly find out the corresponding day of the week. It’s a helpful tool for quick scheduling, planning events, or simply checking what day a certain date falls on.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
      
    ],
    source_code_link: "https://github.com/bhavan3007/Way-To-Day-project",
  },
  {
    name: "PathFinder-Pro",
    description:
      "This Python-based CPM and PERT Analysis Tool helps project managers visualize project schedules, identify the critical path, and estimate the probability of on-time project completion.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/bhavan3007/PathFinder-Pro",
  },
  {
    name: "Videostreaming",
    description:
      "A web-based platform that enables users to upload and stream videos online. It features a user-friendly interface for navigating video content, built using HTML, CSS, and PHP for the frontend/backend logic. MongoDB is used as the database to store user and video metadata efficiently.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name:"MongoDb",
        color:"blue-text-gradient"
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/bhavan3007/Videostreamingapplication",
  },
];

export { services, technologies, experiences, testimonials, projects };