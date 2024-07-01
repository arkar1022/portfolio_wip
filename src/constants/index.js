import { m } from "framer-motion";
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  YIUSAT,
  Knoectify,
  JCUS,
  nextjs,
  java,
  Cplus,
  python,
  JCUSCom,
  tensorflow,
  connectJCU,
  connectJCUBackend,
  Techies,
  Brainsharp,
  NoteApp,
  Employee,
  Sentorhub,
  OneService,
  Cert1,
  Cert2,
  Cert3,
  Cert4,
  Cert5,
  firebase,
  django,
  chakra,
  restapi,
  mysql,
  nginx,
  android, 
  vultr,
  MyanService,
  ace,
  Portfolio,
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

const certificates = [
  {
    name: "HND in Computing",
    image: Cert5
  },
  {
    name: "Intermediate Python for Data Science",
    image: Cert3
  },
  {
    name: "Data Analysis and Visualization",
    image: Cert4
  },
  {
    name: "DevOps Essentials",
    image: Cert1
  },
  {
    name: "Penetrating Testing Essential",
    image: Cert2
  },
]

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
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C++",
    icon: Cplus,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "Tensorflow",
    icon: tensorflow
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Konectify",
    icon: Knoectify,
    iconBg: "#3228dc",
    date: "Apr 2023 - Present",
    points: [
      "Developed highly responsive and performant web applications using React.js and Next.js, ensuring compatibility across various devices and screen sizes.",
      "Designed and implemented intuitive user interfaces with MUI, Chakra UI components,and Framer Motion, adhering to design specifications for consistency and usability.",
      "Integrate RESTful APIs endpoints into frontend applications to fetch and manipulate data, ensuring seamless communication between the frontend and backend systems.",
      "Collaborated closely with cross-functional teams, including designers, backend developers, and product managers, to deliver high-quality features and enhancements.",
      "Conducted thorough testing using unit tests, integration tests, and end-to-end tests to ensure code quality, functionality, and performance.",
      "Utilized version control systems such as Git to manage and track changes throughout the development process, facilitating collaboration and code review."
    ],
  },
  {
    title: "IT Peer Tutor",
    company_name: "James Cook University Singapore",
    icon: JCUS,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Guided students through complex software development and machine learning concepts, helping them apply theoretical knowledge to practical problems.",
      "Debugged code and resolved errors for students using technologies such as JavaScript, React, Node.js, Python, Java and C++.",
      "Provided in-depth feedback on coding assignments and projects, promoting best practices in software development, code optimization, and algorithm efficiency.",
      "Assisted students in understanding and implementing machine learning methods and algorithms, including clustering, linear regression, decision trees, neural networks, and deep learning techniques.",
      "Leveraged tools such as Git, Docker, Kaggle, and Jupyter Notebooks to teach version control, containerization, and interactive computing.",
      
    ],
  },
  {
    title: "Deputy Head (Marketing)",
    company_name: "JCUS 32nd Convergnce Conference Committee",
    icon: JCUSCom,
    iconBg: "#000",
    date: "May 2024 - Present",
    points: [
      "Managed social media platforms and Committee’s website to increase audience engagement.",
      "Created compelling content for various digital channels, including social media posts, and blogs.",
      "Provided leadership and guidance to team members in marketing, social media management, and promotion strategies.",
      "Collaborated with cross-functional teams.",
    ],
  },
  {
    title: "Organizer",
    company_name: "YIUSAT",
    icon: YIUSAT,
    iconBg: "#fff",
    date: "Jan 2019 - Jan 2022",
    points: [
      "Organized and coordinated various university events and student activities.",
      "Designed event posters and social media posts using graphic design tools: Photoshop, Illustrator.",
      "Provided IT support during events and for team activities.",
      "Collaborated with team members to ensure smooth event operations and participant engagement.",
    ],
  },
];


const projects = [
  {
    name: "ConnectJCU (Frontend)",
    description:
      "A dynamic community platform designed for JCU students, allowing them to write blogs, post comments, download resources, and ask questions. The frontend is crafted with modern web technologies to provide an intuitive and seamless user experience.",
    icons: [nextjs, css, javascript, docker, chakra],
    image: connectJCU,
    source_code_link: "https://github.com/arkar1022/connectjcu-client",
  },
  {
    name: "ConnectJCU (Backend)",
    description:
      "Backend API of ConnectJCU implemented with Django Rest Framework, utilizing AuthToken for secure token-based authentication. Containerized with Docker and served with Nginx for efficient traffic management and enhanced performance.",
    icons: [python, docker, django, nginx, restapi, mysql, vultr],
    image: connectJCUBackend,
    source_code_link: "https://github.com/arkar1022/connectjcu-server",
  },
  {
    name: "Brain Sharp",
    description:
      "Brain Sharp is a quiz app developed with Java, enabling users to answer quizzes and compete for the highest scores on the leaderboard. Users can review their quizzes, edit their profiles, and access their data from any device via their accounts.",
    icons: [java,firebase, android],
    image: Brainsharp,
    source_code_link: "https://github.com/arkar1022/BrainSharp-Quiz-APP",
  },
  {
    name: "MemoPad",
    description:
      "MemoPad is a note-taking app developed with Java, allowing users to create and edit their notes, accessible from any device by logging into their account. The app leverages Firebase Authentication for secure login and Firestore for storage",
    icons: [java,firebase, android],
    image: NoteApp,
    source_code_link: "https://github.com/arkar1022/MemoPad-Note-APP",
  },
  {
    name: "Employee Management",
    description: "Console Employee Management System, developed using C++, allows users to log in as either an employee or a manager. Loading and releasing employee data from files, searching for employees, and managing employee can be done.",
    icons: [Cplus],
    image: Employee,
    source_code_link: "https://github.com/arkar1022/employee-management-system",
  },
  {
    name: "Sentor HUB (Figma)",
    description:"As part of the Design Thinking 1 course at JCU, Sentor HUB was conceptualized and designed in Figma. It aims to streamline user interactions through intuitive UI/UX principles, focusing on ease of navigation and visual appeal.",
    icons: [figma],
    image: Sentorhub,
    source_code_link: "https://www.figma.com/design/e40fEqPWhGlxfA43XmUADU/Mentorship---Design-Thinking?node-id=0-1&t=ouxijA3kVRdMDTYX-1",
  },
  {
    name: "OneService (Figma)",
    description:"Designed during the Design Thinking 2, Oneservice in Figma represents an enhanced iteration of an existing application. This project focuses on refining user interactions and interface elements to improve usability and functionality.",
    icons: [figma],
    image: OneService,
    source_code_link: "https://www.figma.com/design/qRGrOdMYwjLsXRWEqTva4d/DT-2?node-id=270-254&t=RNS6DrBxAKsL5zNf-1",
  },
  {
    name: "MyanService (Figma)",
    description:"A community well-being app prototype, designed during Design Sprint 2. It features enhanced user interactions and interface elements with actionable frames and components, showcasing expertise in prototyping and UI/UX design principles.",
    icons: [figma],
    image: MyanService,
    source_code_link: "https://www.figma.com/design/9JNdLMov4X3QmPJeWqIsRO/Design-Sprint-SP53-GP-J?node-id=1-2&t=xhw0QExLYoN4PLZh-1",
  },
  {
    name: "Techies (2021)",
    description:
      "A Simple landing webiste for Techies Learning & Training Center where students can login and enroll the courses but this platfrom cannot be used as learning portal for students. This site is developed using React and pure CSS",
    icons: [reactjs, css, html],
    image: Techies,
    source_code_link: "https://github.com/arkar1022/Techies",
  },
  {
    name: "Modern Portfolio",
    description:
      "A sleek and professional portfolio website showcasing skills and works. This site features a modern and visually appealing design, featuring a modern design developed using Next.js, AceternityUI components, and Tailwind CSS for a highly responsive.",
    icons: [nextjs, tailwind, html, ace, threejs ],
    image: Portfolio,
    source_code_link: "https://github.com/arkar1022/portfolio-acenternity-ui",
  },
];

export {technologies, experiences, projects, certificates };
