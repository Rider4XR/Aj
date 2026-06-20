// 1) Firebase console se config yahan paste karo.
// 2) OTP ke liye Authentication > Phone enable karo.
// 3) Firestore database enable karo.
// NOTE: Public web config secret nahi hota, par Firebase Rules zaroor lagao.

export const firebaseConfig = {
  apiKey: "PASTE_FIREBASE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

export const GOOGLE_MAPS_API_KEY = "PASTE_GOOGLE_MAPS_API_KEY";
export const UPI_ID = "9929562585@ptyes";
export const CUSTOMER_RATE_PER_KM = 15;
export const RIDER_PAYOUT_PER_KM = 13;
export const BASE_DISTANCE_KM = 2.5;
export const BASE_FARE = 50;
export const PLATFORM_FEE = 10;
