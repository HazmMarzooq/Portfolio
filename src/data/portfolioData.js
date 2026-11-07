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
    githubUrl: "https://github.com/HazmMarzooq/juice-data-analytics-",
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
    slug: "predictive-analysis-cybercrime-hotspot-area-of-cash-widhrawal",
    title: "Predictive Analysis of Cybercrime Hotspot Area of Cash Withdrawal",
    summary: "Predictive analytics framework for cybercrime complaints to forecast likely cash withdrawal locations and ATM hotspots in advance, enabling proactive law-enforcement intervention.",
    tag: "Cybersecurity & Predictive Analytics",
    technologies: ["TypeScript", "React", "Gemini AI API", "Leaflet GIS", "Recharts", "Predictive Analytics"],
    githubUrl: "https://github.com/HazmMarzooq/predictive-analysis-cybercrime-hotspot-area-of-cash-widhrawal",
    liveUrl: "/projects/2",
    featured: true,
    fullExplanation: {
      problem: "Cyber financial fraud and phishing scams rely on swift cash withdrawals via mule bank accounts and geographically distributed ATM kiosks before victim accounts can be frozen. Law enforcement cells need an automated intelligence framework capable of analyzing complaint streams and forecasting cash withdrawal hotspots prior to liquidation.",
      methodology: [
        "Complaint Ingestion & Pattern Mining: Aggregated cybercrime FIR metadata, transaction layering velocity, and financial complaint timelines across regional bank branches.",
        "Geospatial Risk Mapping (GIS): Integrated interactive Leaflet GIS mapping with ATM density clustering across high-risk districts to identify vulnerable withdrawal corridors.",
        "Predictive Risk Engine: Leveraged multi-variable statistical scoring and Gemini AI analysis to evaluate transaction amounts, mule account patterns, and time-to-withdrawal windows.",
        "Human-in-the-Loop Interception Workflow: Designed an evidentiary quadrant verification console generating cryptographically signed operational interception advisories for patrol dispatch."
      ],
      keyFindings: [
        "Forecasted cash withdrawal time windows with up to 89% confidence across identified ATM hotspots.",
        "Reduced time-to-interception through automated generation of formal law-enforcement dispatch advisories.",
        "Demonstrated end-to-end operational feasibility during Smart India Hackathon evaluation."
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
