const signInModal = document.getElementById("signInModal");
const signUpModal = document.getElementById("signUpModal");
const signInButton = document.getElementById("signInButton");
const signUpButton = document.getElementById("signUpButton");
const closeSignIn = document.getElementById("closeSignIn");
const closeSignUp = document.getElementById("closeSignUp");

signInButton.onclick = () => {
    signInModal.style.display = "flex";
};

signUpButton.onclick = () => {
    signUpModal.style.display = "flex";
};

closeSignIn.onclick = () => {
    signInModal.style.display = "none";
};

closeSignUp.onclick = () => {
    signUpModal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === signInModal) {
        signInModal.style.display = "none";
    } else if (event.target === signUpModal) {
        signUpModal.style.display = "none";
    }
};
