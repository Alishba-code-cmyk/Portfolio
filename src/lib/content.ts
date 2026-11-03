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
    "Software Developer",
    "Problem Solver",
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
  { value: "2", suffix: "", label: "Certifications" },
] as const;


export const about = {
  paragraphs: [
    "I'm Alishba, an MCA student and aspiring software developer with a strong interest in building practical and user-focused applications.",

    "My development journey revolves around full-stack web development, Java, and backend engineering. I enjoy working across the technology stack, from designing intuitive interfaces to developing APIs and managing databases.",

    "Through projects like Wanderlust, Converza, and HealthWise AI, I've been exploring real-world application development, problem-solving, and modern software technologies.",

    "Before pursuing software development, I worked as an Assistant Manager, where I developed valuable skills in teamwork, coordination, communication, and responsibility. I'm continuously learning and working towards becoming a skilled software engineer."
  ],

  focus: [
    "Full-Stack Development",
    "Backend Engineering",
    "Problem Solving & DSA",
    "Building Real-World Applications",
  ],
} as const;


export type SkillGroup = {
  title: string;
  accent: "cyan" | "violet" | "blue";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
 {
    title: "Programming Languages",
    accent: "blue",
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "C",
      "C++",
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
    accent: "blue",
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
    accent: "blue",
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
  liveLink?: string;
githubLink?: string;
};

export const projects: Project[] = [
  
  {
    title: "HealthWise AI",
    tagline: "AI-assisted health information and discovery",
    description:
      "A health-focused web application exploring AI-assisted health information and nearby hospital discovery using postal codes. Designed with a clear disclaimer to encourage responsible use of AI-generated health information.",
    tags: ["Next.js", "React", "AI Integration", "APIs"],
    category: "AI",
    featured: true,
    liveLink: "https://healt-wise.vercel.app/",
    githubLink:"https://github.com/Alishba-code-cmyk/Healthwise",
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
    liveLink: "https://alishba-portfolio-roan.vercel.app/",
    githubLink:"https://github.com/Alishba-code-cmyk/Portfolio",
  },
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
    liveLink: "https://wanderlust-mom6.onrender.com/listings",
    githubLink: "https://github.com/Alishba-code-cmyk/Wanderlust"
  },
  {
     title: "Converza — Real-Time Meeting Platform",
    tagline: "Seamless video meetings and real-time communication",
    description:
      "A full-stack video conferencing platform designed to support meeting rooms and real-time communication. Built to explore real-time event handling, meeting workflows, and scalable application architecture.",
    tags: ["React","webRTC", "Node.js", "Express", "Socket.IO", "MongoDB"],
    category: "Full Stack",
    featured: true,
   githubLink: "https://github.com/Alishba-code-cmyk/zoom",
  },
  {
     title: "Zerodha — Trading Dashboard",
    tagline: "Market insights through a clean trading interface",
    description:
      "A trading-dashboard project inspired by modern investment platforms, focused on presenting market information, portfolio holdings, and performance data through an intuitive interface.",
    tags: ["React", "JavaScript", "Charts", "REST APIs"],
    category: "Frontend",
    featured: true,
    githubLink:"https://github.com/Alishba-code-cmyk/Zerodha",
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
    score: "Currently Pursuing",
  },
  {
    degree: "B.C.A.",
    field: "Bachelor of Computer Applications",
    institute: "Mahatma gandhi kashi vidyapith",
    period: "2022 — 2025",
    score: "CGPA 7.0",
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
  role: "Assistant Manager",
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
