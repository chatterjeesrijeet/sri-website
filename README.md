# Personal webpage — Srijeet Chatterjee

This repository is a complete static personal website designed to be hosted on GitHub Pages. It showcases skills, experience, galleries (travel/family/friends), contact links, and a client-side booking flow that uses Firebase for email verification and Firestore storage.

What I added
- `index.html` — main site
- `assets/css/style.css` — styles
- `assets/js/app.js` — client-side behavior (visit count, likes, gallery, booking flow)
- `assets/js/firebase-config.example.js` — example Firebase config (replace with your values and rename)
- `assets/docs/resume.pdf` — copied inside repo (originally from your provided materials)
- `assets/images/profile/sri_profile_image.HEIC` — copied profile image

Folder structure (important)
- `assets/docs/` — resume and documents
- `assets/images/profile/` — profile image
- `assets/images/travel/` — travel photos (put images named `1.jpg`, `2.jpg`, ...)
- `assets/images/family/` — family photos
- `assets/images/friends/` — friends photos

Quick setup (required to enable bookings, counters)
1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication -> Sign-in method -> Email link (passwordless)
3. Create Firestore database
4. Copy `assets/js/firebase-config.example.js` to `assets/js/firebase-config.js` and paste your Firebase config
5. (Optional) Set Firestore rules for production (see example inside the example config file)

Calendly setup (recommended — much less setup than building calendar invites)
1. Create a Calendly account and create your event types (15, 30, 45 minute options recommended).
2. Copy your Calendly link (e.g. `https://calendly.com/your-username`).
3. Copy `assets/js/calendly-config.example.js` to `assets/js/calendly-config.js` and replace the URL.
4. Reload your site — the inline Calendly scheduler will appear in the "Schedule a Meeting" section and the fallback booking form will be hidden.

Deployment to GitHub Pages
1. Push the repo to GitHub (this repository). On GitHub go to Settings -> Pages -> Source: `gh-pages` or `main` branch / `root`.
2. GitHub Pages will serve `index.html` from the branch you choose. This site is static and uses client-side Firebase for bookings/verification.

Notes & security
- The booking flow is client-only and uses Firebase Authentication email links; this avoids exposing your email while still verifying users. For production, tighten Firestore rules and consider using Cloud Functions to send calendar invites and integrate with your calendar provider.
- Visit and like counts use Firestore (if configured) otherwise fall back to localStorage.

Next steps (recommended)
- Create a small Cloud Function to accept confirmed bookings and send calendar invites (Google Calendar or Outlook).
- Add more gallery images to the image folders (1.jpg, 2.jpg, ...). The gallery script will pick them up automatically.
- Tweak copy and numbers in `index.html` to reflect exact project metrics you prefer.

If you want, I can now:
- Wire a Cloud Function to create calendar invites and finalize bookings, or
- Replace the static booking flow with Calendly/Google Calendar integration.

Notes on preference
- If you want Calendly (fast, reliable): follow the Calendly setup above. No Firebase needed for bookings.
- If you want a fully self-hosted flow (email verification + Firestore storage): use the Firebase flow already present. For production, combine Firestore triggers + Cloud Functions to emit calendar invites.
