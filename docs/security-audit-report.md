# Security Audit Report - Booking System

*Audit Date: February 2025*

---

## Overview

Security assessment of the OTP-based booking system spanning:
- **Frontend:** GitHub Pages (`sri-website`)
- **Backend:** Vercel Serverless (`booking-api`)

---

## ✅ FIXED (Low-Hanging Fruit)

| Issue | Severity | Fix Applied |
|-------|----------|-------------|
| Hardcoded fallback salt | HIGH | Removed fallback, now fails gracefully if `OTP_SALT` missing |

---

## 🟡 MEDIUM SEVERITY (Document for Future)

### 1. No Rate Limiting
- **Issue:** Attackers can spam `/api/send-otp` to exhaust EmailJS quota (200/month) or flood victim inboxes
- **Impact:** Service denial, email abuse
- **Fix Needed:** Add rate limiting (e.g., Vercel KV store or Upstash Redis) - requires additional infrastructure

### 2. Client-Side Expiry Check is Bypassable
- **Issue:** The `expiry` timestamp is returned to client and sent back for verification. A malicious client could modify it.
- **Current mitigation:** The expiry is not cryptographically signed
- **Better approach:** Sign the expiry+hash together or store server-side (requires database)

### 3. OTP Brute Force Possible
- **Issue:** No limit on `/api/verify-otp` attempts. 6-digit OTP = 1 million combinations
- **Mitigation:** 10-minute expiry helps, but automated attacks can try ~6000 per second
- **Fix Needed:** Lock out after 3-5 failed attempts (requires state storage)

---

## 🟢 LOW SEVERITY (Acceptable Risks)

### 1. Localhost Origins in CORS
- `http://localhost:3000` and `http://127.0.0.1:5500` in production
- **Risk:** Minimal - attacker would need local access
- **Recommendation:** Consider removing for production builds

### 2. Error Details Exposed
- `send-otp.js:73` returns `details: errorText`
- `send-otp.js:85` returns `details: String(error)`
- **Risk:** Information leakage to attackers
- **Recommendation:** Log errors server-side, return generic messages to client

### 3. Personal Contact Info in Frontend
- `app.js` contains phone numbers and email in code
- **Risk:** Web scrapers can harvest this data
- **Note:** This is intentional for a portfolio site, but be aware

---

## ✅ ALREADY SECURE

| Security Measure | Status |
|-----------------|--------|
| Credentials in env vars (not code) | ✅ |
| Server-to-server EmailJS calls | ✅ |
| CORS protection | ✅ |
| OTP hashing with SHA-256 + salt | ✅ |
| OTP expiry (10 minutes) | ✅ |
| HTTPS enforced | ✅ |

---

## Summary

The hardcoded salt fallback has been fixed. The remaining medium-severity issues (rate limiting, brute force protection) require infrastructure like Redis/database which is significant work for a free-tier personal project. For the current use case (200 bookings/month limit), the existing security is adequate.

---

*Architecture: Secure Serverless with Vercel*
