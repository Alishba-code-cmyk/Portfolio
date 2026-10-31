/**
 * Single source of truth for all site content.
 * Edit values here to update the portfolio — components read from this file.
 */

export const profile = {
  name: "Alishba",
  firstName: "Alishba",
  initials: "A",
  // Rotating words shown under the name in the hero.
  roles: [
    "Full-Stack web developer",
    ""
    ],
  headline: "Building ideas into real-world applications.",
  subheadline:
    "I'm an MCA student and developer focused on full-stack web development, Java, and creating useful digital experiences through clean, practical code.",
  location: "India",
  currentCompany: "",
  currentRole: "",
  photo: "/alishba.jpg",
  resume: "/updated resume.pdf",
} as const;

export const contact = {
  email: "itsalishba00@gmail.com",
  phone: "+91 8303392903",
  phoneHref: "+91 8303392903",
  linkedin: "https://www.linkedin.com/in/alishba-ainul-435348365/",
  github: "https://github.com/Alishba-code-cmyk",
} as const;

export const stats = [
  { value: "", suffix: "/10", label: "MCA CGPA" },
  { value: "4", suffix: "+", label: "Full stack Projects" },
  { value: "10", suffix: "+", label: "Tools & platforms" },
  { value: "3", suffix: "", label: "Certifications" },
] as const;

export const about = {
  paragraphs: [
    "Hi, I'm Alishba. I am an MCA student and aspiring software developer passionate about building practical, user-focused applications. With a background in web development, Java, and full-stack technologies, I enjoy turning ideas into functional digital experiences.My experience as an Assistant Manager has strengthened my skills in teamwork, coordination, and problem-solving—qualities I bring to every development project.I'm continuously improving my technical skills, exploring new technologies, and building projects that solve real-world problems.",
  ],
  focus: [
  "Full-Stack Web Development",
  "AI-Powered Applications",
  "Backend Engineering & REST APIs",
  "Data Structures & Problem Solving",
],
} as const;

export type SkillGroup = {
  title: string;
  accent: "cyan" | "violet" | "blue";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & LLM",
    accent: "violet",
    skills: [
      "Claude",
      "Prompt Engineering",
      "LangChain",
      "GenAI Tools",
      "Machine Learning",
      "AI Agents & Panels",
    ],
  },
  {
    title: "Data & Analytics",
    accent: "cyan",
    skills: [
      "Python",
      "SQL",
      "Advanced Excel",
      "Google Sheets",
      "Power BI",
    ],
  },
  {
    title: "Languages & Frontend",
    accent: "blue",
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Databases",
    accent: "cyan",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "Authentication",
      "Database Design",
    ],
  },
  {
    title: "Tools & Engineering",
    accent: "violet",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Render",
      "DSA",
      "OOP",
    ],
  },

];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  featured?: boolean;
  category: string;
};

export const projects: Project[] = [
  {title: "Wanderlust — Rental Listing Platform",
    tagline: "Discover, create, and manage property listings",
    description:
      "A full-stack rental listing application where users can explore properties, create listings, authenticate accounts, and post reviews. Includes listing management, image uploads, and location-based map integration.",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "Cloudinary",
      "Leaflet",
    ],
    category: "Full Stack",
    featured: true,
  },
  {
    title: "HealthWise AI",
    tagline: "AI-assisted health information and discovery",
    description:
      "A health-focused web application exploring AI-assisted health information and nearby hospital discovery using postal codes. Designed with a clear disclaimer to encourage responsible use of AI-generated health information.",
    tags: ["Next.js", "React", "AI Integration", "APIs"],
    category: "AI",
    featured: true,
  },
  {
     title: "Converza — Real-Time Meeting Platform",
    tagline: "Seamless video meetings and real-time communication",
    description:
      "A full-stack video conferencing platform designed to support meeting rooms and real-time communication. Built to explore real-time event handling, meeting workflows, and scalable application architecture.",
    tags: ["React","webRTC", "Node.js", "Express", "Socket.IO", "MongoDB"],
    category: "Full Stack",
    featured: true,
   
  },
  {
     title: "Zerodha — Trading Dashboard",
    tagline: "Market insights through a clean trading interface",
    description:
      "A trading-dashboard project inspired by modern investment platforms, focused on presenting market information, portfolio holdings, and performance data through an intuitive interface.",
    tags: ["React", "JavaScript", "Charts", "REST APIs"],
    category: "Frontend",
    featured: true,
  },
  {
    title: "Personal Developer Portfolio",
    tagline: "A central hub for my work and technical journey",
    description:
      "A responsive portfolio showcasing my technical skills, projects, education, and professional experience, with a focus on clean design, accessible navigation, and a polished user experience.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    category: "Frontend",
    featured: true,
  },
];

export type EducationItem = {
  degree: string;
  field: string;
  institute: string;
  period: string;
  score: string;
};

export const education: EducationItem[] = [
  {
    degree: "M.C.A.",
    field: "Master of Computer Applications",
    institute: "Lovely Professional University",
    period: "2026 — 2028",
    score: "CGPA ",
  },
  {
    degree: "B.C.A.",
    field: "Bachelor of Computer Applications",
    institute: "Mahatma gandhi kashi vidyapith",
    period: "2022 — 2025",
    score: "CGPA 7",
  },
];
export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
 {
  company: "Saaz Electronic Jacquards",
  role: "Junior Executive Manager",
  period: "2025-2026",
  current: false,
  summary:
    "Supported day-to-day business operations, team coordination, and workflow management while developing practical leadership and problem-solving skills.",
  highlights: [
    "Coordinated daily operations and helped ensure tasks were completed efficiently.",
    "Worked with team members to manage responsibilities and resolve operational issues.",
    "Supported planning, task allocation, and communication across day-to-day activities.",
    "Developed organizational, decision-making, and teamwork skills while balancing professional responsibilities.",
  ],
  stack: [
    "Team Coordination",
    "Operations Management",
    "Communication",
    "Problem Solving",
    "Task Management",
  ],
}
];


export type Certification = {
  title: string;
  issuer: string;
  date: string;
};

export const certifications: Certification[] = [
  { title: "web developement", issuer: "Apna college", date: "nov 2025" },
  { title: "Data structure in java", issuer: "Apna college", date: "Mar 2026" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
