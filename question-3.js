// Question #3
let userPassword = "password";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(password) {
  if (password.length > 10) {
    return "Strong";
  } else if (password.length >= 6 && password.length <= 10) {
    return "Medium";
  } else if (password.length < 6) {
    return "Weak";
  }
}

console.log(checkPasswordStrength(userPassword));
