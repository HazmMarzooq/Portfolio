/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ============================================================================
 * Author: S. Hazm Marzooq
 * Computer Science and Engineering Student, Software Developer
 */

export const personalInfo = {
  name: "S. Hazm Marzooq",
  role: "Computer Science and Engineering Student, Software Developer",
  headline: "Computer Science and Engineering Student, Software Developer | Data Science | Web Development | Cybersecurity",
  shortIntro: "I'm a Computer Science and Engineering student, Software Developer, interested in building practical software, working with data, and exploring cybersecurity.",
  careerObjective: "My goal is to become a well-rounded software professional by combining software development, data science, and cybersecurity.",
  email: "hazmmarzooq0007@gmail.com",
  phone: "9025623452",
  location: "Nagapattinam, Tamil Nadu, India",
  
  social: {
    github: "https://github.com/hazmmarzooq",
    linkedin: "https://www.linkedin.com/in/hazm-marzooq-517947300?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    email: "mailto:hazmmarzooq0007@gmail.com",
    phone: "tel:9025623452"
  },
  
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg"
};

export const aboutData = {
  paragraphs: [
    "I am a Computer Science and Engineering student, Software Developer, at Arifa Institute of Technology with a strong passion for exploring the intersections of software development, data science, and cybersecurity.",
    "I am dedicated to improving my core programming fundamentals and software engineering skills through hands-on practice, academic coursework, and real-world problem-solving.",
    "I actively learn new technologies, experiment with algorithms and data-driven applications, and turn ideas into clean, functional, and maintainable software."
  ],
  highlights: [
    { label: "Role", value: "Software Developer" },
    { label: "Degree", value: "B.E. Computer Science & Eng" },
    { label: "College", value: "Arifa Institute of Technology" },
    { label: "Graduation", value: "2027" }
  ]
};

export const skillsData = [
  {
    category: "Programming",
    description: "Core languages used for problem solving and software development",
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
    degree: "Bachelor of Engineering in Computer Science and Engineering, Software Developer",
    institution: "Arifa Institute of Technology",
    period: "2023 - 2027",
    status: "Currently Pursuing (Expected Graduation: 2027)",
    description: "Focusing on core computer science subjects including Data Structures, Algorithms, Database Management Systems, Operating Systems, and Object-Oriented Programming."
  }
];

export const certificatesData = [
  {
    id: "nptel-se",
    title: "Introduction to Software Engineering: A Road Map to Reliable Software Development and Maintenance",
    issuer: "NPTEL (IIT Kharagpur / Ministry of Education, Govt. of India)",
    period: "Jul - Oct 2026 (12-Week Course)",
    score: "76% (Elite Certification)",
    rollNo: "NPTEL26MA80S471200522",
    credits: "4 Credits Recommended",
    pdfUrl: "/nptl.pdf",
    previewImage: "/nptl-certificate.png",
    featured: true,
    description: "Rigorous 12-week national certification covering the entire software development lifecycle (SDLC), requirements engineering, software architecture, object-oriented design and modeling, structural and behavioral testing strategies, software maintenance, and quality assurance principles.",
    skillsLearned: [
      "Software Development Lifecycle (SDLC)",
      "Requirements Analysis & Specification",
      "Object-Oriented Design & UML Modeling",
      "Software Testing & Quality Assurance",
      "Software Reliability & Maintenance"
    ]
  },
  {
    id: "python-cert",
    title: "Python Programming Certification",
    issuer: "Technical Training & Academic Certification",
    period: "2024",
    score: "Certified",
    pdfUrl: "/resume.pdf",
    featured: false,
    description: "Comprehensive foundational certification in Python covering core syntax, data structures (lists, dictionaries, tuples), file handling, functional programming, and data processing.",
    skillsLearned: ["Python Syntax", "Data Structures", "Modular Programming", "File I/O"]
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking & Cybersecurity Fundamentals",
    issuer: "Cybersecurity Training",
    period: "2024",
    score: "Completed",
    pdfUrl: "/resume.pdf",
    featured: false,
    description: "Hands-on introduction to ethical hacking methodologies, network reconnaissance, common web application vulnerabilities (OWASP Top 10), and defensive security fundamentals.",
    skillsLearned: ["Network Security", "Vulnerability Assessment", "Cybersecurity Basics", "Defensive Strategies"]
  },
  {
    id: "java-internship",
    title: "Java Internship Training",
    issuer: "Industry Training Program",
    period: "2023 - 2024",
    score: "Completed",
    pdfUrl: "/resume.pdf",
    featured: false,
    description: "Practical training in Object-Oriented Programming with Java, class design, interfaces, exception handling, and application development fundamentals.",
    skillsLearned: ["Core Java", "OOP Principles", "Exception Handling", "Application Logic"]
  }
];

export const projectsData = [
  {
    id: 1,
    slug: "juice-dataset-analysis",
    title: "Juice Dataset Analysis & Machine Learning",
    summary: "Analyzed a juice dataset using Python and Pandas, performed data cleaning and exploratory analysis, and experimented with a machine learning model to identify patterns in the data.",
    tag: "Data Science & Machine Learning",
    technologies: ["Python", "Pandas", "NumPy", "Data Cleaning", "EDA", "Machine Learning"],
    githubUrl: "https://github.com/hazmmarzooq",
    liveUrl: "/projects/1",
    featured: true,
    fullExplanation: {
      problem: "Real-world commercial datasets often contain inconsistencies, missing information, and noisy values that make demand estimation and pattern recognition challenging. The goal was to clean the raw juice records and extract meaningful product and consumer insights.",
      methodology: [
        "Data Ingestion & Cleaning: Loaded the dataset using Pandas, identified missing/null entries, performed data type conversions, and cleaned duplicate records.",
        "Exploratory Data Analysis (EDA): Analyzed statistical metrics, distribution curves of juice prices, volume, and customer preferences across various store branches.",
        "Feature Engineering: Created normalized numeric features and categorical encoding to prepare input vectors for modeling.",
        "Model Experimentation: Built and trained a predictive machine learning model to discover consumption patterns and forecast purchase trends based on historical attributes."
      ],
      keyFindings: [
        "Identified key price sensitivity thresholds that strongly influence consumer volume.",
        "Observed seasonal peaks in purchase quantities across specific product varieties.",
        "Achieved reliable model baseline scores for predicting purchasing behavior."
      ]
    }
  },
  {
    id: 2,
    slug: "handwritten-digit-recognition",
    title: "Handwritten Digit Recognition",
    summary: "Built a basic machine learning model for recognizing handwritten digits and tested it using handwritten digit images.",
    tag: "Machine Learning & Computer Vision",
    technologies: ["Python", "Machine Learning", "Logistic Regression", "Image Processing", "Scikit-Learn"],
    githubUrl: "https://github.com/hazmmarzooq",
    liveUrl: "/projects/2",
    featured: true,
    fullExplanation: {
      problem: "Automated digit recognition is a fundamental problem in computer vision and machine learning. The objective was to build a machine learning model capable of accurately classifying handwritten numerical digits (0 to 9) from image pixel data.",
      methodology: [
        "Image Preprocessing: Rescaled and flattened 2D grayscale digit images into 1D normalized feature arrays, scaling pixel values from 0-255 down to 0-1.",
        "Dataset Splitting: Divided image samples into training and test partitions to ensure unbiased evaluation.",
        "Model Architecture: Implemented a multiclass classification model using Logistic Regression with cross-entropy loss optimization.",
        "Validation & Testing: Tested classification accuracy across hundreds of test samples, plotting confusion matrices to verify false positives and false negatives."
      ],
      keyFindings: [
        "Demonstrated how mathematical pixel representations enable linear classifiers to differentiate complex geometric curves.",
        "Attained solid classification performance on clean handwritten digits.",
        "Analyzed misclassified edge cases (such as ambiguous 4s and 9s or 3s and 8s) to identify avenues for deep learning improvements."
      ]
    }
  },
  {
    id: 3,
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    summary: "A responsive personal portfolio website built with React to showcase my skills, education, projects, and contact information.",
    tag: "Web Development",
    technologies: ["React.js", "JavaScript (ES6+)", "Vite", "React Router", "Modern Responsive CSS"],
    githubUrl: "https://github.com/hazmmarzooq",
    liveUrl: "/projects/3",
    featured: true,
    fullExplanation: {
      problem: "Recruiters and hiring managers require a clear, responsive, and verifiable online presentation of a student's skills, verified coursework (such as NPTEL), and practical code projects without clutter.",
      methodology: [
        "Component-Based Architecture: Built modular, reusable React components (Navbar, Hero, About, Skills, Education, Projects, Experience, Resume, Contact, Footer).",
        "Multi-Page Navigation: Integrated React Router for dedicated routes (/projects, /projects/:id, /certificates) while preserving smooth scrolling on the main page.",
        "Responsive & Accessible UI: Crafted pure CSS layouts with CSS variables, Flexbox, and CSS Grid ensuring seamless viewing across mobile, tablet, and desktop viewports.",
        "Live Asset Integration: Embedded verified NPTEL certifications, direct PDF preview/download routes, and social media connectivity."
      ],
      keyFindings: [
        "Achieved 100% responsiveness without heavy UI library dependencies.",
        "Delivered fast sub-second load times using Vite's optimized bundling.",
        "Integrated working multipage detail views that provide recruiters with immediate technical depth."
      ]
    }
  }
];

export const experienceData = [
  {
    title: "Student Experience & Project Development",
    role: "Computer Science and Engineering Student, Software Developer",
    organization: "Arifa Institute of Technology",
    period: "2023 - Present",
    summary: "Developing practical technical skills through academic projects, coursework, and self-directed software development.",
    points: [
      "Completed hands-on projects applying Python, Data Analysis, and Machine Learning algorithms.",
      "Designed and deployed modern, component-driven web applications using React.js and modern JavaScript.",
      "Practiced continuous version control using Git & GitHub and worked within Linux terminal development environments."
    ]
  },
  {
    title: "NPTEL & Industry Certifications",
    role: "Certified Software Engineering Student",
    organization: "NPTEL (IIT Kharagpur) & Technical Academies",
    period: "2023 - 2026",
    summary: "Acquired formal, verified certifications in core software disciplines.",
    points: [
      "NPTEL Elite Certification: Introduction to Software Engineering (Score: 76%, Roll No: NPTEL26MA80S471200522).",
      "Python Programming Certification with practical data structure exercises.",
      "Ethical Hacking & Defensive Cybersecurity Foundations.",
      "Java Object-Oriented Application Development Internship Training."
    ]
  }
];
