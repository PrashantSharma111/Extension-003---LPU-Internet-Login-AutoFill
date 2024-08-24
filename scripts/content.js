const username = document.querySelector("input[name='username']");
const password = document.querySelector("input[name='password']");
const saveInfo = document.querySelector("input[name='saveinfo']");
const agreePolicy = document.querySelector("#agreepolicy");
const loginBtn = document.querySelector("#loginbtn");

if(username)
    username.value = "<YOUR USERNAME>";
if(password)
    password.value = "<YOUR PASSWORD>";
if(loginBtn)
    loginBtn.disabled = false;
if(agreePolicy)
    agreePolicy.checked = false;
setTimeout(() => {
    if(saveInfo)
        saveInfo.checked = true;
    if(agreePolicy)
        agreePolicy.checked = true;
    if(loginBtn)
        loginBtn.click();
    console.log("Logged in");
}, 500);