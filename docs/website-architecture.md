# Portfolio Website Architecture

## Overview

A modern, single-page portfolio website built with vanilla JavaScript, hosted on **GitHub Pages** with a secure **Vercel serverless backend** for the booking system.

**Live URL:** `https://srijeetchatterjee.com`

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           PORTFOLIO WEBSITE ARCHITECTURE                             │
└─────────────────────────────────────────────────────────────────────────────────────┘

                                    ┌─────────────────┐
                                    │     User        │
                                    │   (Browser)     │
                                    └────────┬────────┘
                                             │
                         ┌───────────────────┼───────────────────┐
                         │                   │                   │
                         ▼                   ▼                   ▼
              ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
              │  GitHub Pages    │ │  Vercel API      │ │  External        │
              │  (Static Host)   │ │  (Serverless)    │ │  Services        │
              │                  │ │                  │ │                  │
              │  - HTML          │ │  - send-otp      │ │  - EmailJS       │
              │  - CSS           │ │  - verify-otp    │ │  - WhatsApp      │
              │  - JavaScript    │ │                  │ │  - Google Fonts  │
              │  - Images        │ │                  │ │                  │
              └──────────────────┘ └──────────────────┘ └──────────────────┘
                         │                   │                   │
                         └───────────────────┴───────────────────┘
                                             │
                              srijeetchatterjee.com
                              (Custom Domain via DNS)
```

---

## Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | HTML5, CSS3, Vanilla JS | UI rendering |
| **Hosting** | GitHub Pages | Static file hosting |
| **Backend** | Vercel Serverless | OTP API endpoints |
| **Email** | EmailJS | OTP email delivery |
| **Fonts** | Google Fonts (Inter) | Typography |
| **Domain** | Custom DNS | srijeetchatterjee.com |

---

## Repository Structure

```
sri-website/
├── index.html                    # Main HTML (single page)
├── README.md                     # Project readme
├── .gitignore                    # Git ignore rules
│
├── assets/
│   ├── css/
│   │   └── style.css             # All styles (~1200 lines)
│   │
│   ├── js/
│   │   └── app.js                # All JavaScript (~1000 lines)
│   │
│   ├── images/
│   │   ├── profile/              # Profile photo (JPG, HEIC)
│   │   ├── logo/                 # Company & institution logos
│   │   ├── travel/               # Travel photos
│   │   ├── family/               # Family photos
│   │   └── friends/              # Friends photos
│   │
│   └── docs/
│       └── SrijeetChatterjee_Resume_v1.pdf
│
└── docs/
    ├── website-architecture.md         # This document
    ├── booking-system-architecture.md  # Booking system details
    └── booking-system-architecture-old.md
```

---

## Page Load Sequence

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              PAGE LOAD SEQUENCE                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘

  Browser Request                                    Server Response
       │                                                  │
       │  1. GET index.html                               │
       │─────────────────────────────────────────────────>│
       │                                                  │
       │  2. HTML parsed, assets requested in parallel    │
       │     ├── style.css?v=8                           │
       │     ├── Inter font (Google Fonts)               │
       │     └── heic2any.min.js (CDN)                   │
       │<─────────────────────────────────────────────────│
       │                                                  │
       │  3. GET app.js?v=9                               │
       │─────────────────────────────────────────────────>│
       │                                                  │
       │  4. DOMContentLoaded fires                       │
       │     └── init() function executes                │
       │                                                  │
       ▼                                                  │
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                            JAVASCRIPT INITIALIZATION                                  │
├──────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                       │
│   init() function calls (in order):                                                  │
│                                                                                       │
│   1. renderHero()              → Populates name, tagline, summary                    │
│   2. renderSocialRows()        → Creates social media icons (LinkedIn, GitHub, etc.) │
│   3. renderExperience()        → Builds work experience timeline cards               │
│   4. renderEducation()         → Creates education cards with logos                  │
│   5. renderAchievements()      → Populates achievements list                         │
│   6. renderSkills()            → Creates skill category cards with chips             │
│   7. renderMentorship()        → Builds mentorship offering cards                    │
│   8. renderPhotosAndFilters()  → Creates photo gallery with category filters         │
│   9. renderPersonalSocial()    → Adds Instagram, Facebook, X links                   │
│  10. renderFloatingWhatsApp()  → Creates floating WhatsApp button                    │
│  11. bindNav()                 → Scroll effects & mobile menu toggle                 │
│  12. bindFooter()              → Populates contact info & year                       │
│  13. initCounters()            → Visit counter & like button (localStorage)          │
│  14. initBookingModal()        → Email OTP verification & booking form               │
│  15. initPhotoModal()          → Full-screen photo viewer                            │
│  16. loadProfileImage()        → Loads profile photo (JPG → HEIC fallback)           │
│                                                                                       │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Data Architecture

All content is stored as JavaScript objects in `app.js` (no external database):

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              DATA OBJECTS IN app.js                                  │
└─────────────────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
  │    profile      │     │   experience    │     │   education     │
  ├─────────────────┤     ├─────────────────┤     ├─────────────────┤
  │ name            │     │ company         │     │ institution     │
  │ title           │     │ role            │     │ degree          │
  │ tagline         │     │ location        │     │ location        │
  │ summary         │     │ period          │     │ period          │
  │ contact {       │     │ logo            │     │ logo            │
  │   phones[]      │     │ highlights[]    │     └─────────────────┘
  │   email         │     └─────────────────┘
  │   location      │
  │ }               │     ┌─────────────────┐     ┌─────────────────┐
  └─────────────────┘     │    skills       │     │   mentorship    │
                          ├─────────────────┤     ├─────────────────┤
  ┌─────────────────┐     │ category        │     │ title           │
  │  socialLinks    │     │ skills[]        │     │ description     │
  ├─────────────────┤     └─────────────────┘     │ icon            │
  │ name            │                             └─────────────────┘
  │ url             │     ┌─────────────────┐
  │ icon            │     │  achievements   │     ┌─────────────────┐
  └─────────────────┘     ├─────────────────┤     │   localPhotos   │
                          │ string[]        │     ├─────────────────┤
                          └─────────────────┘     │ travel[]        │
                                                  │ family[]        │
                                                  │ friends[]       │
                                                  └─────────────────┘
```

---

## Component Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              PAGE SECTIONS (index.html)                              │
└─────────────────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │  TOPBAR          │  "Srijeet Chatterjee - AI Engineering Lead..."              │
  └─────────────────────────────────────────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │  NAVIGATION      │  Logo │ About │ Experience │ Skills │ Mentorship │ Book     │
  │  (header#siteNav)│  Sticky on scroll, mobile hamburger menu                    │
  └─────────────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │  HERO SECTION    │  Profile photo with glow rings                              │
  │  (#hero)         │  Name, tagline, summary                                     │
  │                  │  Social icons (LinkedIn, GitHub, Medium, LeetCode, Resume)  │
  │                  │  CTA buttons: View Experience, Download Resume              │
  │                  │  Stats: Visits counter, Like button                         │
  └─────────────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │  EXPERIENCE      │  Two-column layout:                                         │
  │  (#experience)   │  ┌─────────────────────┐  ┌─────────────────────┐           │
  │                  │  │ Work Experience     │  │ Education           │           │
  │                  │  │ (Timeline cards)    │  │ (Cards with logos)  │           │
  │                  │  │                     │  │                     │           │
  │                  │  │ - Company logo      │  │ Key Achievements    │           │
  │                  │  │ - Role, location    │  │ (Trophy icon list)  │           │
  │                  │  │ - Highlights        │  │                     │           │
  │                  │  └─────────────────────┘  └─────────────────────┘           │
  └─────────────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │  SKILLS          │  Grid of skill category cards                               │
  │  (#skills)       │  Each card: Category title + skill chips                    │
  │                  │  9 categories: ML, NLP, Agentic AI, Frameworks, etc.        │
  └─────────────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │  MENTORSHIP      │  Three offering cards with icons                            │
  │  (#mentorship)   │  FAANG Interview Prep │ Mock Interviews │ ML Strategy       │
  │                  │  "Schedule a Meeting" button → Opens booking modal          │
  └─────────────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │  LIFESTYLE       │  Photo gallery with filters: All │ Travel │ Family │ Friends│
  │  (#lifestyle)    │  Click photo → Full-screen modal                            │
  │                  │  Personal social links: Instagram, Facebook, X              │
  └─────────────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │  FOOTER          │  Contact info (email, phones, location)                     │
  │  (#contact)      │  Social links │ Copyright year                              │
  └─────────────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │  FLOATING        │  WhatsApp button (bottom-right corner)                      │
  │  ELEMENTS        │  Click → Opens WhatsApp chat                                │
  └─────────────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │  MODALS          │  Booking Modal (#bookingModal) - Email OTP + booking form   │
  │                  │  Photo Modal (#photoModal) - Full-screen image viewer       │
  └─────────────────────────────────────────────────────────────────────────────────┘
```

---

## CSS Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              STYLE.CSS STRUCTURE                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

  1. CSS Variables (:root)
     ├── --bg: #0a0f1a (Dark background)
     ├── --accent: #10b981 (Green accent)
     ├── --text: #f8fafc (Light text)
     └── --border: #1e293b (Border color)

  2. Base Styles
     ├── Reset & Box-sizing
     ├── Body & Typography
     └── Link styles

  3. Layout Components
     ├── .container (max-width: 1200px)
     ├── .section (padding, background)
     └── Grid utilities

  4. Navigation
     ├── .nav-shell (sticky header)
     ├── .nav-links (desktop menu)
     └── .nav-toggle (mobile hamburger)

  5. Hero Section
     ├── .hero-grid (two-column layout)
     ├── .photo-frame & .photo-ring (animated glow)
     └── .hero-stats (counters)

  6. Content Sections
     ├── .timeline-card (experience)
     ├── .skill-card & .chip
     ├── .mentorship-card
     └── .photo-grid & .photo-card

  7. Modal Styles
     ├── .modal (overlay)
     ├── .booking-modal (form)
     └── .photo-modal (gallery)

  8. Responsive Breakpoints
     ├── @media (max-width: 900px)
     └── @media (max-width: 600px)
```

---

## Image Handling

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              IMAGE LOADING STRATEGY                                  │
└─────────────────────────────────────────────────────────────────────────────────────┘

  Profile Photo:
  ┌───────────────────────────────────────────────────────────────────────────────────┐
  │  1. Show SVG placeholder with "SC" initials                                       │
  │  2. Attempt to load JPG (sri_profile_image.jpg)                                   │
  │  3. On JPG error → Fetch HEIC file                                                │
  │  4. Convert HEIC to JPEG using heic2any library                                   │
  │  5. Display converted image                                                       │
  └───────────────────────────────────────────────────────────────────────────────────┘

  Gallery Photos:
  ┌───────────────────────────────────────────────────────────────────────────────────┐
  │  1. Load images lazily (loading="lazy")                                           │
  │  2. On error → Remove card from grid (no broken image icons)                      │
  │  3. Click → Open in full-screen modal                                             │
  └───────────────────────────────────────────────────────────────────────────────────┘

  Company/Institution Logos:
  ┌───────────────────────────────────────────────────────────────────────────────────┐
  │  1. Stored as optimized PNG (200x200px)                                           │
  │  2. On error → Hide logo, show text only                                          │
  │  3. Displayed inline with company/institution names                               │
  └───────────────────────────────────────────────────────────────────────────────────┘
```

---

## Local Storage Usage

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              LOCALSTORAGE KEYS                                       │
└─────────────────────────────────────────────────────────────────────────────────────┘

  Key           │ Purpose                    │ Initial Value
  ──────────────┼────────────────────────────┼─────────────────
  sc_visits     │ Page visit counter         │ 1046
  sc_likes      │ Total likes count          │ 0
  sc_liked      │ Has user liked? (0/1)      │ undefined
```

---

## Booking System Integration

The booking system is documented separately in `booking-system-architecture.md`.

**Quick Summary:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              BOOKING FLOW                                            │
└─────────────────────────────────────────────────────────────────────────────────────┘

  User clicks "Book a Slot"
       │
       ▼
  ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
  │ Enter Email     │────>│ Vercel API      │────>│ EmailJS         │
  │                 │     │ /api/send-otp   │     │ (sends email)   │
  └─────────────────┘     └─────────────────┘     └─────────────────┘
       │
       │ otpHash + expiry returned
       ▼
  ┌─────────────────┐     ┌─────────────────┐
  │ Enter OTP       │────>│ Vercel API      │
  │                 │     │ /api/verify-otp │
  └─────────────────┘     └─────────────────┘
       │
       │ valid: true
       ▼
  ┌─────────────────┐     ┌─────────────────┐
  │ Fill Details    │────>│ WhatsApp        │
  │ Confirm Booking │     │ (click-to-chat) │
  └─────────────────┘     └─────────────────┘
```

---

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              DEPLOYMENT PIPELINE                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

  Developer                     GitHub                      Production
      │                            │                            │
      │  git push main             │                            │
      │───────────────────────────>│                            │
      │                            │                            │
      │                            │  GitHub Actions            │
      │                            │  (auto-deploy)             │
      │                            │───────────────────────────>│
      │                            │                            │
      │                            │                    GitHub Pages
      │                            │                    (CDN cached)
      │                            │                            │
      │                            │                            │
      │                       Custom Domain                     │
      │                       srijeetchatterjee.com             │
      │                       (DNS CNAME → GitHub)              │
      │                            │                            │

  Vercel (Booking API):
      │                            │                            │
      │  git push main             │                            │
      │───────────────────────────>│  booking-api repo          │
      │                            │───────────────────────────>│
      │                            │                    Vercel Serverless
      │                            │                    booking-api-psi.vercel.app
```

---

## Performance Considerations

| Optimization | Implementation |
|-------------|----------------|
| **No Framework** | Vanilla JS (~1000 lines) - no React/Vue overhead |
| **Single CSS File** | All styles in one file, minified |
| **Lazy Loading** | Gallery images load on scroll |
| **SVG Icons** | Inline SVGs, no icon font library |
| **Local Data** | No API calls for content, all in JS |
| **CDN Fonts** | Google Fonts with display=swap |
| **Image Fallbacks** | HEIC → JPG conversion, graceful error handling |

---

## Security Measures

| Area | Implementation |
|------|----------------|
| **No Backend Secrets in Frontend** | All API credentials on Vercel |
| **OTP Hashing** | SHA-256 with server-side salt |
| **CORS Protection** | API restricted to srijeetchatterjee.com |
| **No Database** | No user data stored, localStorage only |
| **HTTPS** | Enforced by GitHub Pages |

---

## External Dependencies

| Dependency | Source | Purpose |
|------------|--------|---------|
| Google Fonts | fonts.googleapis.com | Inter font family |
| heic2any | cdn.jsdelivr.net | HEIC to JPEG conversion |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v1 | Feb 2025 | Initial portfolio with frontend-only booking |
| v2 | Feb 2025 | Secure Vercel backend for OTP |
| v3 | Feb 2025 | Renamed to sri-website, added architecture docs |

---

*Document created: February 2025*
*Architecture: Static Site + Serverless Backend*
