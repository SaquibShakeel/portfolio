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
  java,
  python,
  firebase,
  opencv,
  bootstrap,
  ieee,
  kbinfospace,
  notesapp,
  petsconnectapp,
  joblisting,
  sagasuanime,
  moviedb,
  threejs,
  springboot,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
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
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "opencv",
  //   icon: opencv,
  // },
  {
    name: "springboot",
    icon: springboot,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Fullstack Development Engineer Intern",
    company_name: "KBInfospace, Virtual",
    icon: kbinfospace,
    iconBg: "#E6DEDD",
    date: "June 2023 - Aug 2022",
    points: [
      "Developed multiple static React websites for various clients, catering to their unique design and functionality requirements",
      "Led the front-end development of a dynamic website for a startup company, showcasing their products and services in an engaging manner.",
      "Utilized Apollo Client for effcient data fetching and state management.",
      "Collaborated with the backend team to define GraphQL schemas.",
      " Used SEO strategies to increase traffic and reach on websites.",
    ],
  },
  {
    title: "Front-end Development Engineer Intern",
    company_name: "Glassball, Virtual",
    icon: null,
    iconBg: "#383E56",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Developing and Maintaining a react app to edit, extract table/text from files like excel, pdf or image.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "IEEE Computer Society JMI-Student Chapter",
    icon: ieee,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies for the society.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Head of Events and Management",
    company_name: "IEEE Computer Society JMI-Student Chapter",
    icon: ieee,
    iconBg: "#E6DEDD",
    date: "July 2021 - Jan 2022",
    points: [
      "Organising and managing events for the society.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality services.",
      "Hosting multiple technical webinars.",
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
    name: "Pets Connect App",
    description: "This app is developed on the MERN stack, enables users to effortlessly track and manage their pets. Using a QR code system, the app allows users to generate a code for their pet, facilitating location tracking without GPS. When scanned, the QR code prompts the scanner to share their location with the pet owner, enhancing the user experience for seamless pet monitoring.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: petsconnectapp,
    source_code_link: ["https://github.com/SaquibShakeel/pets-connect-app"],
  },
  {
    name: "Customer Notes App",
    description:
      "The MERN app with JWT authentication and admin control is a secure and efficient application designed for employees in a company to write and manage their notes. It utilizes the MERN stack and offers user registration and authentication, role-based access control, note creation and management, an admin dashboard for monitoring and administrative tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: notesapp,
    source_code_link: ["https://github.com/SaquibShakeel/customer-notes-app"],
  },
  {
    name: "Job Listings App",
    description:
      "This app is a powerful platform built with React (TypeScript) in the frontend and Spring Boot in the backend. Leveraging MongoDB as the database, it enables users to seamlessly browse and search for job opportunities while providing employers with an efficient platform to post and manage job listings. Experience a seamless job search and recruitment process with our feature-rich app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
    ],
    image: joblisting,
    source_code_link: ["https://github.com/SaquibShakeel/job-listing-app"],
  },
  {
    name: "Sagasu Anime",
    description:
      "Web application that enables users to search anime and view its detailed information. It is a simple application with nice design that fetches the data from GraphQL api.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphQL-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sagasuanime,
    source_code_link: ["https://github.com/SaquibShakeel/SagasuAnime"],
  },
  {
    name: "MovieDB",
    description:
      "A simple web application stores and display movie's name and synopsis. A demonstration of CRUD operation using firebase realtime database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: moviedb,
    source_code_link: ["https://github.com/SaquibShakeel/MovieDB"],
  },
];

export { services, technologies, experiences, testimonials, projects };
