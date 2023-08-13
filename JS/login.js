
// Login Button
let loginBtn = document.querySelector(".buttons .loginBtn");

let loginForm = document.querySelector(".login");

loginBtn.addEventListener('click', ()=>{
    loginForm.classList.add("Login");
    signForm.classList.add("hide");
});

// Close Login Form
let CloseBtn = document.getElementById("window-close");
CloseBtn.addEventListener("click", ()=>{
    loginForm.classList.add("hide");
})

// Sign Up Button 
let signBtn = document.querySelector(".signupBtn");

let signForm = document.querySelector(".signUpForm");

signBtn.addEventListener("click", ()=>{
    signForm.classList.add("Sign");
    loginForm.classList.add("hide")
})

// Close Sign Up Form
let CloseBtn2 = document.getElementById("window-close2");
CloseBtn2.addEventListener("click", ()=>{
    signForm.classList.remove("Sign");
})
