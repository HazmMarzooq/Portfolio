# Personal Portfolio Website — S. Hazm Marzooq

A modern, responsive, recruiter-ready developer portfolio website developed using **React.js**. Built as part of the internship program assignment with component-based architecture, smooth section scrolling, mobile navigation, and clean code organization.

---

## 📌 Project Overview
- **Developer:** S. Hazm Marzooq
- **Headline:** Computer Science Student | Data Science | Web Development | Cybersecurity
- **Institution:** Arifa Institute of Technology
- **Expected Graduation:** 2027
- **Email:** hazmmarzooq0007@gmail.com
- **Phone:** +91 9025623452
- **Location:** Nagapattinam, Tamil Nadu, India

---

## 🚀 Live Demo & Repository
- **GitHub Repository:** *Add your GitHub repo link after pushing*
- **Live Deployment:** *Add your Vercel / Netlify link after deployment*

---

## 🛠️ Tech Stack
- **Frontend Library:** React.js (v18.3.1)
- **Tooling & Bundler:** Vite
- **Styling:** Modern Responsive CSS3 (Custom Design System with CSS Variables, Flexbox, CSS Grid)
- **Typography:** Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*)
- **Icons:** Inline SVG Icons (Zero external heavy dependencies)

---

## 📂 Project Structure
```text
portpolio/
├── public/
│   ├── profile.jpg          # Public profile image
│   └── resume.pdf           # Downloadable PDF resume
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── profile.jpg  # Profile asset
│   │   └── resume.pdf       # Asset copy of resume
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed header with smooth-scrolling links & mobile hamburger
│   │   ├── Hero.jsx         # Hero introduction with circular profile picture & CTAs
│   │   ├── About.jsx        # Bio, student background, and career objective
│   │   ├── Skills.jsx       # Categorized skill badges (Programming, Web, Data Science, Tools)
│   │   ├── Education.jsx    # Academic degree card with coursework tags
│   │   ├── Projects.jsx     # 3 featured projects with tech badges, code & demo links
│   │   ├── Experience.jsx   # Student experience, practical learning & certifications
│   │   ├── Resume.jsx       # Dedicated resume section with download & preview actions
│   │   ├── Contact.jsx      # Contact cards (email, phone, location) + interactive form
│   │   └── Footer.jsx       # Tagline, nav links, copyright, and back-to-top button
│   ├── data/
│   │   └── portfolioData.js # Centralized configuration for all personal details & links
│   ├── App.jsx              # Main application assembling all modular components
│   ├── App.css              # Component styling and responsive media queries
│   ├── index.css            # Global theme variables, reset, and base typography
│   └── main.jsx             # React DOM entry point
├── index.html               # Semantic HTML5 entry file with SEO meta tags
├── package.json             # Project dependencies and npm scripts
├── vite.config.js           # Vite server and build configuration
└── .gitignore               # Ignored files for clean Git tracking
```

---

## ✨ Features & Sections Implemented
1. **Navbar:** Fixed, glassmorphic header with smooth scroll to all sections on desktop and an animated hamburger dropdown menu on mobile.
2. **Hero:** Professional introduction, student headline, active status indicator, dual CTA buttons ("View My Projects", "Download Resume"), and circular profile image.
3. **About Me:** Student-centered background and career objective block: *"My goal is to become a well-rounded software professional by combining software development, data science, and cybersecurity."*
4. **Technical Skills:** Categorized into Programming, Web Development, Data Science, and Tools without fake percentages.
5. **Education:** Degree details (*B.E. Computer Science and Engineering*, Arifa Institute of Technology, 2023–2027) with core coursework.
6. **Projects:** 
   - *Juice Dataset Analysis & Machine Learning*
   - *Handwritten Digit Recognition*
   - *Personal Portfolio Website*
7. **Experience:** Student learning, academic coursework, and certifications (Ethical Hacking, Python, Java).
8. **Resume:** Dedicated download and preview card linked directly to `/resume.pdf`.
9. **Contact:** Direct email, phone, location, GitHub, LinkedIn, and an interactive contact form with instant validation feedback.
10. **Footer:** Clean footer with social icons, quick links, and a smooth "Back to Top" button.

---

## 💻 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port displayed in the terminal).

### 3. Build for Production
```bash
npm run build
```
This produces an optimized production bundle inside the `dist/` directory ready for deployment.

---

## 📝 How to Customize Your Details
You can easily update any information without touching complex code:

| What you want to change | File to edit |
|---|---|
| **Your Name, Phone, Email, Location** | `src/data/portfolioData.js` (`personalInfo` object) |
| **GitHub & LinkedIn URLs** | `src/data/portfolioData.js` (`social` object) |
| **Projects (Titles, Tech, Links)** | `src/data/portfolioData.js` (`projectsData` array) |
| **Skills & Categories** | `src/data/portfolioData.js` (`skillsData` array) |
| **Education Details** | `src/data/portfolioData.js` (`educationData` array) |
| **Profile Photo** | Replace `public/profile.jpg` or `src/assets/images/profile.jpg` |
| **Resume PDF** | Replace `public/resume.pdf` with your updated PDF |

---
