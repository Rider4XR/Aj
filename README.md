# Rider4XR Secure Startup Model

Included files:
- index.html: Mobile OTP login UI + role selection
- customer.html: Customer booking panel
- rider.html: Rider panel with ring/accept/reject demo
- admin.html: Admin dashboard
- firebase-config.js: Firebase, Google Maps API key, UPI and fare settings

Pricing model:
- Customer: ₹15/KM
- Rider payout: ₹13/KM
- Minimum fare: ₹50 up to 2.5 KM
- Platform fee: ₹10
- UPI: 9929562585@ptyes

To make it live:
1. Create Firebase project.
2. Enable Phone Authentication.
3. Enable Firestore.
4. Add Firebase config in firebase-config.js.
5. Create Google Cloud project.
6. Enable Maps JavaScript API, Places API, Routes API.
7. Add Google API key in firebase-config.js.
8. Restrict Google API key to your domain.
9. Deploy on GitHub + Vercel/Netlify.

Security notes:
- Do not store admin password in frontend code.
- Use Firebase Auth and Firestore security rules.
- Restrict Google API key by domain.
- Set Google Cloud daily quota/budget.
- Start with direct UPI, add Razorpay after volume grows.

Demo note:
This zip has working UI/prototype. Real OTP, Google route calculation, and live rider tracking need Firebase + Google API credentials.
