# Booking System Architecture (v2 - Secure)

## Overview

A secure booking system with email OTP verification using a **Vercel serverless backend**. All sensitive credentials are stored server-side, never exposed in browser code.

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        SECURE BOOKING SYSTEM ARCHITECTURE                        │
└─────────────────────────────────────────────────────────────────────────────────┘

    ┌─────────────────┐         ┌─────────────────────┐         ┌─────────────────┐
    │   Your Website  │         │   Vercel Serverless │         │    EmailJS      │
    │  (GitHub Pages) │         │   (booking-api)     │         │    Service      │
    │                 │         │                     │         │                 │
    │  - HTML/CSS/JS  │         │  - Node.js API      │         │  - Sends emails │
    │  - NO secrets   │         │  - ENV variables    │         │  - Gmail SMTP   │
    │                 │         │  - Credentials HERE │         │                 │
    └────────┬────────┘         └──────────┬──────────┘         └────────┬────────┘
             │                             │                              │
             │  POST /api/send-otp         │                              │
             │  { email: "user@mail.com" } │                              │
             │────────────────────────────>│                              │
             │                             │                              │
             │                             │  1. Generate OTP             │
             │                             │  2. Hash OTP (SHA-256)       │
             │                             │  3. Send email with          │
             │                             │     hidden credentials       │
             │                             │─────────────────────────────>│
             │                             │                              │
             │  { otpHash, expiry }        │                              │
             │<────────────────────────────│                              │
             │                             │                              │
             │  POST /api/verify-otp       │                              │
             │  { otp, otpHash, expiry }   │                              │
             │────────────────────────────>│                              │
             │                             │                              │
             │                             │  Hash input, compare         │
             │                             │                              │
             │  { valid: true/false }      │                              │
             │<────────────────────────────│                              │
             │                             │                              │

    ┌─────────────────────────────────────────────────────────────────────────────┐
    │  ✅ Credentials NEVER in browser                                             │
    │  ✅ OTP generated on server                                                  │
    │  ✅ Only hash returned to frontend                                           │
    │  ✅ Domain-restricted CORS                                                   │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Security Comparison

### Before (v1) vs After (v2)

| Aspect | v1 (Frontend Only) | v2 (Vercel Backend) |
|--------|-------------------|---------------------|
| Credentials location | In app.js (exposed) | Vercel ENV vars (hidden) |
| OTP generation | Browser | Server |
| OTP visible in code | Yes (DevTools) | No |
| OTP visible in Network | Yes (EmailJS request) | No (server-to-server) |
| Can be abused | Yes | No (CORS + server-side) |
| Cost | $0 | $0 (Vercel free tier) |

### Attack Vectors - Eliminated

```
┌──────────────────────────────────────────────────────────────────┐
│                    SECURITY IMPROVEMENTS                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ❌ BEFORE: Credentials in app.js                               │
│   ✅ AFTER:  Credentials in Vercel environment variables         │
│                                                                   │
│   ❌ BEFORE: OTP visible in browser DevTools                     │
│   ✅ AFTER:  Only hash visible (useless without server salt)     │
│                                                                   │
│   ❌ BEFORE: OTP visible in Network tab (EmailJS request)        │
│   ✅ AFTER:  Email sent server-to-server (not visible)           │
│                                                                   │
│   ❌ BEFORE: Anyone could use your EmailJS credentials           │
│   ✅ AFTER:  CORS restricts to your domain only                  │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## System Components

### 1. Frontend (GitHub Pages)
**Repository:** `project_3`
**URL:** `https://srijeetchatterjee.com`

```
project_3/
├── index.html          # Booking modal UI
├── assets/
│   ├── css/style.css   # Modal styling
│   └── js/app.js       # API calls (NO credentials)
└── docs/
    └── booking-system-architecture.md
```

### 2. Backend API (Vercel)
**Repository:** `booking-api`
**URL:** `https://booking-api-psi.vercel.app`

```
booking-api/
├── api/
│   ├── send-otp.js     # POST /api/send-otp
│   └── verify-otp.js   # POST /api/verify-otp
├── package.json
└── vercel.json
```

### 3. Environment Variables (Vercel Dashboard)

| Variable | Purpose |
|----------|---------|
| `EMAILJS_PUBLIC_KEY` | EmailJS authentication |
| `EMAILJS_SERVICE_ID` | Gmail service identifier |
| `EMAILJS_TEMPLATE_ID` | OTP email template |
| `OTP_SALT` | Secret salt for hashing |

---

## API Endpoints

### POST /api/send-otp

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "otpHash": "a3f2b8c1d4e5f6...",
  "expiry": 1708300000000,
  "message": "OTP sent successfully"
}
```

**Response (Error):**
```json
{
  "error": "Invalid email address"
}
```

### POST /api/verify-otp

**Request:**
```json
{
  "otp": "482910",
  "otpHash": "a3f2b8c1d4e5f6...",
  "expiry": 1708300000000
}
```

**Response (Valid):**
```json
{
  "valid": true,
  "message": "OTP verified successfully"
}
```

**Response (Invalid):**
```json
{
  "valid": false,
  "error": "Invalid OTP"
}
```

---

## CORS Configuration

Only these domains can call the API:

```javascript
const ALLOWED_ORIGINS = [
  'https://srijeetchatterjee.com',
  'https://www.srijeetchatterjee.com',
  'http://localhost:3000',
  'http://127.0.0.1:5500'
];
```

---

## User Flow

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              USER JOURNEY                                        │
└─────────────────────────────────────────────────────────────────────────────────┘

  1. User clicks "Book a Slot"
           │
           ▼
  2. User enters email address
           │
           ▼
  3. Frontend calls POST /api/send-otp
           │
           ▼
  4. Vercel API:
     ├── Generates 6-digit OTP
     ├── Hashes OTP with secret salt
     ├── Sends email via EmailJS (server-to-server)
     └── Returns hash + expiry to frontend
           │
           ▼
  5. User receives OTP in email inbox
           │
           ▼
  6. User enters OTP in form
           │
           ▼
  7. Frontend calls POST /api/verify-otp
           │
           ▼
  8. Vercel API:
     ├── Hashes user input with same salt
     ├── Compares with stored hash
     └── Returns valid: true/false
           │
           ▼
  9. If valid → Enable booking form
           │
           ▼
  10. User fills details (name, phone, date, time)
           │
           ▼
  11. User clicks "Confirm Booking"
           │
           ▼
  12. WhatsApp opens with pre-filled message
           │
           ▼
  13. User sends message → Owner receives booking request
```

---

## Cost Analysis

| Service | Monthly Cost | Limit |
|---------|-------------|-------|
| GitHub Pages | $0 | Unlimited |
| Vercel (Hobby) | $0 | 100,000 requests |
| EmailJS (Free) | $0 | 200 emails/month |
| **Total** | **$0** | ~200 bookings/month |

---

## Booking Constraints

```
┌──────────────────────────────────────────────────────────────────┐
│                      BOOKING RULES                                │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│   📅 DATES                                                        │
│   ├── Weekends only (Saturday & Sunday)                          │
│   ├── Minimum 48 hours advance notice                            │
│   └── Maximum 3 months in advance                                │
│                                                                   │
│   ⏰ TIME SLOTS (IST)                                             │
│   ├── Available: 10:00 AM - 6:00 PM                              │
│   └── 30-minute intervals                                        │
│                                                                   │
│   ⏱️ DURATION OPTIONS                                             │
│   ├── 15 minutes                                                 │
│   ├── 30 minutes                                                 │
│   └── 45 minutes                                                 │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## Deployment Workflow

### Frontend Updates
```bash
# In project_3 folder
git add .
git commit -m "Update message"
git push
# GitHub Pages auto-deploys
```

### Backend Updates
```bash
# In booking-api folder
git add .
git commit -m "Update message"
git push
# Vercel auto-deploys
```

---

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| OTP not sending | EmailJS limit reached | Check EmailJS dashboard |
| CORS error | Wrong domain | Add domain to ALLOWED_ORIGINS |
| "Invalid OTP" always | Salt mismatch | Check OTP_SALT in Vercel |
| API 500 error | Missing ENV vars | Check Vercel Environment Variables |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v1 | Feb 2025 | Frontend-only with client-side EmailJS |
| v2 | Feb 2025 | Vercel backend, credentials secured |

---

*Document created: February 2025*
*Architecture: Secure Serverless with Vercel*
