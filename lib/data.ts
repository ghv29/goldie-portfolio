export const resumeData = {
  basics: {
    name: "Goldie Harshad Vaghela",
    title: "Data Analyst",
    subtitle: "Engineering & Operations Background",
    summary:
      "After five years working across manufacturing, research, and large-scale logistics operations, I moved into data analytics to tackle the analytical side of problems I encountered first-hand - from production optimisation at Tesla's Gigafactory to operational performance tracking at Amazon. Completed an intensive Data Analytics Bootcamp at Ironhack (Jan–Mar 2026), building end-to-end projects with Python, SQL, Tableau, and AI tools. My domain knowledge in automotive manufacturing and supply chain is a practical edge that most data candidates lack.",
    location: "Germany",
    email: "vgoldie29@gmail.com",
    linkedin: "linkedin.com/in/goldiev",
    github: "github.com/ghv29",
    workAuth:
      "German work authorisation: Aufenthaltserlaubnis (valid to Oct 2026) - no employer sponsorship required",
  },

  topImpact: [
    { label: "R² Score", value: "0.858", context: "Turbofan RUL prediction model" },
    { label: "Skills Extracted", value: "70+", context: "Bilingual NLP pipeline" },
    { label: "Records Analysed", value: "122K", context: "FIFA longitudinal study" },
    { label: "Team Led", value: "50–60", context: "Amazon shift operations" },
  ],

  experience: [
    {
      company: "Amazon",
      role: "Operations Lead",
      dates: "2025",
      location: "Germany",
      bullets: [
        "Co-managed shift operations for a team of 50–60 associates alongside two other team leads, responsible for workforce allocation, task planning, and adherence to quality and safety standards",
        "Monitored and reported operational KPIs using Excel and internal analytics tools to Shift and Area Managers",
        "Led cross-functional continuous improvement projects targeting productivity, safety, and quality outcomes",
        "Deputised as Shift Lead on multiple occasions, taking full accountability for shift-level decisions",
      ],
      highlight: "50–60 associates",
    },
    {
      company: "Textilforschungsinstitut Thüringen-Vogtland e.V.",
      role: "Project Manager",
      dates: "2023 – 2024",
      location: "Greiz, Germany",
      bullets: [
        "Managed research communication and knowledge transfer projects end-to-end - from planning to delivery",
        "Secured funding from government bodies and industry partners by identifying and pursuing grant opportunities",
        "Coordinated cross-team stakeholder communication to ensure smooth and transparent project delivery",
      ],
      highlight: "Grant funding secured",
    },
    {
      company: "Tesla, Inc.",
      role: "Production Associate",
      dates: "2022 – 2023",
      location: "Grünheide (Gigafactory Berlin)",
      bullets: [
        "Performed Model Y chassis assembly on a high-volume production line while consistently meeting quality targets",
        "Conducted visual quality inspections during assembly; identified and escalated defects to support teams",
        "Trained newly onboarded associates on assembly procedures, contributing to efficient team ramp-up",
      ],
      highlight: "Tesla Gigafactory Berlin",
    },
    {
      company: "G&G Stadtsysteme GmbH",
      role: "Project & Research Intern",
      dates: "2020 – 2021",
      location: "Berlin",
      bullets: [
        "Led a 5G market research project for the DACH region; managed project timelines and task allocation",
        "Produced structured stakeholder documentation via Monday.com; co-developed smart city 5G use cases",
      ],
      highlight: "5G DACH market research",
    },
  ],

  projects: [
    {
      title: "StellenRadar - Job Intelligence Dashboard",
      year: "2026",
      context: "Individual capstone project - Ironhack Data Analytics Bootcamp",
      github: "github.com/ghv29",
      bullets: [
        "Built a job matching platform for the German data analytics market by scraping live listings from StepStone",
        "Extracted 70+ bilingual skills via a rule-based NLP pipeline; ranked jobs using a 7-component hybrid scoring engine",
        "Integrated OpenAI embeddings with a Pinecone vector store for semantic search and AI-powered Q&A",
        "Delivered as a live Streamlit dashboard with automated Notion job tracking and GitHub Actions-driven scraping",
      ],
      stack: ["Python", "PostgreSQL (Neon)", "Pinecone", "OpenAI", "Streamlit", "Notion API", "GitHub Actions"],
      metrics: ["70+ skills extracted", "7-component scoring engine"],
    },
    {
      title: "Turbofan Predictive Maintenance - RUL Prediction System",
      year: "2026",
      context: "Individual capstone project - Ironhack Data Analytics Bootcamp",
      github: "github.com/ghv29",
      bullets: [
        "Built a predictive maintenance system on NASA's CMAPSS turbofan dataset to forecast engine remaining useful life",
        "Engineered 44 features including rolling sensor statistics; achieved R²=0.858 (RMSE 15.51 cycles) with a tuned Random Forest model",
        "Deployed a Streamlit fleet workbench with SHAP explainability and an AI maintenance advisor; REST API via Flask",
        "Published an interactive Tableau dashboard for fleet-level health monitoring and engine classification",
      ],
      stack: ["Python", "Scikit-learn", "SHAP", "Flask", "MySQL", "Streamlit", "Plotly", "Tableau", "Grok API"],
      metrics: ["R²=0.858", "RMSE 15.51 cycles", "44 features engineered"],
    },
    {
      title: "Group Projects - Ironhack Data Analytics Bootcamp",
      year: "2026",
      context: "Group Projects",
      github: "github.com/ghv29",
      bullets: [
        "FIFA Player Data Analysis (2019–2023): Longitudinal analysis of 122,000 records across 5 seasons - Selenium scraping, EDA across 6 hypotheses, data quality pipeline",
        "US Data Job Market Analysis (2024): Salary benchmarking across roles, industries, and geographies using Python, SQL, and Matplotlib",
      ],
      stack: ["Python", "Pandas", "Selenium", "SQL", "Matplotlib", "GitHub"],
      metrics: ["122,000 records", "6 hypotheses tested", "5 seasons analysed"],
    },
  ],

  skills: {
    "Programming & Data": ["Python", "Pandas", "Scikit-learn", "SQL", "PostgreSQL", "MySQL", "SQLAlchemy"],
    "Visualisation & BI": ["Tableau", "Matplotlib", "Seaborn", "Plotly"],
    "AI / Tools / Deploy": [
      "Streamlit", "OpenAI API", "Grok API", "Pinecone", "SHAP", "Flask",
      "GitHub Actions", "BeautifulSoup", "Selenium",
    ],
    "Other": ["Excel", "AutoCAD", "Monday.com", "Notion API"],
  },

  education: [
    {
      degree: "Data Analytics Bootcamp",
      institution: "Ironhack",
      location: "Germany",
      dates: "Jan 2026 – Mar 2026",
      details: [
        "Intensive full-time programme · Python · SQL · Machine Learning · AI agents · Tableau · Streamlit",
        "Two individual capstone projects deployed to production",
      ],
      link: "github.com/ghv29",
    },
    {
      degree: "MSc International Technology Transfer Management",
      institution: "Fachhochschule des Mittelstands",
      location: "Germany",
      dates: "2019 – 2022",
      details: [
        "Focus: Innovation Management · Smart Factory · International Project Management · Globalised Economy",
        "Thesis (completed 2022): Internationalisation of SMEs - Germany & India | qualitative research, expert interviews",
      ],
    },
    {
      degree: "BEng Mechanical Engineering",
      institution: "Gujarat Technological University",
      location: "India",
      dates: "2014 – 2018",
      details: ["Thesis: Analysis and Optimisation of Submerged Arc Welding"],
    },
  ],

  languages: [
    { lang: "English", level: "Professional proficiency (C1)" },
    { lang: "German", level: "B1 (TELC certified, actively improving)" },
  ],

  certifications: [
    "Google Foundations of Project Management (Coursera)",
  ],
};
