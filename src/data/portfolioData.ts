import { Project, SkillCategory, Statistic, LearningRoadmapNode } from '../types';

export const PERSONAL_INFO = {
  name: "Devidutta Das",
  role: "AI/ML ENGINEER IN PROGRESS",
  subheading: "I build practical AI/ML systems that turn data into useful solutions.",
  bio: "B.Tech AI/ML student passionate about Machine Learning, Data Science, intelligent software systems, and real-world problem solving.",
  cgpa: "8.5",
  sgpa: "8.13",
  email: "dasdevidutta3@gmail.com",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGSbRrq6hiq4Q/profile-displayphoto-scale_100_100/B4DZ7Jz_j0I4AY-/0/1781502312367?e=1788393600&v=beta&t=aJD1nMXTFsvbc26R0EAs64C6Kj_m2JCM1s6GRAlggUM",
  github: "https://github.com/devidutta3",
  linkedin: "https://www.linkedin.com/in/devidutta-das-07a15b358/",
  location: "Odisha, India",
  education: "B.Tech in Computer Science & Engineering (Specialization in AI & ML)",
};

export const STATISTICS: Statistic[] = [
  {
    value: "8.5",
    label: "Overall CGPA",
    description: "Academic consistency in CS & AI/ML coursework",
    gradient: "from-[#7C3AED] to-[#2563EB]",
    borderGlow: "rgba(124, 58, 237, 0.4)"
  },
  {
    value: "8.13",
    label: "Recent SGPA",
    description: "Strong performance in core engineering subjects",
    gradient: "from-[#2563EB] to-[#06B6D4]",
    borderGlow: "rgba(37, 99, 235, 0.4)"
  },
  {
    value: "4+",
    label: "ML Projects",
    description: "End-to-end data pipelines, ML models & APIs",
    gradient: "from-[#EC4899] to-[#7C3AED]",
    borderGlow: "rgba(236, 72, 153, 0.4)"
  },
  {
    value: "1",
    label: "ISRO Hackathon",
    description: "Bharatiya Antariksh Hackathon 2026 Remote Sensing project",
    gradient: "from-[#22C55E] to-[#06B6D4]",
    borderGlow: "rgba(34, 197, 94, 0.4)"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    gradient: "from-[#7C3AED] to-[#2563EB]",
    skills: [
      { name: "Python", level: "Primary Language" },
      { name: "Java", level: "OOP Fundamentals" },
      { name: "JavaScript", level: "Web Interactive" },
      { name: "HTML5", level: "Semantic Markup" },
      { name: "CSS3", level: "Responsive Styling" }
    ]
  },
  {
    title: "Machine Learning",
    gradient: "from-[#2563EB] to-[#06B6D4]",
    skills: [
      { name: "Scikit-learn", level: "Core ML Framework" },
      { name: "TensorFlow", level: "Neural Networks" },
      { name: "Regression", level: "Predictive Models" },
      { name: "Classification", level: "Supervised Learning" },
      { name: "Feature Engineering", level: "Data Transformation" },
      { name: "Model Evaluation", level: "Metrics & Validation" }
    ]
  },
  {
    title: "Data Science",
    gradient: "from-[#06B6D4] to-[#22C55E]",
    skills: [
      { name: "NumPy", level: "Numerical Arrays" },
      { name: "Pandas", level: "Data Wrangling" },
      { name: "Matplotlib", level: "Data Visualization" },
      { name: "Data Preprocessing", level: "Cleaning & Normalization" },
      { name: "EDA", level: "Exploratory Analysis" }
    ]
  },
  {
    title: "Backend",
    gradient: "from-[#EC4899] to-[#7C3AED]",
    skills: [
      { name: "FastAPI", level: "High Performance APIs" },
      { name: "Pydantic", level: "Data Validation" },
      { name: "Uvicorn", level: "ASGI Server" },
      { name: "REST APIs", level: "Interface Design" },
      { name: "Joblib", level: "Model Serialization" }
    ]
  },
  {
    title: "Remote Sensing",
    gradient: "from-[#22C55E] to-[#06B6D4]",
    skills: [
      { name: "Google Earth Engine", level: "Geospatial Cloud" },
      { name: "Sentinel-1", level: "SAR Radar Data" },
      { name: "Sentinel-2", level: "Multi-spectral Optical" },
      { name: "NDVI", level: "Vegetation Index" },
      { name: "NDWI", level: "Water Index" },
      { name: "NDMI", level: "Moisture Index" },
      { name: "EVI", level: "Enhanced Vegetation" }
    ]
  },
  {
    title: "Tools & Databases",
    gradient: "from-[#F97316] to-[#EC4899]",
    skills: [
      { name: "Git & GitHub", level: "Version Control" },
      { name: "VS Code", level: "IDE Workflow" },
      { name: "Google Colab", level: "Cloud Notebooks" },
      { name: "Kaggle", level: "Datasets & Notebooks" },
      { name: "SQL & PostgreSQL", level: "Relational Queries" }
    ]
  }
];

export const CURRENTLY_LEARNING: LearningRoadmapNode[] = [
  {
    title: "Advanced Machine Learning",
    status: "Active Learning Focus",
    description: "Deepening understanding of ensemble methods, hyperparameter tuning, cross-validation strategies, and anomaly detection.",
    tags: ["Ensembles", "Gradient Boosting", "XGBoost", "Hyperparameter Tuning"],
    gradient: "from-[#7C3AED] to-[#2563EB]"
  },
  {
    title: "Classification & Complex Models",
    status: "In Progress",
    description: "Exploring multi-class classification, imbalanced data handling, and evaluating precision-recall tradeoffs for real-world datasets.",
    tags: ["SMOTE", "ROC-AUC", "Confusion Matrix", "Random Forest"],
    gradient: "from-[#2563EB] to-[#06B6D4]"
  },
  {
    title: "ML Pipelines & Automation",
    status: "In Progress",
    description: "Building reproducible scikit-learn ColumnTransformers and Pipelines to encapsulate data cleaning and model fitting.",
    tags: ["ColumnTransformer", "Feature Union", "Pipeline Serialization"],
    gradient: "from-[#06B6D4] to-[#22C55E]"
  },
  {
    title: "Model Deployment & Production",
    status: "Exploring",
    description: "Containerizing FastAPI prediction servers with Docker, deploying RESTful interfaces, and setting up prediction logging.",
    tags: ["Docker", "FastAPI Cloud", "Model Monitoring", "API Gateways"],
    gradient: "from-[#EC4899] to-[#7C3AED]"
  },
  {
    title: "React & TypeScript for AI UI",
    status: "In Progress",
    description: "Building modern responsive developer interfaces, interactive dashboards, and visualization tools for machine learning applications.",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Interactive Dashboards"],
    gradient: "from-[#F97316] to-[#EC4899]"
  },
  {
    title: "AI/ML Engineering Practice",
    status: "Continuous Growth",
    description: "Mastering practical AI engineering skills, prompt-grounded LLM integrations, and robust end-to-end software architecture.",
    tags: ["Software Engineering", "Clean Code", "System Design Basics"],
    gradient: "from-[#22C55E] to-[#06B6D4]"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "weather-prediction",
    title: "AI Weather Analysis & Prediction System",
    category: "Machine Learning / Data Science / API",
    filterCategories: ["All", "Machine Learning", "Data Science", "API"],
    technologies: [
      "Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "FastAPI", "Open-Meteo API", "Joblib"
    ],
    description: "An end-to-end weather analysis and prediction system using real-world weather data for data analysis, visualization, and machine-learning-based prediction.",
    theme: {
      gradient: "from-[#2563EB] to-[#06B6D4]",
      borderGlow: "rgba(6, 182, 212, 0.4)",
      accentColor: "#06B6D4",
      badgeBg: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/30"
    },
    features: [
      "Real-time & historical weather data collection via Open-Meteo API",
      "Data preprocessing and missing value handling with Pandas & NumPy",
      "Feature engineering including rolling temperature averages, humidity ratios & pressure trends",
      "Exploratory Data Analysis (EDA) and interactive trend visualizations",
      "Machine learning model training and evaluation using Scikit-learn",
      "High-performance FastAPI prediction endpoints",
      "Joblib model serialization and persistence workflow",
      "Interactive Swagger/OpenAPI documentation testing interface"
    ],
    problem: "Accurate local short-term weather prediction requires combining real-time meteorology feeds with historical pattern analysis and lightweight deployment endpoints.",
    approach: "Extracted historical and live weather parameters from the Open-Meteo API, engineered temporal lag features (rolling averages, dew point spread), trained regression/classification models in Scikit-learn, serialized models via Joblib, and served predictions through a FastAPI service.",
    workflow: [
      "Data Collection: Open-Meteo API fetching temperature, humidity, pressure, wind speed",
      "Preprocessing: Outlier filtering, missing value imputation, timestamp indexing",
      "Feature Engineering: Temporal features, lag variables, humidity-temperature interactions",
      "Model Training: Scikit-learn Random Forest & Linear/Ridge Regression comparison",
      "Evaluation: MAE, RMSE, R² score validation across cross-validation folds",
      "Deployment: FastAPI web service with Joblib model loading and JSON response payloads"
    ],
    results: [
      "Successfully created a full-stack ML service serving predictions under 50ms latency",
      "Demonstrated strong correlation between engineered dew-point spreads and precipitation forecasts",
      "Automated complete data pipeline from API fetch to client response"
    ],
    futureImprovements: [
      "Incorporate satellite cloud imagery data for enhanced short-term forecasting",
      "Implement automated daily model retraining loops with updated weather feeds",
      "Add interactive geographic map overlays for multi-city weather tracking"
    ],
    githubUrl: "https://github.com/devidutta3/weather-prediction-utils",
    liveDemoUrl: "https://github.com/devidutta3/weather-prediction-utils",
    interactiveType: "weather"
  },
  {
    id: "ipl-score-predictor",
    title: "IPL Score Prediction System",
    category: "Machine Learning",
    filterCategories: ["All", "Machine Learning", "Data Science"],
    technologies: [
      "Python", "Pandas", "Scikit-learn", "Linear Regression", "FastAPI"
    ],
    dataset: "135,018 records (Ball-by-ball historical IPL match dataset)",
    metrics: [
      { label: "Dataset Size", value: "135,018 rows" },
      { label: "R² Score", value: "0.5288" },
      { label: "RMSE", value: "21.65" },
      { label: "MAE", value: "15.97" },
      { label: "MSE", value: "468.72" }
    ],
    description: "Machine learning score prediction engine trained on over 135,000 historical IPL ball-by-ball match records to project target innings totals dynamically.",
    theme: {
      gradient: "from-[#F97316] to-[#EC4899]",
      borderGlow: "rgba(249, 115, 22, 0.4)",
      accentColor: "#F97316",
      badgeBg: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/30"
    },
    features: [
      "Data preprocessing on 135,018 historical ball-by-ball records",
      "Dynamic feature preparation: current score, overs completed, wickets lost, runs in last 5 overs",
      "Linear Regression model training and quantitative performance benchmarking",
      "Rigorous model evaluation metrics (R², RMSE, MAE, MSE)",
      "FastAPI API integration for instant match scenario querying",
      "Team and venue encoding for match context sensitivity"
    ],
    problem: "Cricket match total score prediction involves high stochasticity, requiring real-time match state features (runs scored, wickets fallen, run rate in recent overs) to generate realistic score estimations.",
    approach: "Cleaned and filtered historical IPL ball-by-ball data, computed cumulative overs, runs, and wickets fallen, created rolling 5-over momentum metrics, applied one-hot encoding for batting/bowling teams, and trained a Linear Regression baseline evaluated on holdout match sets.",
    workflow: [
      "Data Ingestion: Loaded raw IPL ball-by-ball dataset (135,018 records)",
      "Preprocessing: Filtered matches, removed invalid overs, calculated cumulative match metrics",
      "Feature Engineering: Current runs, wickets lost, overs completed, runs_last_5_overs",
      "Model Fitting: Scikit-learn Linear Regression model training on 80/20 train-test split",
      "Model Metrics: Calculated R² (0.5288), RMSE (21.65), MAE (15.97), MSE (468.72)",
      "API Wrapping: Developed FastAPI endpoint accepting match state parameters"
    ],
    results: [
      "Achieved MAE of ~16 runs on total innings predictions",
      "Identified 'runs in last 5 overs' and 'wickets lost' as primary driver features for final score variance",
      "Built light REST endpoint for real-time score projection queries"
    ],
    futureImprovements: [
      "Test non-linear tree algorithms (Random Forest, XGBoost) to improve R² score",
      "Incorporate pitch condition metrics and head-to-head team statistics",
      "Deploy interactive web scoreboard interface for live match tracking"
    ],
    githubUrl: "https://github.com/devidutta3/IPL-Analysis-Model",
    liveDemoUrl: "https://github.com/devidutta3/IPL-Analysis-Model",
    interactiveType: "ipl"
  },
  {
    id: "isro-crop-moisture-detection",
    title: "AI-Driven Crop Type & Moisture Stress Detection",
    badge: "ISRO Bharatiya Antariksh Hackathon 2026",
    category: "AI / Remote Sensing / Agriculture",
    filterCategories: ["All", "AI", "Remote Sensing", "Machine Learning"],
    technologies: [
      "Google Earth Engine", "Python", "Scikit-learn", "TensorFlow", "Sentinel-1", "Sentinel-2"
    ],
    studyRegion: "Odisha, India",
    team: "CodeUdaan",
    description: "AI-driven agricultural analysis system for automated crop type detection, moisture stress detection, and irrigation advisory utilizing multi-spectral satellite remote sensing data.",
    theme: {
      gradient: "from-[#22C55E] via-[#06B6D4] to-[#2563EB]",
      borderGlow: "rgba(34, 197, 94, 0.5)",
      accentColor: "#22C55E",
      badgeBg: "bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/40"
    },
    features: [
      "Google Earth Engine (GEE) cloud platform remote sensing data pipeline",
      "Optical (Sentinel-2) and SAR Radar (Sentinel-1) multi-sensor fusion",
      "Automated spectral index calculation: NDVI, NDWI, NDMI, EVI",
      "Temporal time-series crop phenology profile analysis for Odisha study region",
      "Machine Learning workflow for crop type classification and moisture stress mapping",
      "Agricultural analysis and automated irrigation advisory decision tree",
      "Cloud mask processing and seasonal composite generation"
    ],
    problem: "Smallholder farmers and agricultural agencies in Odisha lack affordable, scalable, high-resolution tools to monitor crop health, detect early water stress, and optimize irrigation schedules.",
    approach: "Leveraged Sentinel-2 optical imagery and Sentinel-1 synthetic aperture radar (SAR) in Google Earth Engine. Computed vegetation and moisture spectral indices (NDVI, NDWI, NDMI, EVI), masked cloud coverage, constructed phenological time series, and trained Random Forest / Deep Neural Network models to classify crop types and quantify crop water stress.",
    workflow: [
      "Geospatial Ingestion: Filtered Sentinel-1 & Sentinel-2 imagery for Odisha, India",
      "Preprocessing: Applied QA60 cloud masking, terrain correction, and temporal aggregation",
      "Spectral Index Computation: Calculated NDVI (Vegetation), NDWI (Water), NDMI (Moisture Index), EVI (Enhanced Vegetation Index)",
      "Feature Fusion: Combined SAR backscatter (VV/VH ratios) with optical spectral bands",
      "Model Training: Random Forest classification on ground truth crop land cover samples",
      "Decision System: Rule-based irrigation advisory generating actionable stress warnings"
    ],
    results: [
      "Successfully extracted multi-temporal phenological curves distinguishing Paddy, Pulses, and Oilseeds",
      "Generated high-resolution moisture stress maps across agricultural blocks in Odisha",
      "Built end-to-end GEE script architecture for rapid spatial query execution"
    ],
    futureImprovements: [
      "Integrate localized weather forecast APIs for 7-day predictive irrigation planning",
      "Develop lightweight mobile app interface for local farmer advisory delivery",
      "Expand ground truth calibration dataset across additional agro-climatic zones"
    ],
    githubUrl: "https://github.com/devidutta3/Ai-Driven-crop-moisture-detection",
    liveDemoUrl: "https://github.com/devidutta3/Ai-Driven-crop-moisture-detection",
    interactiveType: "crop"
  },
  {
    id: "phishing-website-detector",
    title: "Phishing Website Detector",
    category: "Machine Learning / Cybersecurity",
    filterCategories: ["All", "Machine Learning", "AI", "API"],
    technologies: [
      "Python", "Scikit-learn", "FastAPI", "Feature Extraction", "Random Forest"
    ],
    dataset: "Extracted Web Domain & URL Security Features Dataset",
    metrics: [
      { label: "Accuracy", value: "96.4%" },
      { label: "Precision", value: "95.8%" },
      { label: "Recall", value: "97.1%" },
      { label: "F1 Score", value: "96.4%" }
    ],
    description: "Intelligent cybersecurity ML system that analyzes URL attributes, domain age, SSL status, and lexical features to detect malicious phishing websites in real-time.",
    theme: {
      gradient: "from-[#EC4899] via-[#7C3AED] to-[#2563EB]",
      borderGlow: "rgba(236, 72, 153, 0.4)",
      accentColor: "#EC4899",
      badgeBg: "bg-[#EC4899]/15 text-[#EC4899] border-[#EC4899]/30"
    },
    features: [
      "Lexical feature extraction from URLs (IP presence, symbol count, length, subdomains)",
      "Domain age and SSL security certificate verification pipeline",
      "Random Forest & Logistic Regression classifier model evaluation",
      "FastAPI endpoint for real-time URL threat score analysis",
      "Feature importance breakdown isolating suspicious domain patterns",
      "Interactive threat detection simulator with probability risk score"
    ],
    problem: "Phishing attacks trick users into sharing sensitive credentials via deceptive web URLs that closely mimic legitimate platforms.",
    approach: "Extracted structural and security heuristics from web links, trained supervised Machine Learning classifiers to identify malicious threat signatures, and wrapped the model in a lightweight REST API endpoint for rapid URL scanning.",
    workflow: [
      "Data Collection: Ingested labeled benign and malicious URL datasets",
      "Feature Extraction: Extracted length, IP addresses, '@' symbol counts, hyphenation, HTTPS status, domain registration age",
      "Preprocessing: Scaled numerical attributes and created binary indicators",
      "Model Training: Trained and tuned Random Forest and Decision Tree classifiers",
      "Evaluation: Achieved 96.4% test accuracy with high recall to minimize false negatives",
      "API Deployment: Built FastAPI service providing instant risk probability scoring"
    ],
    results: [
      "Successfully detects phishing URLs with over 96% classification accuracy",
      "Provides sub-30ms REST API response times for automated URL scanning"
    ],
    futureImprovements: [
      "Incorporate live DOM structure and screenshot computer vision analysis",
      "Build a browser extension for real-time user browsing protection"
    ],
    githubUrl: "https://github.com/devidutta3/phising-website-predictor",
    liveDemoUrl: "https://github.com/devidutta3/phising-website-predictor",
    interactiveType: "phishing"
  }
];

export const COMMUNITY_LEADERSHIP = {
  title: "Leadership & Community",
  organization: "CodeUdaan",
  role: "Founder",
  period: "2025 — Present",
  websiteUrl: "https://codeudaan.ai.studio",
  description: "Founded and lead a student technology community focused on programming, Machine Learning, software development, and project-based learning.",
  responsibilities: [
    "Guide student developers through hands-on programming and ML project workflows",
    "Organize technical workshops, coding sessions, and peer learning sessions",
    "Coordinate collaborative open-source and project repository activities on GitHub",
    "Encourage practical learning over pure theory through real-world software builds",
    "Support fellow students in mastering foundational tools like Python, Git, and ML libraries",
    "Lead technical initiatives and competitive hackathon team submissions"
  ],
  gradient: "from-[#7C3AED] via-[#EC4899] to-[#2563EB]"
};

export const ISRO_HACKATHON_DETAILS = {
  sectionTitle: "Beyond Projects",
  title: "ISRO Bharatiya Antariksh Hackathon 2026",
  challenge: "AI-Driven Automated Crop Type, Moisture Stress Detection and Irrigation Advisory",
  team: "CodeUdaan",
  studyRegion: "Odisha, India",
  technologies: [
    "Google Earth Engine", "Sentinel-1 (SAR)", "Sentinel-2 (Optical)", "Python", "Machine Learning"
  ],
  indices: [
    { name: "NDVI", fullName: "Normalized Difference Vegetation Index", formula: "(NIR - Red) / (NIR + Red)", purpose: "Monitors overall canopy greenness and crop growth vigor" },
    { name: "NDWI", fullName: "Normalized Difference Water Index", formula: "(Green - NIR) / (Green + NIR)", purpose: "Detects liquid water content in vegetation and surface water bodies" },
    { name: "NDMI", fullName: "Normalized Difference Moisture Index", formula: "(NIR - SWIR1) / (NIR + SWIR1)", purpose: "Directly quantifies crop canopy moisture stress level" },
    { name: "EVI", fullName: "Enhanced Vegetation Index", formula: "2.5 * ((NIR - Red) / (NIR + 6*Red - 7.5*Blue + 1))", purpose: "High-sensitivity vegetation tracking in dense canopy zones" }
  ]
};

export const ACHIEVEMENTS = [
  {
    title: "8.5 CGPA Academic Record",
    subtitle: "Overall Cumulative Grade Point Average",
    category: "Academics",
    gradient: "from-[#7C3AED] to-[#2563EB]"
  },
  {
    title: "8.13 Recent Semester SGPA",
    subtitle: "Semester Grade Point Average in core CS & AI/ML modules",
    category: "Academics",
    gradient: "from-[#2563EB] to-[#06B6D4]"
  },
  {
    title: "ISRO Bharatiya Antariksh Hackathon 2026",
    subtitle: "Project: AI-Driven Crop & Moisture Stress Detection for Odisha",
    category: "Hackathon",
    gradient: "from-[#22C55E] to-[#06B6D4]"
  },
  {
    title: "Founder — CodeUdaan",
    subtitle: "Student Technology & ML Learning Community (codeudaan.ai.studio)",
    category: "Leadership",
    gradient: "from-[#EC4899] to-[#7C3AED]"
  },
  {
    title: "Multiple End-to-End ML Systems",
    subtitle: "Developed & deployed models for Weather, IPL Cricket & Cybersecurity Phishing Detection",
    category: "Engineering",
    gradient: "from-[#F97316] to-[#EC4899]"
  }
];
