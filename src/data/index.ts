import {
  Github as GitHub,
  Linkedin,
  Mail,
  BookOpen,
  Code,
  Globe,
  Server,
  TwitterIcon,
} from "lucide-react";
import { images } from "../assets/images";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const personalInfo = {
  name: "Olorunsogo Olubowale Banwo",
  role: "Software Developer & Developer Advocate",
  specialization: "Web3 Technologies",
  summary:
    "Innovative Software Developer and Developer Advocate with a strong foundation in Web3 technologies, including JavaScript, TypeScript, Solidity, Ethers.js, Foundry, and Hardhat. Experienced in building decentralized applications (dApps) using modern frameworks like React.js, Next.js, React Native, Ethers.js, Wagmi, and GraphQL. Passionate about empowering developer communities through technical content creation, workshops, and open-source contributions.",
  phone: "+234 9169501662",
  email: "sogobanwo@gmail.com",
  location: "Lagos, Nigeria",
  image: images.profile,
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/olorunsogo-banwo",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/sogobanwo",
      icon: GitHub,
    },
    {
      name: "Email",
      url: "mailto:sogobanwo@gmail.com",
      icon: Mail,
    },
    {
      name: "Twitter / X",
      url: "https://x.com/OlorunsogoBanwo",
      icon: TwitterIcon,
    },
  ],
};

export const experiences = [
  {
    title: "Blockchain Developer Advocate",
    company: "HostIt",
    location: "Lagos, Nigeria",
    date: "Jun 2024 - Present",
    description: [
      "Led a team of developers in designing and implementing a blockchain-based event ticketing platform.",
      "Facilitated 5 events and successfully onboarded 2,000+ users to the platform.",
      "Created technical documentation, tutorials, and educational content to support the developer community.",
      "Conducted workshops and training sessions on blockchain technology and Web3 development.",
    ],
  },
  {
    title: "Smart Contract Developer & Technical Mentor",
    company: "Web3Bridge",
    location: "Lagos, Nigeria",
    date: "Jan 2024 - Dec 2024",
    description: [
      "Developed secure and efficient smart contracts for various blockchain applications.",
      "Mentored and guided junior developers in Web3 technologies and best practices.",
      "Contributed to open-source projects and community initiatives.",
      "Collaborated with cross-functional teams to deliver high-quality blockchain solutions.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Voluntrr-Services",
    location: "Birmingham, UK",
    date: "May 2023 - Dec 2023",
    description: [
      "Designed and developed a recruitment management solution using React.js and TypeScript.",
      "Implemented responsive and user-friendly interfaces for improved user experience.",
      "Collaborated with the backend team to integrate APIs and ensure seamless functionality.",
      "Participated in code reviews and quality assurance processes.",
    ],
  },
  {
    title: "IT & Operations Relations Specialist",
    company: "First Metro Infrastructure Limited",
    location: "Lagos, Nigeria",
    date: "Feb 2023 - Dec 2023",
    description: [
      "Managed IT infrastructure and systems to ensure optimal performance.",
      "Provided technical support and troubleshooting for company operations.",
      "Implemented IT policies and procedures for improved efficiency.",
      "Collaborated with various departments to meet operational objectives.",
    ],
  },
  {
    title: "Software Development Intern and Mentor",
    company: "TIIDELab",
    location: "Lagos, Nigeria",
    date: "Jun 2022 - Dec 2022",
    description: [
      "Developed web applications using HTML, CSS, JavaScript, and React.js.",
      "Mentored junior interns on software development best practices.",
      "Participated in team projects and collaborative coding sessions.",
      "Contributed to the development of educational content for training programs.",
    ],
  },
];

export const projects = [
  {
    name: "HostIt Events",
    description:
      "HostIt simplifies ticketing and verification, so you can focus on creating experiences. Let’s build something amazing",
    tags: ["Solidity", "Foundry", "Next.js", "Wagmi", "GraphQL", "Lisk"],
    image:
      "https://res.cloudinary.com/dnohqlmjc/image/upload/v1749219516/Screenshot_2025-06-06_at_15.15.00_brxzzt.png",
    source_code_link: "https://github.com/sogobanwo/HostIT-official-website",
    live_demo_link: "https://www.hostit.events/",
  },
  {
    name: "BADGER",
    description:
      "Badger is a no-code platform designed to simplify the deployment and interaction with smart contracts on the EVM compatible blockchains.",
    tags: [
      "Solidity",
      "Next.js",
      "Ethers.js",
      "Smart Contracts",
      "Web3",
      "CoreDao",
    ],
    image:
      "https://res.cloudinary.com/dnohqlmjc/image/upload/v1749219516/Screenshot_2025-06-06_at_15.06.54_opay8n.png",
    source_code_link: "https://github.com/Badger-Protocol/Badger-FE",
    live_demo_link: "https://badger-tq1p.onrender.com/",
  },
  {
    name: "OFAC-Compliance-checker",
    description:
      "The OFAC-Compliance-Checker is a product integrated with the Self Protocol, designed to simplify KYC processes for Web3 protocols and developers.",
    tags: [
      "Solidity",
      "Next.js",
      "Ethers.js",
      "Smart Contracts",
      "Web3",
      "CELO",
      "Self Protocol",
    ],
    image:
      "https://res.cloudinary.com/dnohqlmjc/image/upload/v1749219515/Screenshot_2025-06-06_at_15.16.45_qzyufj.png",
    source_code_link: "https://github.com/sogobanwo/OFAC-Compliance",
    live_demo_link:
      "https://warpcast.com/~/mini-apps/launch?domain=ofac-compliance.vercel.app",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    icon: Code,
    items: ["JavaScript", "TypeScript", "Solidity", "Rust", "Cairo"],
  },
  {
    category: "Web3 Technologies",
    icon: Globe,
    items: [
      "Ethers.js",
      "Wagmi",
      "GraphQL",
      "Apollo Client",
      "Foundry",
      "Hardhat",
    ],
  },
  {
    category: "Frontend Technologies",
    icon: BookOpen,
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend Technologies",
    icon: Server,
    items: ["Node.js", "Express.js", "RESTful APIs", "MongoDB"],
  },
  {
    category: "Developer Tools",
    icon: Code,
    items: ["Git", "GitHub", "Bitbucket", "Trello", "Jira", "ClickUp"],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering in Mechanical Engineering",
    institution: "Lagos State University",
    date: "June 2022",
    grade: "Second Class Upper Division, 4.22/5",
  },
  {
    degree: "NanoDegree in Full Stack Development",
    institution: "Udacity",
    date: "September 2022",
    grade: "",
  },
  {
    degree: "Certificate Of Proficiency (Frontend Development)",
    institution: "TIIDELab (ITF-NECA)",
    date: "December 2022",
    grade: "",
  },
  {
    degree: "Profiency in Blockchain Development",
    institution: "Web3Bridge",
    date: "May 2024",
    grade: "",
  },
  {
    degree: "BaseCamp 9 Graduate",
    institution: "Starknet Foundation",
    date: "June 2024",
    grade: "",
  },
];
