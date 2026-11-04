/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ============================================================================
 * Edit this file to easily update your personal info, links, skills,
 * education, and projects!
 */

export const personalInfo = {
  name: "S. Hazm Marzooq",
  role: "Software Developer & Computer Science Student",
  headline: "Computer Science Student | Data Science | Web Development | Cybersecurity",
  shortIntro: "I'm a Computer Science student interested in building practical software, working with data, and exploring cybersecurity.",
  careerObjective: "My goal is to become a well-rounded software professional by combining software development, data science, and cybersecurity.",
  email: "hazmmarzooq0007@gmail.com",
  phone: "9025623452",
  location: "Nagapattinam, Tamil Nadu, India",
  
  // Replace these placeholders with your actual social profile URLs
  social: {
    github: "https://github.com/hazmmarzooq", // <-- Edit your GitHub link here
    linkedin: "https://linkedin.com/in/hazmmarzooq", // <-- Edit your LinkedIn link here
    email: "mailto:hazmmarzooq0007@gmail.com",
    phone: "tel:9025623452"
  },
  
  // Path to your resume in the public folder
  resumeUrl: "/resume.pdf",
  
  // Profile picture
  profileImage: "/profile.jpg"
};

export const aboutData = {
  paragraphs: [
    "I am a Computer Science and Engineering student with a strong passion for exploring the intersections of software development, data science, and cybersecurity.",
    "I am currently focused on improving my core programming fundamentals and software engineering skills through hands-on practice, academic coursework, and real-world problem-solving.",
    "I love learning new technologies, experimenting with algorithms and data-driven applications, and turning ideas into clean, functional projects."
  ],
  highlights: [
    { label: "Degree", value: "B.E. Computer Science" },
    { label: "College", value: "Arifa Institute of Technology" },
    { label: "Graduation", value: "2027" },
    { label: "Location", value: "Nagapattinam, TN" }
  ]
};

export const skillsData = [
  {
    category: "Programming",
    description: "Core languages used for problem solving & software development",
    skills: [
      { name: "Python", badge: "Primary" },
      { name: "C++", badge: "Core" },
      { name: "Java", badge: "Basics" }
    ]
  },
  {
    category: "Web Development",
    description: "Modern frontend technologies for responsive user interfaces",
    skills: [
      { name: "React.js", badge: "Frontend" },
      { name: "JavaScript", badge: "Basics" },
      { name: "HTML5", badge: "Markup" },
      { name: "CSS3", badge: "Styling" }
    ]
  },
  {
    category: "Data Science",
    description: "Data manipulation, analytical exploration, and modeling",
    skills: [
      { name: "Pandas", badge: "Analysis" },
      { name: "SQL", badge: "Database" },
      { name: "Data Analysis", badge: "Core" },
      { name: "Machine Learning", badge: "Basics" }
    ]
  },
  {
    category: "Tools & Environment",
    description: "Developer tools and workflow environments",
    skills: [
      { name: "Git & GitHub", badge: "Version Control" },
      { name: "Linux Terminal", badge: "CLI" },
      { name: "VS Code", badge: "Editor" }
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Arifa Institute of Technology",
    period: "2023 - 2027",
    status: "Currently Pursuing (Expected Graduation: 2027)",
    description: "Focusing on core computer science subjects including Data Structures, Algorithms, Database Management Systems, Operating Systems, and Object-Oriented Programming."
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Juice Dataset Analysis & Machine Learning",
    description: "Analyzed a juice dataset using Python and Pandas, performed data cleaning and exploratory analysis, and experimented with a machine learning model to identify patterns in the data.",
    technologies: ["Python", "Pandas", "Data Analysis", "Machine Learning"],
    // Placeholder links - update with your actual repository or demo link
    githubUrl: "#",
    liveUrl: "#",
    tag: "Data Science"
  },
  {
    id: 2,
    title: "Handwritten Digit Recognition",
    description: "Built a basic machine learning model for recognizing handwritten digits and tested it using handwritten digit images.",
    technologies: ["Python", "Machine Learning", "Logistic Regression"],
    githubUrl: "#",
    liveUrl: "#",
    tag: "Machine Learning"
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website built with React to showcase my skills, education, projects, and contact information.",
    technologies: ["React.js", "JavaScript", "CSS"],
    githubUrl: "#",
    liveUrl: "#",
    tag: "Web Development"
  }
];

export const experienceData = [
  {
    title: "Student / Internship Experience",
    role: "Technical Learning & Project Development",
    organization: "Arifa Institute of Technology",
    period: "2023 - Present",
    summary: "Currently developing practical skills through projects, internships, and technical learning.",
    points: [
      "Building practical academic and personal projects applying Python, Machine Learning basics, and React.js.",
      "Engaging in self-paced learning in Data Analysis, Linux environment, and Cybersecurity concepts.",
      "Collaborating on coursework and problem-solving exercises in Computer Science & Engineering."
    ]
  },
  {
    title: "Certifications & Practical Training",
    role: "Skill Development & Certifications",
    organization: "Online & Academic Training",
    period: "2023 - 2024",
    summary: "Dedicated time outside regular coursework to gain industry-relevant foundational skills.",
    points: [
      "Ethical Hacking & Cybersecurity Fundamentals",
      "Python Programming Certification",
      "Java Internship Training"
    ]
  }
];
