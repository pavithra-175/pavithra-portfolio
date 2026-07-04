import {
  ExperienceItem,
  ProjectItem,
  EducationItem,
  SkillGroup,
} from "@/types";

export const profile = {
  name: "Pavithra S S",
  title: "UI Designer",
  secondaryTitle: "Aspiring Data Analyst",
  subtitle: "B.Tech Information Technology Graduate · Community Educator",
  summary:
    "B.Tech Information Technology graduate with hands-on experience in UI design, creating intuitive and user-centered digital experiences for web and mobile applications. Skilled in Figma, wireframing, high-fidelity prototyping, responsive design, accessibility, and user-centered design principles.",
  location: "Trivandrum, Kerala",
  email: "pavithrass175@gmail.com",
  phone: "+91 72935 99719",
  linkedin: "https://linkedin.com/in/pavithra-s-s",
  github: "https://github.com/pavithra-175",
};

export const skillGroups: SkillGroup[] = [
  {
    id: "ui-design",
    label: "UI Design",
    items: ["Figma", "High-Fidelity Prototyping", "Mockup"],
  },
  {
    id: "design-process",
    label: "Design Process",
    items: [
      "Wireframing",
      "Responsive Design",
      "Accessibility",
      "User-Centered Design",
    ],
  },
  {
    id: "data-tools",
    label: "Data & Tools",
    items: ["MS Excel"],
  },
  {
    id: "soft-skills",
    label: "Soft Skills",
    items: [
      "Team Collaboration",
      "Event Coordination",
      "Communication",
      "Project Planning",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "inker-robotics",
    role: "UI Designer Intern",
    company: "Inker Robotics",
    location: "Thrissur",
    duration: "Nov 2024 – Dec 2024",
    achievements: [
      "Designed the complete user interface for robopark.in, focusing on intuitive navigation and visual consistency.",
      "Developed wireframes and high-fidelity mockups, delivering a modern and engaging user experience.",
      "Improved accessibility and responsiveness across web and mobile platforms, contributing to the overall design strategy.",
    ],
  },
  {
    id: "yip-7",
    role: "YIP Project Intern 7.0",
    company: "K-DISC",
    location: "Trivandrum",
    duration: "Aug 2024 – Oct 2024",
    achievements: [
      "Facilitated multiple educational workshops, boosting student learning outcomes and engagement levels.",
      "Coordinated local outreach initiatives to expand program visibility and community involvement.",
      "Managed project planning activities, ensuring efficient timelines and optimal resource allocation.",
    ],
  },
  {
    id: "mulearn",
    role: "UI Designer Intern",
    company: "MuLearn Foundation",
    location: "Trivandrum",
    duration: "May 2024 – Aug 2024",
    achievements: [
      "Designed responsive interfaces and high-fidelity prototypes for MuLearn web and mobile applications.",
      "Collaborated with development teams to ensure seamless UI-to-code implementation.",
      "Enhanced user experience by applying user-centered design principles and iterating based on feedback.",
    ],
  },
  {
    id: "yip-6",
    role: "YIP Project Intern 6.0",
    company: "K-DISC & GTech MuLearn",
    location: "Trivandrum",
    duration: "Jan 2024 – Mar 2024",
    achievements: [
      "Coordinated project events, ensuring seamless execution and positive participant experiences.",
      "Organized volunteer schedules and resources to optimize on-site support across diverse project needs.",
      "Managed communication between mentors and student teams, facilitating smooth project progress.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "donation-page",
    title: "Donation Page",
    year: "2024",
    description:
      "A calm and responsive donation experience designed for trust, clarity, and a smooth path from first glance to action.",
    image: "/images/donation.png",
    link: "https://www.behance.net/gallery/250870907/Donation-page",
    summary:
      "A calm, responsive donation experience designed for trust, clarity, and a smooth journey from first glance to action.",
    tags: ["UI Design", "Responsive", "Accessibility"],
    font: "Plus Jakarta Sans",
    palette: ["Violet", "White", "Black"],
  },
  {
    id: "top-100-makers",
    title: "Top 100 Makers",
    year: "2024",
    description:
      "Designed the Top 100 Makers landing page, creating an engaging and intuitive experience that communicates the program's vision, opportunities, and maker journey.",
    image: "/images/Top 100 Makers.png",
    link: "https://www.behance.net/gallery/250871447/Top-100-makers",
    summary:
      "A structured landing page introducing the program journey with bold storytelling, clear sections, and strong calls to action.",
    tags: ["Landing Page", "Visual Identity", "Prototyping"],
    font: "NDOT 47 / Space Grotesk",
    palette: ["Black", "White", "Slate Gray"],
  },
  {
    id: "robopark",
    title: "Robopark",
    year: "2024",
    description:
      "Designed the user interface for RoboPark, showcasing its vision, ecosystem, and collaboration opportunities through a clear, structured design approach.",
    image: "/images/robopark home.png",
    link: "https://www.behance.net/gallery/250871853/Robopark",
    summary:
      "A clean, information-first website presenting RoboPark’s vision, ecosystem, and collaboration opportunities with clarity and intent.",
    tags: ["Web UI", "Content Hierarchy", "Strategy"],
    font: "Clash Display / Poppins",
    palette: ["Red", "Black", "White"],
  },
];

export const education: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech in Information Technology",
    institution: "University College of Engineering, Kariavattom",
    duration: "2022 – 2026",
  },
  {
    id: "hse",
    degree: "Higher Secondary Education (Bio-Maths Stream)",
    institution: "Govt Model Girls HSS, Pattom",
    duration: "2020 – 2022",
  },
  {
    id: "high-school",
    degree: "High School Education",
    institution: "Lekshmi Vilasom High School, Pothencode",
    duration: "2017 – 2020",
  },
];

export const designPhilosophy =
  "Good UI disappears — it should feel obvious in hindsight. I design by starting from the user's task, not the interface, and I iterate through wireframes and high-fidelity prototypes until the flow feels inevitable rather than clever.";

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
