// Rebuilt front-end logic to match the reference UI: renders resume data, gallery, counters, and lightweight booking modal.
(function(){
  const profile = {
    name: "Srijeet Chatterjee",
    title: "AI Engineering Lead | Senior Machine Learning Engineer",
    tagline: "Architecting 0-to-1 AI Solutions | Generative AI Leader",
    summary: "AI Engineering Lead with 11+ years of experience driving enterprise-wide AI transformation. End-to-end ownership across the ML lifecycle—data strategy, model architecture, feature engineering, training, ML system design, A/B experimentation, deployment, and monitoring. Currently building production agentic AI platforms for media and advertising. Deep expertise in large-scale ML enforcement systems, LLM-powered applications, neural machine translation, and responsible AI.",
    contact: {
      phones: ["+44-7767978269", "+91-8820168039"],
      email: "champ.srijeet@gmail.com",
      location: "London, UK"
    }
  };

  const personalSocialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/srijeet_chatterjee/", icon: "instagram", className: "instagram" },
    { name: "Facebook", url: "https://www.facebook.com/srijeet.chatterjee", icon: "facebook", className: "facebook" },
    { name: "X", url: "https://x.com/champ_srijeet", icon: "twitter", className: "twitter" }
  ];

  const whatsappNumber = "+918820168039";

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/srijeet-chatterjee-a85b0338/", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/chatterjeesrijeet", icon: "github" },
    { name: "Medium", url: "https://medium.com/@srijeetchatterjee", icon: "medium" },
    { name: "LeetCode", url: "https://leetcode.com/u/srijeet_chatterjee/", icon: "leetcode" },
    { name: "Resume", url: "assets/docs/SrijeetChatterjee_Resume_v1.pdf", icon: "file" }
  ];

  const experience = [
    {
      company: "Publicis Media",
      role: "AI Engineering Lead",
      location: "London, UK",
      period: "January 2026 - Present",
      logo: "assets/images/logo/publicis_200.png",
      highlights: [
        "Leading a team of 6 AI engineers to architect and deliver an enterprise-scale Agentic AI platform for programmatic media planning and optimisation.",
        "Designed and deployed 5 specialised AI agents across 5 media channels, with 3 enterprise clients onboarded in the first 6 weeks.",
        "Engineered the complete agentic pipeline using AWS Strands framework (Bedrock) with AWS AgentCore as the managed runtime.",
        "Built the full AI Evaluation & Observability stack using Langfuse, AWS CloudWatch, and Lambda-based event hooks.",
        "Established evaluation benchmarks, guardrails, and responsible AI protocols for agentic behaviour."
      ]
    },
    {
      company: "Meta (WhatsApp Integrity)",
      role: "Senior Software Engineer, Machine Learning",
      location: "London, UK",
      period: "April 2025 - December 2025",
      logo: "assets/images/logo/meta_200.png",
      highlights: [
        "Designed and launched the first neural-network-based enforcement classifier on WhatsApp (2.5B+ MAU), reducing scammer-engaged conversations by 18%.",
        "Identified and pursued the initiative to curb Victim-Initiated Scams—contributing to >50% of all scams on the platform.",
        "Owned full initiative lifecycle: trained classifiers on 300M+ disconnect events and 40M+ wa.me events daily, delivering 11% reduction in SEC topline metric.",
        "Collaborated with SMB team to extend enforcement models to business accounts, broadening integrity coverage."
      ]
    },
    {
      company: "UBS Investment Bank",
      role: "Generative AI Engineer, Director",
      location: "London, UK",
      period: "December 2022 - March 2025",
      logo: "assets/images/logo/ubs_200.png",
      highlights: [
        "Architected and delivered UBS's first generative AI solution in production—a real-time hook generation engine for ~55,000 equity research reports annually.",
        "Designed end-to-end ML system with A/B experimentation framework demonstrating 60% higher client readership.",
        "Accelerated enterprise-wide GenAI adoption while saving 500+ man-hours per year in analyst workflow efficiency.",
        "Led Japanese-English Neural Machine Translation, achieving BLEU score of 0.54 (46% improvement over third-party vendors)."
      ]
    },
    {
      company: "Deloitte",
      role: "Senior Machine Learning Engineer",
      location: "London, UK",
      period: "June 2022 - December 2022",
      logo: "assets/images/logo/deloitte_200.png",
      highlights: [
        "Developed Talk-2-Tables and Talk-2-Docs: LLM-powered solutions using RAG with Chroma vector store.",
        "Designed evaluation criteria, security protocols, and explainability frameworks for enterprise LLM deployments."
      ]
    },
    {
      company: "IBM India Pvt Limited",
      role: "Data Scientist III, Band 7A",
      location: "Bangalore, India",
      period: "July 2019 - March 2022",
      logo: "assets/images/logo/ibm_200.png",
      highlights: [
        "Developed production web APIs for Defect Removal Efficiency metric within CI/CD DevOps pipeline.",
        "Engineered automated problem-solution extractor using POS tagging, SVD-based Quality of Solution scoring.",
        "Designed encoder-decoder architecture for automated solution generation using ReLU-boosted LSTM."
      ]
    },
    {
      company: "Tata Consultancy Services",
      role: "Data Scientist, Advanced Analytics",
      location: "Kolkata, India",
      period: "March 2013 - July 2017",
      logo: "assets/images/logo/tcs_200.png",
      highlights: [
        "Served as SME for eCRM and COPs modules.",
        "Developed offer conversion prediction model achieving 74.68% accuracy for Cognitive Metrics initiative."
      ]
    }
  ];

  const education = [
    { institution: "Indian Institute of Technology (IIT-D)", degree: "Master of Technology in Computer Science Technology", location: "Delhi, India", period: "Aug 2017 - June 2019", logo: "assets/images/logo/iitd_200.png" },
    { institution: "Techno India College of Technology (TICT)", degree: "Bachelor of Technology in Electronics & Communications", location: "Kolkata, India", period: "Aug 2008 - July 2012", logo: "assets/images/logo/techno_200.png" }
  ];

  const achievements = [
    "First Patent File Reward, IBM (December 2021)",
    "AIR 344 in GATE CSE among ~130,000 candidates (2017)",
    "IBM Extra Mile Award (Deep Learning Instructor, 200+ participants)",
    "Best Team Award, TCS (2016)",
    "U.S. Patent Filed - Business Language Processing using LoQoS Score & ReLU-boosted LSTM"
  ];

  const skills = [
    { category: "ML & Deep Learning", skills: ["Transformers", "Attention Mechanisms", "CNNs", "LSTMs", "Encoder-Decoder", "SVD", "Classical ML", "Reinforcement Learning"] },
    { category: "NLP & Language", skills: ["Seq-to-Seq", "POS Tagging", "Text Mining", "NER", "Neural Machine Translation", "RAG", "Information Retrieval"] },
    { category: "Agentic & Generative AI", skills: ["LangChain", "LangGraph", "CrewAI", "AWS Strands", "AWS Bedrock Agent", "AWS AgentCore", "MCP", "OpenAI API", "LoRA/QLoRA"] },
    { category: "AI & ML Frameworks", skills: ["PyTorch", "Keras", "Scikit-learn", "OpenCV", "Hugging Face Transformers"] },
    { category: "Evaluation & Observability", skills: ["Langfuse", "MLFlow", "DVC", "AWS CloudWatch", "AWS Lambda", "Custom Evaluation Pipelines"] },
    { category: "ML System Design & MLOps", skills: ["End-to-end ML Pipelines", "Feature Engineering", "Model Serving", "A/B Experimentation", "Docker", "Kubernetes", "Jenkins", "Databricks", "CI/CD"] },
    { category: "Cloud & Infrastructure", skills: ["AWS Bedrock", "AWS Lambda", "AWS AgentCore", "Azure Cognitive Services", "Git"] },
    { category: "Languages & Data", skills: ["Python", "C++", "Java", "SQL", "FastAPI", "Flask", "Streamlit", "NumPy", "Pandas"] },
    { category: "Vector & Data Stores", skills: ["Qdrant", "Chroma", "FAISS", "Oracle", "Cloudant"] }
  ];

  const mentorship = [
    { title: "FAANG Interview Prep", description: "Comprehensive guidance for cracking Data Science and ML Engineering interviews at top-tier tech companies.", icon: "users" },
    { title: "Mock Interviews", description: "Realistic mock interviews for Data Scientist and ML Engineer roles with detailed feedback.", icon: "clock" },
    { title: "ML Strategy & Discussions", description: "Deep dive into specific ML topics, paper implementations, or architectural reviews for your projects.", icon: "book" }
  ];

  const localPhotos = {
    travel: [
      "assets/images/travel/IMG_0071.jpg",
      "assets/images/travel/IMG_2054.jpg"
    ],
    family: [
      "assets/images/family/IMG_0173.jpg",
      "assets/images/family/IMG_2905.jpg",
      "assets/images/family/IMG_0541.jpg"
    ],
    friends: [
      "assets/images/friends/IMG_5392.jpg",
      "assets/images/friends/IMG_0173.jpg",
      "assets/images/friends/IMG_8842.jpg",
      "assets/images/friends/IMG_5394.jpg",
      "assets/images/friends/IMG_3804.jpg",
      "assets/images/friends/IMG_3209.jpg",
      "assets/images/friends/IMG_3206.jpg",
      "assets/images/friends/IMG_0135.jpg",
      "assets/images/friends/IMG_4974.jpg",
      "assets/images/friends/IMG_9512.jpg",
      "assets/images/friends/IMG_1328.jpg",
      "assets/images/friends/IMG_2974.jpg",
      "assets/images/friends/IMG_3048.jpg",
      "assets/images/friends/IMG_0541.jpg",
      "assets/images/friends/IMG_3074.jpg"
    ]
  };

  const photos = Object.entries(localPhotos).flatMap(([category, paths]) =>
    paths.map((url, idx) => ({
      url,
      category,
      caption: `${category.charAt(0).toUpperCase() + category.slice(1)} ${idx + 1}`
    }))
  );

  // SVG placeholder with initials while loading
  const PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%230f192c' width='200' height='200'/%3E%3Ctext x='100' y='115' font-family='Inter,system-ui,sans-serif' font-size='72' font-weight='700' fill='%2310b981' text-anchor='middle'%3ESC%3C/text%3E%3C/svg%3E";

  const el = (tag, className, text) => {
    const n = document.createElement(tag);
    if(className) n.className = className;
    if(text) n.textContent = text;
    return n;
  };

  function createIcon(name, size = 18){
    const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    const path = (d) => { const p=document.createElementNS("http://www.w3.org/2000/svg","path"); p.setAttribute("d", d); return p; };
    const circle = (cx,cy,r) => { const c=document.createElementNS("http://www.w3.org/2000/svg","circle"); c.setAttribute("cx",cx); c.setAttribute("cy",cy); c.setAttribute("r",r); return c; };
    switch(name){
      case "eye":
        svg.append(path("M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"));
        svg.append(circle(12,12,3));
        break;
      case "heart":
        svg.append(path("M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21l7.78-7.55 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"));
        break;
      case "map":
        svg.append(path("M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z"));
        svg.append(circle(12,10,3));
        break;
      case "calendar":
        svg.append(path("M3 4h18v18H3z"));
        svg.append(path("M16 2v4"));
        svg.append(path("M8 2v4"));
        svg.append(path("M3 10h18"));
        break;
      case "clock":
        svg.append(circle(12,12,10));
        svg.append(path("M12 6v6l4 2"));
        break;
      case "users":
        svg.append(path("M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"));
        svg.append(circle(9,7,4));
        svg.append(path("M23 21v-2a4 4 0 0 0-3-3.87"));
        svg.append(path("M16 3.13a4 4 0 0 1 0 7.75"));
        break;
      case "book":
        svg.append(path("M4 19.5A2.5 2.5 0 0 1 6.5 17H20"));
        svg.append(path("M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"));
        break;
      case "github":
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("stroke", "none");
        svg.append(path("M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"));
        break;
      case "linkedin":
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("stroke", "none");
        svg.append(path("M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"));
        break;
      case "medium":
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("stroke", "none");
        svg.append(path("M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"));
        break;
      case "leetcode":
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("stroke", "none");
        svg.append(path("M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 00-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"));
        break;
      case "whatsapp":
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("stroke", "none");
        svg.append(path("M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"));
        break;
      case "instagram":
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("stroke", "none");
        svg.append(path("M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"));
        break;
      case "facebook":
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("stroke", "none");
        svg.append(path("M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"));
        break;
      case "twitter":
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("stroke", "none");
        svg.append(path("M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"));
        break;
      case "mail":
        svg.append(path("M4 4h16v16H4z"));
        svg.append(path("m4 7 8 5 8-5"));
        break;
      case "phone":
        svg.append(path("M22 16.92V21a1 1 0 0 1-1.09 1 19.79 19.79 0 0 1-8.63-3.12 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 3.09 1 1 0 0 1 4 2h4.09a1 1 0 0 1 1 .75 12.84 12.84 0 0 0 .7 2.21 1 1 0 0 1-.23 1L8.6 7.91a16 16 0 0 0 6 6l1.95-1a1 1 0 0 1 1 .06 12.84 12.84 0 0 0 2.21.7 1 1 0 0 1 .75 1Z"));
        break;
      case "file":
        svg.append(path("M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"));
        svg.append(path("M14 2v6h6"));
        break;
      case "code":
        svg.append(path("M16 18l6-6-6-6"));
        svg.append(path("M8 6l-6 6 6 6"));
        break;
      case "trophy":
        svg.append(path("M6 9H4.5a2.5 2.5 0 0 1 0-5H6"));
        svg.append(path("M18 9h1.5a2.5 2.5 0 0 0 0-5H18"));
        svg.append(path("M4 22h16"));
        svg.append(path("M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"));
        svg.append(path("M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"));
        svg.append(path("M18 2H6v7a6 6 0 0 0 12 0V2Z"));
        break;
      case "award":
        svg.append(circle(12, 8, 6));
        svg.append(path("M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"));
        break;
      case "star":
        svg.append(path("M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"));
        break;
      case "graduation":
        svg.append(path("M22 10v6M2 10l10-5 10 5-10 5z"));
        svg.append(path("M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"));
        break;
      default:
        svg.append(path("M12 5v14"));
        svg.append(path("M5 12h14"));
    }
    return svg;
  }

  function renderHero(){
    const nameEl = document.getElementById("heroName");
    const taglineEl = document.getElementById("heroTagline");
    const summaryEl = document.getElementById("heroSummary");
    if(nameEl) nameEl.textContent = profile.name;
    if(taglineEl) taglineEl.textContent = profile.tagline;
    if(summaryEl) summaryEl.textContent = profile.summary;
  }

  function renderSocialRows(){
    const heroSocial = document.getElementById("socialRow");
    const footerSocial = document.getElementById("footerSocial");
    if(heroSocial){
      socialLinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.title = link.name;
        a.appendChild(createIcon(link.icon, 20));
        heroSocial.appendChild(a);
      });
    }
    if(footerSocial){
      socialLinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.title = link.name;
        a.appendChild(createIcon(link.icon, 22));
        footerSocial.appendChild(a);
      });
    }
  }

  function renderExperience(){
    const wrap = document.getElementById("experienceList");
    if(!wrap) return;
    wrap.innerHTML = "";
    experience.forEach(item => {
      const card = el("div", "timeline-card");

      // Company name with inline logo
      const title = el("h4", "company-title");
      if(item.logo) {
        const logoImg = document.createElement("img");
        logoImg.src = item.logo;
        logoImg.alt = "";
        logoImg.className = "company-logo-inline";
        logoImg.onerror = function() { this.style.display = 'none'; };
        title.appendChild(logoImg);
      }
      title.appendChild(document.createTextNode(item.company));

      const role = el("h5", "", item.role);

      const meta = el("div", "timeline-meta");
      const loc = el("span", "meta-item");
      loc.append(createIcon("map", 14), document.createTextNode(item.location));
      const period = el("span", "meta-item");
      period.append(createIcon("calendar", 14), document.createTextNode(item.period));
      meta.append(loc, period);

      const list = document.createElement("ul");
      item.highlights.forEach(pt => {
        const li = document.createElement("li");
        li.textContent = pt;
        list.appendChild(li);
      });

      card.append(title, role, meta, list);
      wrap.appendChild(card);
    });
  }

  function renderEducation(){
    const wrap = document.getElementById("educationList");
    if(!wrap) return;
    wrap.innerHTML = "";
    education.forEach(item => {
      const card = el("div", "card");

      // Institution name with inline logo
      const title = el("div", "edu-card-title");
      if(item.logo) {
        const logoImg = document.createElement("img");
        logoImg.src = item.logo;
        logoImg.alt = "";
        logoImg.className = "edu-logo-inline";
        title.appendChild(logoImg);
      }
      title.appendChild(document.createTextNode(item.institution));

      const degree = el("div", "muted", item.degree);
      const meta = el("div", "edu-card-meta");
      const left = el("span", "", item.period);
      const right = el("span", "", item.location);
      meta.append(left, right);

      card.append(title, degree, meta);
      wrap.appendChild(card);
    });
  }

  function renderAchievements(){
    const list = document.getElementById("achievementsList");
    if(!list) return;
    list.innerHTML = "";
    achievements.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }

  function renderSkills(){
    const grid = document.getElementById("skillsGrid");
    if(!grid) return;
    grid.innerHTML = "";
    skills.forEach(group => {
      const card = el("div", "skill-card");
      const h4 = el("h4", "", group.category);
      const chipWrap = el("div", "chips");
      group.skills.forEach(skill => {
        chipWrap.appendChild(el("span", "chip", skill));
      });
      card.append(h4, chipWrap);
      grid.appendChild(card);
    });
  }

  function renderMentorship(){
    const grid = document.getElementById("mentorshipGrid");
    if(!grid) return;
    grid.innerHTML = "";
    mentorship.forEach(item => {
      const card = el("div", "mentorship-card");
      const iconWrap = el("div", "icon-wrap");
      iconWrap.appendChild(createIcon(item.icon, 28));
      const title = el("div", "edu-card-title", item.title);
      const desc = el("p", "muted", item.description);
      card.append(iconWrap, title, desc);
      grid.appendChild(card);
    });
  }

  let currentFilter = "all";
  function renderPhotos(){
    const grid = document.getElementById("photoGrid");
    if(!grid) return;
    grid.innerHTML = "";
    photos
      .filter(p => currentFilter === "all" ? true : p.category === currentFilter)
      .forEach(photo => {
        const card = el("div", "photo-card");
        const img = document.createElement("img");
        img.alt = photo.caption;
        img.loading = "lazy";
        img.addEventListener("click", ()=> openPhoto(photo.url));
        const overlay = el("div", "overlay");
        const cap = el("div", "caption", photo.caption);
        overlay.appendChild(cap);
        card.append(img, overlay);
        grid.appendChild(card);
        setPhotoSource(img, photo.url, card);
      });
  }

  function setPhotoSource(imgEl, url, cardEl){
    imgEl.src = url;
    imgEl.onerror = ()=> {
      // Remove broken items so no unexpected fallback image appears
      if(cardEl && cardEl.parentNode){
        cardEl.parentNode.removeChild(cardEl);
      }
    };
  }

  function bindPhotoFilters(){
    const row = document.getElementById("photoFilters");
    if(!row) return;
    Array.from(row.querySelectorAll("button")).forEach(btn => {
      btn.addEventListener("click", ()=>{
        currentFilter = btn.dataset.filter || "all";
        row.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderPhotos();
      });
    });
  }

  async function loadProfileImage(){
    const imgEl = document.getElementById("profilePhoto");
    if(!imgEl) return;
    imgEl.src = PLACEHOLDER_SVG;
    const fav = document.querySelector("link[rel='icon']");
    const jpgUrl = "assets/images/profile/sri_profile_image.jpg";
    const heicUrl = "assets/images/profile/sri_profile_image.HEIC";
    const setImg = (url) => { imgEl.src = url; if(fav) fav.href = url; };

    // Try loading the JPG directly
    const img = new Image();
    img.onload = () => setImg(jpgUrl);
    img.onerror = async () => {
      // Try HEIC conversion as fallback
      try {
        const resp = await fetch(heicUrl);
        if(resp.ok && window.heic2any){
          const blob = await resp.blob();
          const converted = await window.heic2any({blob, toType:"image/jpeg", quality:0.82});
          const finalBlob = Array.isArray(converted) ? converted[0] : converted;
          const url = URL.createObjectURL(finalBlob);
          setImg(url);
        }
      } catch(err) {
        console.warn("HEIC convert failed", err);
        // Keep placeholder if all fails
      }
    };
    img.src = jpgUrl;
  }

  function initCounters(){
    const visitsStat = document.getElementById("visitsStat");
    const likeBtn = document.getElementById("likeButton");
    if(!visitsStat || !likeBtn) return;
    const visitsSpan = el("span", "", "");
    visitsStat.innerHTML = "";
    visitsStat.append(createIcon("eye", 18), visitsSpan, document.createTextNode(" Visits"));

    const likeCount = el("span", "likes-count", "");
    likeBtn.innerHTML = "";
    likeBtn.append(createIcon("heart", 18), likeCount, document.createTextNode(" Likes"));

    const visitKey = "sc_visits";
    const likeKey = "sc_likes";
    const likedKey = "sc_liked";
    const currentVisits = Number(localStorage.getItem(visitKey) || 1046) + 1;
    localStorage.setItem(visitKey, currentVisits);
    visitsSpan.textContent = currentVisits.toLocaleString();

    const storedLikes = Number(localStorage.getItem(likeKey) || 0);
    likeCount.textContent = storedLikes.toLocaleString();

    let hasLiked = localStorage.getItem(likedKey) === "1";
    likeBtn.addEventListener("click", ()=>{
      if(hasLiked) return;
      const newLikes = Number(localStorage.getItem(likeKey) || 0) + 1;
      localStorage.setItem(likeKey, newLikes);
      localStorage.setItem(likedKey, "1");
      likeCount.textContent = newLikes.toLocaleString();
      hasLiked = true;
      likeBtn.classList.add("liked");
    });
  }

  function bindNav(){
    const nav = document.getElementById("siteNav");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    window.addEventListener("scroll", ()=>{
      if(!nav) return;
      nav.classList.toggle("scrolled", window.scrollY > 20);
    });
    if(toggle && links){
      toggle.addEventListener("click", ()=>{
        links.classList.toggle("open");
      });
      links.querySelectorAll("a").forEach(a => a.addEventListener("click", ()=>links.classList.remove("open")));
    }
  }

  function bindFooter(){
    const list = document.getElementById("contactList");
    if(list){
      list.innerHTML = "";
      // Email
      const emailLi = document.createElement("li");
      const emailSpan = document.createElement("span");
      emailSpan.style.display = "inline-flex";
      emailSpan.style.alignItems = "center";
      emailSpan.style.gap = "8px";
      emailSpan.append(createIcon("mail", 16), document.createTextNode(profile.contact.email));
      emailLi.appendChild(emailSpan);
      list.appendChild(emailLi);

      // Phone numbers
      profile.contact.phones.forEach(phone => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.style.display = "inline-flex";
        span.style.alignItems = "center";
        span.style.gap = "8px";
        span.append(createIcon("phone", 16), document.createTextNode(phone));
        li.appendChild(span);
        list.appendChild(li);
      });

      // Location
      const locLi = document.createElement("li");
      const locSpan = document.createElement("span");
      locSpan.style.display = "inline-flex";
      locSpan.style.alignItems = "center";
      locSpan.style.gap = "8px";
      locSpan.append(createIcon("map", 16), document.createTextNode(profile.contact.location));
      locLi.appendChild(locSpan);
      list.appendChild(locLi);
    }
    const yearEl = document.getElementById("year");
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function initBookingModal(){
    // EmailJS Configuration
    const EMAILJS_PUBLIC_KEY = "NZxNsxde8OaH9yWYG";
    const EMAILJS_SERVICE_ID = "service_x40eb4n";
    const EMAILJS_OTP_TEMPLATE = "template_znvifkm";
    const OWNER_EMAIL = "champ.srijeet@gmail.com";
    const OWNER_WHATSAPP = "918820168039";

    // DOM Elements
    const openBtn = document.getElementById("bookingBtn");
    const modal = document.getElementById("bookingModal");
    const closeBtn = document.getElementById("modalClose");
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const emailInput = document.getElementById("modalEmail");
    const codeInput = document.getElementById("modalCode");
    const sendBtn = document.getElementById("sendCodeBtn");
    const verifyBtn = document.getElementById("verifyOtpBtn");
    const firstNameInput = document.getElementById("modalFirstName");
    const lastNameInput = document.getElementById("modalLastName");
    const phoneInput = document.getElementById("modalPhone");
    const dateInput = document.getElementById("modalDate");
    const timeSelect = document.getElementById("modalTime");
    const durationButtons = Array.from(document.querySelectorAll("#durationRow .pill-btn"));
    const confirmBtn = document.getElementById("confirmBookingBtn");
    const status = document.getElementById("modalStatus");

    // State
    let generatedOTP = null;
    let otpExpiry = null;
    let isVerified = false;
    let selectedDuration = null;

    // Helper functions
    const showStatus = (msg, isError = false) => {
      status.textContent = msg;
      status.style.color = isError ? "#f87171" : "#10b981";
    };

    const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

    const show = () => {
      modal && modal.classList.remove("hidden");
      resetModal();
    };

    const hide = () => {
      modal && modal.classList.add("hidden");
      resetModal();
    };

    const resetModal = () => {
      isVerified = false;
      generatedOTP = null;
      otpExpiry = null;
      selectedDuration = null;
      emailInput.value = "";
      codeInput.value = "";
      codeInput.disabled = true;
      verifyBtn.disabled = true;
      firstNameInput.value = "";
      lastNameInput.value = "";
      phoneInput.value = "";
      dateInput.value = "";
      timeSelect.innerHTML = '<option value="">Choose a slot</option>';
      step2.classList.add("disabled-step");
      [firstNameInput, lastNameInput, phoneInput, dateInput, timeSelect, confirmBtn].forEach(el => el.disabled = true);
      durationButtons.forEach(btn => { btn.disabled = true; btn.classList.remove("active"); });
      status.textContent = "";
    };

    // Setup date picker - weekends only, 48 hours minimum
    const setupDatePicker = () => {
      const now = new Date();
      const minDate = new Date(now.getTime() + 48 * 60 * 60 * 1000); // 48 hours from now

      // Find next available weekend
      while (minDate.getDay() !== 0 && minDate.getDay() !== 6) {
        minDate.setDate(minDate.getDate() + 1);
      }

      // Set min date
      dateInput.min = minDate.toISOString().split('T')[0];

      // Set max date (3 months ahead)
      const maxDate = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000);
      dateInput.max = maxDate.toISOString().split('T')[0];
    };

    // Populate time slots (10 AM - 6 PM IST)
    const populateTimeSlots = () => {
      timeSelect.innerHTML = '<option value="">Choose a slot</option>';
      const slots = [];
      for (let hour = 10; hour < 18; hour++) {
        const h12 = hour > 12 ? hour - 12 : hour;
        const ampm = hour >= 12 ? "PM" : "AM";
        slots.push({ value: `${hour}:00`, label: `${h12}:00 ${ampm}` });
        slots.push({ value: `${hour}:30`, label: `${h12}:30 ${ampm}` });
      }
      slots.push({ value: "18:00", label: "6:00 PM" });

      slots.forEach(slot => {
        const opt = document.createElement("option");
        opt.value = slot.value;
        opt.textContent = slot.label + " IST";
        timeSelect.appendChild(opt);
      });
    };

    // Validate weekend selection
    dateInput.addEventListener("change", () => {
      const selected = new Date(dateInput.value);
      const day = selected.getDay();
      if (day !== 0 && day !== 6) {
        showStatus("Please select a weekend (Saturday or Sunday)", true);
        dateInput.value = "";
      } else {
        status.textContent = "";
      }
    });

    // Modal open/close
    openBtn && openBtn.addEventListener("click", show);
    closeBtn && closeBtn.addEventListener("click", hide);
    modal && modal.addEventListener("click", (e) => { if (e.target === modal) hide(); });

    // Send OTP
    sendBtn && sendBtn.addEventListener("click", async () => {
      const email = emailInput.value.trim();
      if (!email || !email.includes("@") || !email.includes(".")) {
        showStatus("Please enter a valid email address.", true);
        return;
      }

      sendBtn.disabled = true;
      sendBtn.textContent = "Sending...";

      generatedOTP = generateOTP();
      otpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes validity

      // Try to send via EmailJS
      try {
        if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
          await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_OTP_TEMPLATE, {
            to_email: email,
            otp_code: generatedOTP,
            expiry_minutes: "10"
          });
          showStatus(`OTP sent to ${email}. Check your inbox.`);
        } else {
          // Demo mode - show OTP in console (remove in production)
          console.log("Demo OTP:", generatedOTP);
          showStatus(`Demo mode: OTP is ${generatedOTP} (configure EmailJS for production)`);
        }
        codeInput.disabled = false;
        verifyBtn.disabled = false;
        codeInput.focus();
      } catch (err) {
        console.error("EmailJS error:", err);
        showStatus("Failed to send OTP. Please try again.", true);
      }

      sendBtn.disabled = false;
      sendBtn.textContent = "Resend OTP";
    });

    // Verify OTP
    verifyBtn && verifyBtn.addEventListener("click", () => {
      const enteredOTP = codeInput.value.trim();

      if (!generatedOTP || Date.now() > otpExpiry) {
        showStatus("OTP expired. Please request a new one.", true);
        return;
      }

      if (enteredOTP !== generatedOTP) {
        showStatus("Invalid OTP. Please try again.", true);
        return;
      }

      // OTP verified - enable step 2
      isVerified = true;
      showStatus("Email verified! Please fill in the booking details.");

      step2.classList.remove("disabled-step");
      [firstNameInput, lastNameInput, phoneInput, dateInput, timeSelect, confirmBtn].forEach(el => el.disabled = false);
      durationButtons.forEach(btn => btn.disabled = false);

      setupDatePicker();
      populateTimeSlots();
      firstNameInput.focus();
    });

    // Duration selection
    durationButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        durationButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedDuration = btn.dataset.duration;
      });
    });

    // Confirm booking
    confirmBtn && confirmBtn.addEventListener("click", () => {
      if (!isVerified) {
        showStatus("Please verify your email first.", true);
        return;
      }

      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const phone = phoneInput.value.trim();
      const date = dateInput.value;
      const time = timeSelect.value;
      const email = emailInput.value.trim();

      // Validation
      if (!firstName || !lastName) {
        showStatus("Please enter your full name.", true);
        return;
      }
      if (!phone || phone.length < 10) {
        showStatus("Please enter a valid phone number.", true);
        return;
      }
      if (!selectedDuration) {
        showStatus("Please select a session duration.", true);
        return;
      }
      if (!date) {
        showStatus("Please select a date.", true);
        return;
      }
      if (!time) {
        showStatus("Please select a time slot.", true);
        return;
      }

      // Format date nicely
      const dateObj = new Date(date);
      const formattedDate = dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      // Create WhatsApp message
      const message = `🗓️ *New Booking Request*

*From:* ${firstName} ${lastName}
*Email:* ${email}
*Phone:* ${phone}

*Session:* ${selectedDuration} minutes
*Date:* ${formattedDate}
*Time:* ${time} IST

Please confirm availability.`;

      const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;

      // Show confirmation message
      showStatus("Redirecting to WhatsApp to confirm your booking...");

      // Show success modal content
      setTimeout(() => {
        const modalContent = modal.querySelector(".modal-content");
        modalContent.innerHTML = `
          <button class="modal-close" id="modalCloseSuccess" aria-label="Close">×</button>
          <div class="booking-success">
            <div class="success-icon">✓</div>
            <h3>Booking Request Submitted!</h3>
            <p class="muted">Thank you, ${firstName}!</p>
            <p>I'll review your request and get back to you within <strong>24 hours</strong> to confirm availability.</p>
            <div class="booking-summary">
              <p><strong>Session:</strong> ${selectedDuration} minutes</p>
              <p><strong>Date:</strong> ${formattedDate}</p>
              <p><strong>Time:</strong> ${time} IST</p>
            </div>
            <p class="muted small">A WhatsApp message has been prepared. Please send it to complete your request.</p>
            <a href="${whatsappUrl}" target="_blank" class="btn primary full-width whatsapp-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Send WhatsApp Message
            </a>
          </div>
        `;

        // Re-attach close button listener
        document.getElementById("modalCloseSuccess").addEventListener("click", () => {
          hide();
          location.reload(); // Reload to reset modal
        });
      }, 500);
    });

    // Initialize EmailJS
    if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }

  function renderPhotosAndFilters(){
    bindPhotoFilters();
    renderPhotos();
  }

  function renderFloatingWhatsApp(){
    const whatsappLink = document.createElement("a");
    whatsappLink.href = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noreferrer";
    whatsappLink.className = "whatsapp-float";
    whatsappLink.title = "Chat on WhatsApp";
    whatsappLink.appendChild(createIcon("whatsapp", 32));
    document.body.appendChild(whatsappLink);
  }

  function renderPersonalSocial(){
    const lifestyleSection = document.getElementById("lifestyle");
    if(!lifestyleSection) return;
    const container = lifestyleSection.querySelector(".container");
    if(!container) return;

    const socialRow = el("div", "personal-social-row");
    personalSocialLinks.forEach(link => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.title = link.name;
      a.className = link.className;
      a.appendChild(createIcon(link.icon, 24));
      socialRow.appendChild(a);
    });
    container.appendChild(socialRow);
  }

  let photoModal, photoModalImg, photoModalClose;
  function initPhotoModal(){
    photoModal = document.getElementById("photoModal");
    photoModalImg = document.getElementById("photoModalImg");
    photoModalClose = document.getElementById("photoModalClose");
    if(photoModalClose) photoModalClose.addEventListener("click", closePhotoModal);
    if(photoModal) photoModal.addEventListener("click", (e)=> { if(e.target === photoModal) closePhotoModal(); });
  }

  function openPhoto(src){
    if(photoModal && photoModalImg){
      photoModalImg.src = src;
      photoModal.classList.add("open");
    }
  }

  function closePhotoModal(){
    if(photoModal && photoModalImg){
      photoModalImg.src = "";
      photoModal.classList.remove("open");
    }
  }

  function init(){
    renderHero();
    renderSocialRows();
    renderExperience();
    renderEducation();
    renderAchievements();
    renderSkills();
    renderMentorship();
    renderPhotosAndFilters();
    renderPersonalSocial();
    renderFloatingWhatsApp();
    bindNav();
    bindFooter();
    initCounters();
    initBookingModal();
    initPhotoModal();
    loadProfileImage();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
