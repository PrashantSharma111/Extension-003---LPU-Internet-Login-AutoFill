const username = document.querySelector("input[name='username']");
const password = document.querySelector("input[name='password']");
const saveInfo = document.querySelector("input[name='saveinfo']");
const agreePolicy = document.querySelector("#agreepolicy");
const loginBtn = document.querySelector("#loginbtn");

if(loginBtn)
{
    loginBtn.parentElement.innerHTML += `<button id='autoBtn' class='buttonstyle'>Auto</button>`;
    const autoBtn = document.getElementById('autoBtn');
    autoBtn.addEventListener('click', login);
}

const login = () => {

    if(username)
        username.value = "<Your Registration Number>";
    if(password)
        password.value = "<Your Internet Password>";
    if(loginBtn)
        loginBtn.disabled = false;
    if(agreePolicy)
        agreePolicy.checked = false;

    if(saveInfo)
        saveInfo.checked = true;
    if(agreePolicy)
        agreePolicy.checked = true;
    if(loginBtn)
        loginBtn.click();
    console.log("Logged in");
}