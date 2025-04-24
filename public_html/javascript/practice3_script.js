function checkPasswords() {
    let pwd1 = document.getElementById('pwd1').value;
    let pwd2 = document.getElementById('pwd2').value;
    
    if (pwd1.length < 8 || pwd2.length < 8) {
        alert("WARNING: Password is less than 8 characters long.");
    } else if (pwd1 !== pwd2) {
        alert("WARNING: Passwords do not match.");
    } else {
        alert("VERIFIED: Passwords match.");
    }
}