const emailInput = document.querySelector(".email-input");
const notifyBtn = document.querySelector(".notify-btn");
const emailError = document.querySelector(".email-error-text");
const card = document.querySelector(".card");

notifyBtn.addEventListener("click", ()=> {
    if(!ValidateEmail()) {
        emailError.classList.remove("hidden");
        emailInput.classList.add("email-input-error");
        emailInput.style.border = "1px solid var(--light-red)";
    }
    else {
        emailError.classList.add("hidden");
        emailInput.classList.remove("email-input-error");
        emailInput.style.border = ".5px solid var(--grey)";
        window.location.reload();
    }
})

function ValidateEmail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)){
        emailInput.focus();
        return true;
    }
    else {
        emailInput.focus();
        return false;
    }
}

