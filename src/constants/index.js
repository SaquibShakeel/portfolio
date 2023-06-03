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
    sagasuanime,
    moviedb,
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
      title: "Frontend Developer",
      icon: web,
    },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    {
      title: "Backend Developer",
      icon: backend,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
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
    {
      name: "opencv",
      icon: opencv,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
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
      title: "Fullstack Development Engineer Intern",
      company_name: "KBInfospace, Virtual",
      icon: kbinfospace,
      iconBg: "#E6DEDD",
      date: "April 2022 - June 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Developed multiplr end-to-end websites for clients and implemnting responsive design and ensuring cross-browser compatibility.",
        "Used SEO strategies to increase traffic and reach on websites.",
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
      name: "Notes App",
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
      source_code_link: "https://github.com/SaquibShakeel/notes-app-frontend",
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
      source_code_link: "https://github.com/SaquibShakeel/SagasuAnime",
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
      source_code_link: "https://github.com/SaquibShakeel/MovieDB",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };