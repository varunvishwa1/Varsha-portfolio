export const personalInfo = {
  name: "VARSHA K S",
  primaryRole: "ServiceNow Application Developer",
  secondaryRole: "ServiceNow Certified Application Developer (CAD) | AI & Data Science Undergraduate",
  location: "Palakkad, Kerala, India",
  email: "varsha.ks.contact@gmail.com",
  linkedin: "https://linkedin.com/in/varsha-ks-shankar",
  linkedinHandle: "linkedin.com/in/varsha-ks-shankar",
  github: "https://github.com/varsha-shankar66",
  githubHandle: "github.com/varsha-shankar66",
  education: {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "Dhanalakshmi Srinivasan College of Engineering",
    period: "2023 — 2027",
    cgpa: "8.65",
  },
  bio: "I am Varsha K S, an Artificial Intelligence and Data Science undergraduate and ServiceNow Certified Application Developer focused on building enterprise applications, workflow automation, ITSM solutions, and AI-assisted systems. My background combines ServiceNow development with Python, Java, SQL, AI/ML, data analysis, and full-stack development. I enjoy transforming business requirements into practical, scalable, and user-focused technical solutions.",
};

export const metricsData = [
  { id: "01", label: "SERVICE NOW CAD", val: "CERTIFIED" },
  { id: "02", label: "ACADEMIC CGPA", val: "8.65" },
  { id: "03", label: "AI & DATA SCIENCE", val: "B.TECH" },
  { id: "04", label: "ENTERPRISE AUTOMATION", val: "ITSM / FLOWS" },
];

export const serviceNowSkills = [
  "Application Development",
  "ITSM",
  "Tables & Fields",
  "Business Rules",
  "Client Scripts",
  "UI Policies",
  "ACLs",
  "Flow Designer",
  "Notifications",
  "Service Portal",
  "Record Producers",
  "ATF (Automated Test Framework)",
  "Reporting & Dashboards",
  "Server Scripting",
  "Workflow Automation",
];

export const serviceNowProjects = [
  {
    id: "smartit",
    title: "SMARTIT",
    subtitle: "AI-Assisted IT Incident Management System",
    isFlagship: true,
    description:
      "A ServiceNow-based IT incident management solution that combines workflow automation with AI-assisted classification, priority recommendation, assignment routing, SLA tracking, and resolution workflows.",
    tech: [
      "ServiceNow",
      "ITSM",
      "Business Rules",
      "Client Scripts",
      "UI Policies",
      "ACLs",
      "Flow Designer",
      "Notifications",
      "Reports & Dashboards",
    ],
    features: [
      "AI-assisted incident categorization & tagging",
      "Predictive priority recommendation engine",
      "Automated assignment group routing",
      "Real-time SLA tracking & alert escalations",
      "Interactive incident resolution workflows",
    ],
  },
  {
    id: "medical-center",
    title: "MEDICAL DIAGNOSIS CENTER",
    subtitle: "Healthcare Service Portal Application",
    isFlagship: false,
    description:
      "Service Portal-based healthcare application concept streamlining patient requests, test scheduling, diagnostic report management, and automated notifications.",
    tech: ["ServiceNow", "Service Portal", "Record Producers", "Flow Designer", "Widgets", "ACLs"],
    features: [
      "Patient self-service portal interface",
      "Automated appointment & test booking flows",
      "Secure diagnostic result access controls",
    ],
  },
  {
    id: "employee-raise",
    title: "EMPLOYEE RAISE ISSUE",
    subtitle: "Enterprise Request Management Portal",
    isFlagship: false,
    description:
      "Record Producer & Service Portal solution enabling employees to log workplace issues, request hardware/software support, and track resolution lifecycles.",
    tech: ["ServiceNow", "Record Producer", "Service Portal", "Business Rules", "UI Policies"],
    features: [
      "Dynamic catalog item record producers",
      "Custom UI policy condition handlers",
      "Automated notification triggers upon status changes",
    ],
  },
];

export const aiDataSkills = [
  "Python",
  "Java",
  "SQL",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "NLP",
  "Predictive Modelling",
  "Computer Vision",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "PyTorch",
  "OpenCV",
  "Streamlit",
  "Plotly",
  "EDA & Analytics",
  "Feature Engineering",
];

export const aiProjects = [
  {
    id: "agri-nova",
    title: "AGRI NOVA",
    subtitle: "Intelligent Agriculture for Farmers",
    problem: "Small & medium farmers lack accessible real-time crop disease diagnosis and yield guidance.",
    solution: "AI-driven computer vision and predictive analytics platform delivering crop health insights and weather-based recommendations.",
    tech: ["Python", "Machine Learning", "OpenCV", "Streamlit", "Pandas"],
    purpose: "Empowering agricultural decision-making through accessible ML models.",
  },
  {
    id: "hiv-forecasting",
    title: "DATA-DRIVEN HIV SPREAD FORECASTING TOOL",
    subtitle: "Epidemiological Data Analysis & Prediction",
    problem: "Public health organizations require predictive modeling to analyze spatial-temporal infection trends.",
    solution: "Statistical forecasting tool utilizing time-series analysis and machine learning to map infection trajectories and resource allocation.",
    tech: ["Python", "Predictive Analytics", "Pandas", "Scikit-learn", "Plotly"],
    purpose: "Supporting healthcare strategy with data-backed trend projections.",
  },
  {
    id: "prescription-verification",
    title: "AI MEDICAL PRESCRIPTION VERIFICATION",
    subtitle: "Automated Prescription Analysis & Safety Check",
    problem: "Handwritten or unverified medical prescriptions introduce drug interaction risks in pharmacy workflows.",
    solution: "OCR + NLP pipeline verifying medication dosages, checking contraindications, and flagging dosage anomalies.",
    tech: ["Python", "NLP", "OpenCV", "PyTorch", "Streamlit"],
    purpose: "Enhancing clinical workflow safety through automated AI verification.",
  },
];

export const experiences = [
  {
    role: "AI & Python Intern",
    company: "KITES Softwares Pvt Ltd",
    period: "2025",
    description: "Developing Python automation scripts, AI data processing pipelines, and enterprise software utilities.",
  },
  {
    role: "Campus Ambassador",
    company: "Skill Intern",
    period: "2025",
    description: "Leading student engagement, technical workshops, and peer skill development initiatives.",
  },
  {
    role: "Full-Stack (MERN) Developer Intern",
    company: "Maiyyam Knowledge and Careers Pvt Ltd",
    period: "2024 — 2025",
    description: "Built responsive web applications, RESTful APIs, database schemas, and modular UI components.",
  },
  {
    role: "AI & Machine Learning Intern",
    company: "CodeBind Technologies",
    period: "2024",
    description: "Implemented supervised ML models, data preprocessing workflows, and exploratory data analytics.",
  },
];

export const certifications = [
  {
    title: "ServiceNow Certified Application Developer (CAD)",
    issuer: "ServiceNow",
    isPrimary: true,
    description: "Official ServiceNow CAD certification validating expertise in enterprise application creation, script development, ITSM data model configuration, Flow Designer automation, and security controls.",
  },
  {
    title: "IBM SkillsBuild — Introduction to Generative AI",
    issuer: "IBM",
    isPrimary: false,
    description: "Comprehensive foundation in LLM architectures, prompt engineering, and generative AI enterprise applications.",
  },
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB University",
    isPrimary: false,
    description: "NoSQL document modeling, indexing, aggregation frameworks, and CRUD database administration.",
  },
  {
    title: "Generative AI Mastery Workshop",
    issuer: "NXT WAVE + OpenAI Academy",
    isPrimary: false,
    description: "Hands-on implementation of OpenAI API integrations, AI workflow automation, and custom agent design.",
  },
];

export const programmingSkills = ["Python", "Java", "SQL", "JavaScript", "TypeScript"];
export const devSkills = ["React", "Node.js", "Express", "REST APIs", "Firebase", "Git", "GitHub"];
export const toolstack = ["VS Code", "Jupyter Notebook", "Google Colab", "Postman", "ServiceNow Studio"];

export const workflowSteps = [
  { step: "01", title: "UNDERSTAND", desc: "Analyzing business rules, enterprise requirements, and target workflow constraints." },
  { step: "02", title: "DESIGN", desc: "Architecting data models, tables, security ACLs, and Service Portal UI wireframes." },
  { step: "03", title: "DEVELOP", desc: "Writing clean Business Rules, Client Scripts, UI Policies, and modular application logic." },
  { step: "04", title: "AUTOMATE", desc: "Configuring Flow Designer sequences, automated notifications, and SLAs." },
  { step: "05", title: "TEST", desc: "Running Automated Test Framework (ATF) suites, user role validations, and security audits." },
  { step: "06", title: "DELIVER", desc: "Deploying via Update Sets / Application Repository with operational dashboards." },
];

export const supportingContent = {
  initiatives: [
    {
      title: "NAALAI THEERVU",
      subtitle: "Academic Educational Initiative",
      desc: "A Tamil + English educational initiative focused on Anna University AI & Data Science exam preparation, technical learning guides, and peer study resources.",
    },
  ],
  strengths: [
    "Communication & Presentation",
    "Active Listening & Collaboration",
    "Problem Solving & Analytical Thinking",
    "Adaptability & Time Management",
    "Professional Email & Technical Documentation",
  ],
  languages: ["English", "Malayalam", "Tamil", "Hindi"],
};
