import { firebaseConfig } from './firebase-config.js';
const sendBtn=document.getElementById('sendOtpBtn'), verifyBtn=document.getElementById('verifyOtpBtn');
const otpBox=document.getElementById('otpBox'), roleBox=document.getElementById('roleBox');
sendBtn.onclick=()=>{ const n=document.getElementById('phoneNumber').value.trim(); if(n.length!==10){alert('10 digit mobile number dalo');return;} otpBox.classList.remove('hidden'); alert('Demo: Firebase config ke baad real OTP send hoga. Abhi 123456 use karo.'); };
verifyBtn.onclick=()=>{ const otp=document.getElementById('otpCode').value.trim(); if(otp.length<4){alert('OTP enter karo');return;} roleBox.classList.remove('hidden'); };
