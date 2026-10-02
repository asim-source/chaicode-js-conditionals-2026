/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  let count = 0;
  let uppercase = /[A-Z]/.test(password);
  let lowercase = /[a-z]/.test(password);
  let number    = /[0-9]/.test(password);
  let special   = /[^a-zA-Z0-9]/.test(password);
  if(password==="") return "weak";
  if(typeof password!=="string") return "weak";
  
  if(password.length >= 8){
    ++count;
  }
  if(uppercase===true){
    ++count;
  }
  if(lowercase===true){
    ++count;
  }
  if(number===true){
    ++count;
  }
  if(special===true){
    ++count;
  }

  if(count===5){
    return "very strong";
  }else if(count===4){
    return "strong"
  }else if(count===2 || count===3){
    return "medium";
  }else if(count===0 || count===1){
    return "weak";
  }
  
}
