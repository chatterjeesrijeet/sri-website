// Rebuilt front-end logic to match the reference UI: renders resume data, gallery, counters, and lightweight booking modal.
(function(){
  const profile = {
    name: "Srijeet Chatterjee",
    title: "Senior Machine Learning Engineer",
    tagline: "Architecting 0-to-1 AI Solutions | Generative AI Leader | 10+ Years Experience",
    summary: "Exceptional Data Science Professional with a proven track record of delivering innovative AI-powered solutions. Expertise in leading cross-functional teams, developing advanced ML models, and implementing state-of-the-art algorithms from data collection to deployment. Recognized for strategic thinking and driving measurable business outcomes.",
    contact: {
      phone: "+44-7767978269",
      email: "champ.srijeet@gmail.com",
      location: "London, UK"
    }
  };

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/srijeet-chatterjee-a85b0338/", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/chatterjeesrijeet", icon: "github" },
    { name: "Medium", url: "https://medium.com/@srijeetchatterjee", icon: "book" },
    { name: "LeetCode", url: "https://leetcode.com/u/srijeet_chatterjee/", icon: "code" },
    { name: "Resume", url: "context_docs/chatterjeeSrijeet.pdf", icon: "file" }
  ];

  const experience = [
    {
      company: "Meta (WhatsApp Integrity)",
      role: "Senior Software Engineer, Machine Learning",
      location: "London, UK",
      period: "April 2025 - Present",
      highlights: [
        "Designing and implementing the first Neural Network based classifier to enforce on bad actors (SCAM) on the platform.",
        "Achieved an 18% reduction in scammer engaged conversations through strategic model deployment.",
        "Supervised Finetuning of Llama 7B vs 70B models using Low-Rank Adaptation (LoRA) to optimize appeal process evaluations."
      ]
    },
    {
      company: "UBS Investment Bank",
      role: "Generative AI Engineer, Director",
      location: "London, UK",
      period: "Dec 2022 - Mar 2025",
      highlights: [
        "Led the design and implementation of the FIRST Generative AI use-case approved for production within Investment Banking.",
        "Developed a real-time 'Hook Generation' solution for equity research reports, processing 55k reports annually.",
        "Drove business value with A/B tests showing 60% increase in client readership.",
        "Saved 500 Man-Hours (avg) annually while accelerating GenAI adoption across the firm.",
        "Led Japanese-English Neural Machine Translation (NMT) initiatives, achieving a BLEU score of 0.54 (46% improvement over 3rd party vendors)."
      ]
    },
    {
      company: "Deloitte",
      role: "Senior Machine Learning Engineer",
      location: "London, UK",
      period: "June 2022 - Dec 2022",
      highlights: [
        "Developed 'Talk-2-Tables' & 'Talk-2-Docs' solutions using RAG (Retrieval Augmented Generation) with Chroma vector DB.",
        "Established comprehensive evaluation criteria for LLM solutions focusing on security and explainability."
      ]
    },
    {
      company: "IBM India Pvt Limited",
      role: "Data Scientist III (Band 7A)",
      location: "Bangalore, India",
      period: "July 2019 - March 2022",
      highlights: [
        "Developed automated problem-solution extractor and ranking algorithms for AT&T using NLP (POS tagging, SVD).",
        "Designed deep learning encoder-decoder architectures (ReLU boosted LSTM) for solution generation.",
        "Created multi-document text analyzers for Wells Fargo using Watson Knowledge Services.",
        "Published patent on Business Language Processing using Latent Space oriented Quality of Solution (LoQoS)."
      ]
    },
    {
      company: "Tata Consultancy Services Ltd",
      role: "Data Scientist, Advanced Analytics",
      location: "Kolkata, India",
      period: "March 2013 - July 2017",
      highlights: [
        "Developed 'offer conversion' prediction models achieving 74.68% accuracy.",
        "Served as SME for eCRM and COPs (Centralized Offer Palette System) modules."
      ]
    }
  ];

  const education = [
    { institution: "Indian Institute of Technology (IIT-D)", degree: "Master of Technology in Computer Science Technology", location: "Delhi, India", period: "Aug 2017 - June 2019" },
    { institution: "Techno India College of Technology (TICT)", degree: "Bachelor of Technology in Electronics & Communications", location: "Kolkata, India", period: "Aug 2008 - July 2012" }
  ];

  const achievements = [
    "First Patent File Reward (Dec 2021)",
    "AIR 344 in GATE CSE (Top 0.2%)",
    "IBM Extra Mile Award (Deep Learning Training)"
  ];

  const skills = [
    { category: "Generative AI & LLMs", skills: ["LangChain", "LangGraph", "CrewAI", "Agentic AI", "OpenAI API", "RAG", "Llama", "LoRA"] },
    { category: "Languages & Core", skills: ["Python", "C++", "Java", "SQL", "MATLAB", "Data Structures", "Algorithms"] },
    { category: "ML Frameworks", skills: ["PyTorch", "TensorFlow/Keras", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "NLTK"] },
    { category: "MLOps & Cloud", skills: ["Docker", "Kubernetes", "Azure Cognitive Services", "MLFlow", "Databricks", "Jenkins", "Git", "DVC"] },
    { category: "Vector DBs", skills: ["Qdrant", "Chroma", "FAISS", "Oracle"] }
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
      "assets/images/friends/IMG_3074.jpg",
      "assets/images/friends/59180302-983f-4180-9f19-515ba0916939.jpg"
    ]
  };

  const photos = Object.entries(localPhotos).flatMap(([category, paths]) =>
    paths.map((url, idx) => ({
      url,
      category,
      caption: `${category.charAt(0).toUpperCase() + category.slice(1)} ${idx + 1}`
    }))
  );

  const FALLBACK_PHOTO = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80";

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
        svg.append(path("M9 19c-5 1.5-5-2.5-7-3"));
        svg.append(path("M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61"));
        svg.append(path("M12 17c-7 0-7-4-9-5"));
        svg.append(path("M12 12a3.37 3.37 0 0 0 1-2.61V5"));
        svg.append(path("M15 5.1c.42-1.23.42-2.6 0-3.8 0 0-1.4-.2-3 .9-1.6-1.1-3-.9-3-.9-.42 1.2-.42 2.6 0 3.8 0 1.9 1 3.5 3 4"));
        break;
      case "linkedin":
        svg.append(path("M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"));
        svg.append(path("M2 9h4v12H2z"));
        svg.append(circle(4,4,2));
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
      const title = el("h4", "", item.company);
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
      const title = el("div", "edu-card-title", item.institution);
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
    imgEl.src = FALLBACK_PHOTO;
    const fav = document.querySelector("link[rel='icon']");
    const jpgUrl = "assets/images/profile/sri_profile_image.jpg";
    const heicUrl = "assets/images/profile/sri_profile_image.HEIC";
    const tryHead = async (url) => { try { const r = await fetch(url, {method:"HEAD"}); return r.ok; } catch { return false; } };
    const setImg = (url) => { imgEl.src = url; if(fav) fav.href = url; };

    if(await tryHead(jpgUrl)) { setImg(jpgUrl); return; }
    if(await tryHead(heicUrl)){
      try{
        const resp = await fetch(heicUrl);
        if(resp.ok && window.heic2any){
          const blob = await resp.blob();
          const converted = await window.heic2any({blob, toType:"image/jpeg", quality:0.82});
          const finalBlob = Array.isArray(converted) ? converted[0] : converted;
          const url = URL.createObjectURL(finalBlob);
          setImg(url);
          return;
        }
      }catch(err){
        console.warn("HEIC convert failed", err);
      }
    }
    setImg(FALLBACK_PHOTO);
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
      [
        { label: profile.contact.email, icon: "mail" },
        { label: profile.contact.phone, icon: "phone" },
        { label: profile.contact.location, icon: "map" }
      ].forEach(item => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.style.display = "inline-flex";
        span.style.alignItems = "center";
        span.style.gap = "8px";
        span.append(createIcon(item.icon, 16), document.createTextNode(item.label));
        li.appendChild(span);
        list.appendChild(li);
      });
    }
    const yearEl = document.getElementById("year");
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function initBookingModal(){
    const openBtn = document.getElementById("bookingBtn");
    const modal = document.getElementById("bookingModal");
    const closeBtn = document.getElementById("modalClose");
    const durationButtons = Array.from(document.querySelectorAll(".pill-btn"));
    const emailInput = document.getElementById("modalEmail");
    const codeInput = document.getElementById("modalCode");
    const sendBtn = document.getElementById("sendCodeBtn");
    const confirmBtn = document.getElementById("confirmBookingBtn");
    const status = document.getElementById("modalStatus");

    let duration = null;
    const show = () => modal && modal.classList.remove("hidden");
    const hide = () => modal && modal.classList.add("hidden");

    openBtn && openBtn.addEventListener("click", show);
    closeBtn && closeBtn.addEventListener("click", hide);
    modal && modal.addEventListener("click", (e)=>{ if(e.target === modal) hide(); });

    durationButtons.forEach(btn => {
      btn.addEventListener("click", ()=>{
        durationButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        duration = btn.dataset.duration;
      });
    });

    sendBtn && sendBtn.addEventListener("click", ()=>{
      status.textContent = "";
      const email = emailInput.value.trim();
      if(!email.includes("@")){
        status.textContent = "Please enter a valid email.";
        status.style.color = "#f87171";
        return;
      }
      status.textContent = "Verification code sent to " + email;
      status.style.color = "#10b981";
    });

    confirmBtn && confirmBtn.addEventListener("click", ()=>{
      const email = emailInput.value.trim();
      const code = codeInput.value.trim();
      if(!duration){
        status.textContent = "Pick a slot length first.";
        status.style.color = "#f87171";
        return;
      }
      if(!email || !code){
        status.textContent = "Enter email and the verification code.";
        status.style.color = "#f87171";
        return;
      }
      status.textContent = `Booked ${duration} min session for ${email}.`;
      status.style.color = "#10b981";
    });
  }

  function renderPhotosAndFilters(){
    bindPhotoFilters();
    renderPhotos();
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
    bindNav();
    bindFooter();
    initCounters();
    initBookingModal();
    initPhotoModal();
    loadProfileImage();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
